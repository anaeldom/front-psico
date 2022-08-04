import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Agenda } from 'src/app/models/agenda';
import { AgendaService } from 'src/app/services/agenda.service';

@Component({
  selector: 'app-add-agenda',
  templateUrl: './add-agenda.component.html',
  styleUrls: ['./add-agenda.component.css']
})
export class AddAgendaComponent implements OnInit {

  
  titulo = "Añadir nueva agenda";
  agendaForm: UntypedFormGroup;
  id: string;

  constructor(private fb: UntypedFormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private _agendaService: AgendaService,
    private aRouter: ActivatedRoute) { 
    this.agendaForm = this.fb.group({
      citaa:[ '', Validators.required],      
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.esEditar();
  }

  camposNoVacio(): any{
    if (this.agendaForm.get('citaa')?.value == "")
      return false;
    return true;
  }

  addAgenda(){
    
    const AGENDA: Agenda = {
      id_cita:this.agendaForm.get('citaa')?.value,
    }
    
    if(this.camposNoVacio() == true){
      if(this.id !== null){
        //Editar
        this._agendaService.editAgenda(this.id,AGENDA).subscribe(data => {
          this.toastr.info('La agenda fue actualizada','Mensaje');
          this.router.navigate(['/agenda']);
        }, error => {
          console.log(error);
          this.agendaForm.reset();
        })
      }else{
        //Agregar
        //console.log(MEDICO)
        this._agendaService.saveAgenda(AGENDA).subscribe(data => {
          this.toastr.success('La agenda fue agregada.','Notificación');
          this.router.navigate(['/agenda'])
        }, error =>{
          console.log(error);
          this.agendaForm.reset();
        })
      }
    }else{
      this.toastr.info('Faltan campos por completar.','Mensaje');
    }
  }

  esEditar(){
    if(this.id!==null){
      this.titulo = "Editar agenda";
      this._agendaService.obtenerAgenda(this.id).subscribe(data => {
        this.agendaForm.setValue({
          citaa:data.id_cita,
        })
      })
    }
  }

}
