import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Especialidad } from 'src/app/models/especialidad';
import { EspecialidadService } from 'src/app/services/especialidad.service';

@Component({
  selector: 'app-add-especialidad',
  templateUrl: './add-especialidad.component.html',
  styleUrls: ['./add-especialidad.component.css']
})
export class AddEspecialidadComponent implements OnInit {

  titulo = "Añadir nueva especialidad";
  especialidadForm: UntypedFormGroup;
  id: string;

  constructor(private fb: UntypedFormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private _especialidadService: EspecialidadService,
    private aRouter: ActivatedRoute) { 
    this.especialidadForm = this.fb.group({
      nombree:[ '', Validators.required],
      desce:[ '', Validators.required],
      vigente:[ '', Validators.required],
      cedulae:['',Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.esEditar();
  }

  camposNoVacio(): any{
    if (this.especialidadForm.get('nombree')?.value == "")
      return false;
    if (this.especialidadForm.get('desce')?.value == "")
      return false;
    if (this.especialidadForm.get('vigente')?.value == "")
      return false;
    if (this.especialidadForm.get('cedulae')?.value == "")
      return false;
    return true;
  }

  addEspecialidad(){
    
    const ESPECIALIDAD: Especialidad = {
      nombreEspecialidad:this.especialidadForm.get('nombree')?.value,
      descripcion:this.especialidadForm.get('desce')?.value,
      estadoVigente:this.especialidadForm.get('vigente')?.value,
      cedula:this.especialidadForm.get('cedulae')?.value,
    }
    
    if(this.camposNoVacio() == true){
      if(this.id !== null){
        //Editar
        this._especialidadService.editEspecialidad(this.id,ESPECIALIDAD).subscribe(data => {
          this.toastr.info('La especialidad fue actualizada','Mensaje');
          this.router.navigate(['/especialidad']);
        }, error => {
          console.log(error);
          this.especialidadForm.reset();
        })
      }else{
        //Agregar
        //console.log(MEDICO)
        this._especialidadService.saveEspecialidad(ESPECIALIDAD).subscribe(data => {
          this.toastr.success('La especialidad fue agregada','Notificación');
          this.router.navigate(['/especialidad'])
        }, error =>{
          console.log(error);
          this.especialidadForm.reset();
        })
      }
    }else{
      this.toastr.info('Faltan campos por completar.','Mensaje');
    }
  }

  esEditar(){
    if(this.id!==null){
      this.titulo = "Editar especialidad";
      this._especialidadService.obtenerEspecialidad(this.id).subscribe(data => {
        this.especialidadForm.setValue({
          nombree:data.nombreEspecialidad,
          desce:data.descripcion,
          vigente:data.vigente,
          cedulae:data.cedula,
        })
      })
    }
  }

}
