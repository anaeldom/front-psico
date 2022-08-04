import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.component.html',
  styleUrls: ['./add-paciente.component.css']
})
export class AddPacienteComponent implements OnInit {

  titulo = "Añadir nuevo médico";
  pacienteForm: UntypedFormGroup;
  id: string;

  constructor(private fb: UntypedFormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private _pacienteService: PacienteService,
    private aRouter: ActivatedRoute) { 
    this.pacienteForm = this.fb.group({
      nombrep:[ '', Validators.required],
      apepatp:[ '', Validators.required],
      apematp:[ '', Validators.required],
      fechanacp:['', Validators.required],
      telp:['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.esEditar();
  }

  camposNoVacio(): any{
    if (this.pacienteForm.get('nombrep')?.value == "")
      return false;
    if (this.pacienteForm.get('apepatp')?.value == "")
      return false;
    if (this.pacienteForm.get('apematp')?.value == "")
      return false;
    if (this.pacienteForm.get('fechanacp')?.value == "")
      return false;
    if (this.pacienteForm.get('telp')?.value == "")
      return false;
    return true;
  }

  addPaciente(){
    
    const PACIENTE: Paciente = {
      nombrePaciente:this.pacienteForm.get('nombrep')?.value,
      apellidoPatPaciente:this.pacienteForm.get('apepatp')?.value,
      apellidoMatPaciente:this.pacienteForm.get('apematp')?.value,
      fechaNacimiento:this.pacienteForm.get('fechanacp')?.value,
      antecedentes:'A',
      telefono:this.pacienteForm.get('telp')?.value
    }
    
    if(this.camposNoVacio() == true){
      if(this.id !== null){
        //Editar
        this._pacienteService.editPaciente(this.id,PACIENTE).subscribe(data => {
          this.toastr.info('El paciente fue actualizado','Mensaje');
          this.router.navigate(['/paciente']);
        }, error => {
          console.log(error);
          this.pacienteForm.reset();
        })
      }else{
        //Agregar
        //console.log(MEDICO)
        this._pacienteService.savePaciente(PACIENTE).subscribe(data => {
          this.toastr.success('El paciente fue agregado.','Notificación');
          this.router.navigate(['/paciente'])
        }, error =>{
          console.log(error);
          this.pacienteForm.reset();
        })
      }
    }else{
      this.toastr.info('Faltan campos por completar.','Mensaje');
    }
  }

  esEditar(){
    if(this.id!==null){
      this.titulo = "Editar paciente";
      this._pacienteService.obtenerPaciente(this.id).subscribe(data => {
        this.pacienteForm.setValue({
          nombrep:data.nombrePaciente,
          apepatp:data.apellidoPatPaciente,
          apematp:data.apellidoMatPaciente,
          fechanacp:data.fechaNacimiento,
          telp:data.telefono,
        })
      })
    }
  }

}
