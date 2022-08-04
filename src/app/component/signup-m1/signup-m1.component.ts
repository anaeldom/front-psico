import { Component, OnInit } from '@angular/core';
import { Especialidad } from 'src/app/models/especialidad'; 
import { EspecialidadService } from 'src/app/services/especialidad.service';
import { ToastrService } from 'ngx-toastr';
import { Medico } from 'src/app/models/medico';
import { MedicoService } from 'src/app/services/medico.service';
import { Form, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup-m1',
  templateUrl: './signup-m1.component.html',
  styleUrls: ['./signup-m1.component.css']
})
export class SignupM1Component implements OnInit {

  listaEspecialidad: Especialidad[]=[];
  medicoForm: UntypedFormGroup;

  constructor(private _especialidadService: EspecialidadService, private toastr:ToastrService,private fb: UntypedFormBuilder, 
    private router: Router, 
    private _medicoService: MedicoService,
    private aRouter: ActivatedRoute) { 
      this.medicoForm = this.fb.group({
        nombrem:[ '', Validators.required],
        apepatm:[ '', Validators.required],
        apematm:[ '', Validators.required],
        especialidadm:[ '', Validators.required],
        telefonom:['', Validators.required]
      })
    }

  ngOnInit(): void {
    this.obtenerEspecialidad();
  }

  obtenerEspecialidad(){
    this._especialidadService.getEspecialidad().subscribe(data =>{
      console.log(data);
      this.listaEspecialidad = data;
    }, error =>{
      console.log(error);
    })
  }

  addMedico(){
    // console.log(this.medicoForm.get('especialidadm')?.value);
    const MEDICO: Medico = {
      nombreMedico: this.medicoForm.get('nombrem')?.value,
      apellidoPatMedico: this.medicoForm.get('apepatm')?.value,
      apellidoMatMedico: this.medicoForm.get('apematm')?.value,
      especialidad: this.medicoForm.get('especialidadm')?.value,
      telefono: this.medicoForm.get('telefonom')?.value,  
    };

    this._medicoService.saveMedico(MEDICO).subscribe(data => {
      this.toastr.success('El medico fue agregado.','Notificación');
      this.router.navigate(['/regm2']) //Ponemos la ruta que me dirigira a signup2
    }, error =>{
      console.log(error);
      this.medicoForm.reset();
    });

  }
}
