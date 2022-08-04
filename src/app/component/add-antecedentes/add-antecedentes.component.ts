import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Antecedentes } from 'src/app/models/antecedentes';
import { AntecedentesService } from 'src/app/services/antecedentes.service';

@Component({
  selector: 'app-add-antecedentes',
  templateUrl: './add-antecedentes.component.html',
  styleUrls: ['./add-antecedentes.component.css']
})
export class AddAntecedentesComponent implements OnInit {

  titulo = "Añadir nuevo antecedente";
  antecedentesForm: UntypedFormGroup;
  id: string;

  constructor(private fb: UntypedFormBuilder, 
    private router: Router, 
    private toastr: ToastrService,
    private _antecedentesService: AntecedentesService,
    private aRouter: ActivatedRoute) { 
    this.antecedentesForm = this.fb.group({
      medicamentos:[ '', Validators.required],
      medicoAnt:[ '', Validators.required],
      transtornoA:[ '', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.esEditar();
  }

  camposNoVacio(): any{
    if (this.antecedentesForm.get('medicamentos')?.value == "")
      return false;
    if (this.antecedentesForm.get('medicoAnt')?.value == "")
      return false;
    if (this.antecedentesForm.get('transtornoA')?.value == "")
      return false;
    return true;
  }

  addAntecedentes(){
    
    const ANTECEDENTES: Antecedentes = {
      medicamentos:this.antecedentesForm.get('medicamentos')?.value,
      ultimoMedico:this.antecedentesForm.get('medicoAnt')?.value,
      id_transtorno:this.antecedentesForm.get('transtornoA')?.value,
    }
    
    if(this.camposNoVacio() == true){
      if(this.id !== null){
        //Editar
        this._antecedentesService.editAntecedentes(this.id,ANTECEDENTES).subscribe(data => {
          this.toastr.info('El antecedente fue actualizado','Mensaje');
          this.router.navigate(['/antecedentes']);
        }, error => {
          console.log(error);
          this.antecedentesForm.reset();
        })
      }else{
        //Agregar
        //console.log(MEDICO)
        this._antecedentesService.saveAntecedentes(ANTECEDENTES).subscribe(data => {
          this.toastr.success('El antecedente fue agregado.','Notificación');
          this.router.navigate(['/antecedentes'])
        }, error =>{
          console.log(error);
          this.antecedentesForm.reset();
        })
      }
    }else{
      this.toastr.info('Faltan campos por completar.','Mensaje');
    }
  }

  esEditar(){
    if(this.id!==null){
      this.titulo = "Editar antecedente";
      this._antecedentesService.obtenerAntecedentes(this.id).subscribe(data => {
        this.antecedentesForm.setValue({
          medicamentos:data.medicamentos,
          medicoAnt:data.ultimoMedico,
          transtornoA:data.id_transtorno,
        })
      })
    }
  }

}
