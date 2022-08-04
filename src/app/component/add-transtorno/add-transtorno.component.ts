import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Transtorno } from 'src/app/models/transtorno';
import { TranstornoService } from 'src/app/services/transtorno.service';

@Component({
  selector: 'app-add-transtorno',
  templateUrl: './add-transtorno.component.html',
  styleUrls: ['./add-transtorno.component.css']
})
export class AddTranstornoComponent implements OnInit {

  titulo = "Añadir nuevo transtorno";
  transtornoForm: UntypedFormGroup;
  id: string;

  constructor(private fb: UntypedFormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private _transtornoService: TranstornoService,
    private aRouter: ActivatedRoute) { 
    this.transtornoForm = this.fb.group({
      nombret:[ '', Validators.required],
      desct:[ '', Validators.required],
      
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.esEditar();
  }

  camposNoVacio(): any{
    if (this.transtornoForm.get('nombret')?.value == "")
      return false;
    if (this.transtornoForm.get('desct')?.value == "")
      return false;
    return true;
  }

  addTranstorno(){
    
    const TRANSTORNO: Transtorno = {
      nombreTranstorno:this.transtornoForm.get('nombret')?.value,
      descripcion:this.transtornoForm.get('desct')?.value,
    }
    
    if(this.camposNoVacio() == true){
      if(this.id !== null){
        //Editar
        this._transtornoService.editTranstorno(this.id,TRANSTORNO).subscribe(data => {
          this.toastr.info('El transtorno fue actualizado','Mensaje');
          this.router.navigate(['/transtorno']);
        }, error => {
          console.log(error);
          this.transtornoForm.reset();
        })
      }else{
        //Agregar
        //console.log(MEDICO)
        this._transtornoService.saveTranstorno(TRANSTORNO).subscribe(data => {
          this.toastr.success('El transtorno fue agregado','Notificación');
          this.router.navigate(['/transtorno'])
        }, error =>{
          console.log(error);
          this.transtornoForm.reset();
        })
      }
    }else{
      this.toastr.info('Faltan campos por completar.','Mensaje');
    }
  }

  esEditar(){
    if(this.id!==null){
      this.titulo = "Editar transtorno";
      this._transtornoService.obtenerTranstorno(this.id).subscribe(data => {
        this.transtornoForm.setValue({
          nombret:data.nombreTranstorno,
          desct:data.descripcion,
        })
      })
    }
  }

}
