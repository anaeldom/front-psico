import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Citas } from 'src/app/models/citas';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent implements OnInit {

  generarCitaForm: UntypedFormGroup;
  idMedico: string;

  constructor(private fb: UntypedFormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private _citasService: CitasService,
    private aRouter: ActivatedRoute) { 
    this.generarCitaForm = this.fb.group({
      fechac:[ '', Validators.required],
      horac:['', Validators.required],
      notasc:['',Validators.required],
    })
    this.idMedico = this.aRouter.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
  }

  camposNoVacio(): any{
    if (this.generarCitaForm.get('fechac')?.value == "")
      return false;
    if (this.generarCitaForm.get('horac')?.value == "")
      return false;
    if (this.generarCitaForm.get('notasc')?.value == "")
      return false;
    return true;
  }

  addCitas(){
    const idPaciente = localStorage.getItem('id') as string;
    console.log(idPaciente+' '+this.idMedico);
    
    const CITAS: Citas = {
      fechaCita:this.generarCitaForm.get('fechac')?.value,
      horaCita:this.generarCitaForm.get('horac')?.value,
      id_medico:this.idMedico,
      id_paciente:idPaciente,
      notas:this.generarCitaForm.get('notasc')?.value
    };

    if(this.camposNoVacio() == true){
      this._citasService.saveCitas(CITAS).subscribe(data => {
        this.toastr.success('La cita fue agregada.','Notificación');
        this.router.navigate(['/homeu'])
      }, error =>{
        console.log(error);
        this.generarCitaForm.reset();
      })
    }else{
      this.toastr.info('Faltan campos por completar.','Mensaje');
    }

  }
}
