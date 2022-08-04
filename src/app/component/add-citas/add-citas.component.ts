import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Citas } from 'src/app/models/citas';
import { CitasService } from 'src/app/services/citas.service';

@Component({
  selector: 'app-add-citas',
  templateUrl: './add-citas.component.html',
  styleUrls: ['./add-citas.component.css']
})
export class AddCitasComponent implements OnInit {

  titulo = "Añadir nueva cita";
  citasForm: UntypedFormGroup;
  id: string;

  constructor(private fb: UntypedFormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private _citasService: CitasService,
    private aRouter: ActivatedRoute) { 
    this.citasForm = this.fb.group({
      fechac:[ '', Validators.required],
      horac:['', Validators.required],
      medicoc:[ '', Validators.required],
      pacientec:[ '', Validators.required],
      notasc:['',],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.esEditar();
  }

  camposNoVacio(): any{
    if (this.citasForm.get('fechac')?.value == "")
      return false;
    if (this.citasForm.get('horac')?.value == "")
      return false;
    if (this.citasForm.get('medicoc')?.value == "")
      return false;
    if (this.citasForm.get('pacientec')?.value == "")
      return false;
    return true;
  }

  addCitas(){
    
    const CITAS: Citas = {
      fechaCita:this.citasForm.get('fechac')?.value,
      horaCita:this.citasForm.get('horac')?.value,
      id_medico:this.citasForm.get('medicoc')?.value,
      id_paciente:this.citasForm.get('pacientec')?.value,
      notas:this.citasForm.get('notasc')?.value
    }
    
    if(this.camposNoVacio() == true){
      if(this.id !== null){
        //Editar
        this._citasService.editCitas(this.id,CITAS).subscribe(data => {
          this.toastr.info('La cita fue actualizada','Mensaje');
          this.router.navigate(['/citas']);
        }, error => {
          console.log(error);
          this.citasForm.reset();
        })
      }else{
        //Agregar
        //console.log(MEDICO)
        this._citasService.saveCitas(CITAS).subscribe(data => {
          this.toastr.success('La cita fue agregada.','Notificación');
          this.router.navigate(['/citas'])
        }, error =>{
          console.log(error);
          this.citasForm.reset();
        })
      }
    }else{
      this.toastr.info('Faltan campos por completar.','Mensaje');
    }
  }

  esEditar(){
    if(this.id!==null){
      this.titulo = "Editar citas";
      this._citasService.obtenerCitas(this.id).subscribe(data => {
        this.citasForm.setValue({          
          fechac:data.fechaCita,
          horac:data.horaCita,
          medicoc:data.id_medico,
          pacientec:data.id_paciente,
          notasc:data.notas,
        })
      })
    }
  }


}
