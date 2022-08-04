import { Component, ComponentFactoryResolver, OnInit} from '@angular/core';
import { Form, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import Validation from '../../validation/validation';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  titulo = "Añadir nuevo médico";
  usuarioForm: UntypedFormGroup;
  id: string;

  constructor(private fb: UntypedFormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private _usuarioService: UsuarioService,
    private aRouter: ActivatedRoute) { 
    this.usuarioForm = this.fb.group({
      nombreu:[ '', Validators.required],
      contrau:[ '', Validators.required],
      confirmcontrau:['', Validators.required],
      correou:[ '', Validators.required, Validators.email],
      tipou:[ '', Validators.required]
    },{
      validators:[Validation.match('contrau','confirmcontrau')]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.esEditar();
  }

  camposNoVacio(): any{
    if (this.usuarioForm.get('nombreu')?.value == "")
      return false;
    if (this.usuarioForm.get('contrau')?.value == "")
      return false;
    if (this.usuarioForm.get('confirmcontrau')?.value == "")
      return false;
    if (this.usuarioForm.get('tipou')?.value == "")
      return false;
    if (this.usuarioForm.get('correo')?.value == "")
      return false; 
    return true;
  }
  coinciden():any{
    if(this.usuarioForm.get('contrau')?.value == this.usuarioForm.get('confirmcontrau')?.value){
      return true;
    }else{
      return false;
    }
  }

  addUsuario(){
    const USUARIO: Usuario = {           
      nombreUsuario: this.usuarioForm.get('nombreu')?.value,
      contrasena: this.usuarioForm.get('contrau')?.value,
      correo: this.usuarioForm.get('correou')?.value,
      tipoUsuario: this.usuarioForm.get('tipou')?.value,
      idTipoUsuario: '',
    }
    console.log(this.coinciden())
    if(this.camposNoVacio() == true && this.coinciden()){
      if(this.id !== null){
        //Editar
        this._usuarioService.editUsuario(this.id,USUARIO).subscribe(data => {
          this.toastr.info('El usuario fue actualizado','Mensaje');
          this.router.navigate(['/usuario']);
        }, error => {
          console.log(error);
          this.usuarioForm.reset();
        })
      }else{
        //Agregar
        //console.log(USUARIO)
        this._usuarioService.saveUsuario(USUARIO).subscribe(data => {
          this.toastr.success('El usuario fue agregado.','Notificación');
          this.router.navigate(['/usuario'])
        }, error =>{
          console.log(error);
          this.usuarioForm.reset();
        })
      }
    }else{
      this.toastr.info('Faltan campos por completar.','Mensaje');
    }
  }

  esEditar(){
    if(this.id!==null){
      this.titulo = "Editar usuario";
      this._usuarioService.obtenerUsuario(this.id).subscribe(data => {
        this.usuarioForm.setValue({
          nombreu:data.nombreUsuario,
          contrau:data.contrasena,
          confirmcontrau: '',
          correou:data.correo,
          tipou:data.tipoUsuario,
        })
      })
    }
  }

}
