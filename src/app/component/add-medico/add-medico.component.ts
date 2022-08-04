import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medico } from 'src/app/models/medico';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-add-medico',
  templateUrl: './add-medico.component.html',
  styleUrls: ['./add-medico.component.css']
})
export class AddMedicoComponent implements OnInit {

  titulo = "Añadir nuevo médico";
  medicoForm: UntypedFormGroup;
  id: string;

  constructor(private fb: UntypedFormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private _medicoService: MedicoService,
    private aRouter: ActivatedRoute) { 
    this.medicoForm = this.fb.group({
      nombrem:[ '', Validators.required],
      apepatm:[ '', Validators.required],
      apematm:[ '', Validators.required],
      especialidadm:[ '', Validators.required],
      telefonom:['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.esEditar();
  }

  camposNoVacio(): any{
    if (this.medicoForm.get('nombrem')?.value == "")
      return false;
    if (this.medicoForm.get('apepatm')?.value == "")
      return false;
    if (this.medicoForm.get('apematm')?.value == "")
      return false;
    if (this.medicoForm.get('especialidadm')?.value == "")
      return false;
    if(this.medicoForm.get('telefonom')?.value == "")
      return false;
    return true;
  }

  addMedico(){
    
    const MEDICO: Medico = {
      nombreMedico: this.medicoForm.get('nombrem')?.value,
      apellidoPatMedico: this.medicoForm.get('apepatm')?.value,
      apellidoMatMedico: this.medicoForm.get('apematm')?.value,
      especialidad: this.medicoForm.get('especialidadm')?.value,
      telefono: this.medicoForm.get('telefonom')?.value,      
    }
    if(this.camposNoVacio() == true){
      if(this.id !== null){
        //Editar
        this._medicoService.editMedico(this.id,MEDICO).subscribe(data => {
          this.toastr.info('El medico fue actualizado','Mensaje');
          this.router.navigate(['/medico']);
        }, error => {
          console.log(error);
          this.medicoForm.reset();
        })
      }else{
        //Agregar
        //console.log(MEDICO)
        this._medicoService.saveMedico(MEDICO).subscribe(data => {
          this.toastr.success('El medico fue agregado.','Notificación');
        this.router.navigate(['/medico'])
        }, error =>{
          console.log(error);
          this.medicoForm.reset();
        })
      }
    }else{
      this.toastr.info('Faltan campos por completar.','Mensaje');
    }
  }

  esEditar(){
    if(this.id!==null){
      this.titulo = "Editar producto";
      this._medicoService.obtenerMedico(this.id).subscribe(data => {
        this.medicoForm.setValue({
          nombrem: data.nombreMedico,
          apepatm: data.apellidoPatMedico,
          apematm: data.apellidoMatMedico,
          especialidadm: data.especialidad,
          telefonom: data.telefono,
        })
      })
    }
  }

}
