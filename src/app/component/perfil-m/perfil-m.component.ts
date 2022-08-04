import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Medico } from 'src/app/models/medico';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-perfil-m',
  templateUrl: './perfil-m.component.html',
  styleUrls: ['./perfil-m.component.css']
})
export class PerfilMComponent implements OnInit {
  medicoLs:any[]=[];
  perfil: UntypedFormGroup;
  constructor(private _medicoS:MedicoService,private fb: UntypedFormBuilder) {
    this.perfil = this.fb.group({nombrem:[''],apepatm:[''],apematm:[''],espem:[''],telefonom:['']});
   }

  ngOnInit(): void {
    this.obtenerP();
  }

  obtenerP(){
    //console.log(localStorage.getItem('id'));
    const id: string = localStorage.getItem('id')!;
    this._medicoS.obtenerOneMedico(id)?.subscribe(data =>{    
      this.medicoLs = data;
      this.perfil.controls['nombrem']
      this.perfil.controls['apepatm'].disable();
      this.perfil.controls['apematm'].disable();
      this.perfil.controls['espem'].disable();
      this.perfil.controls['telefonom'].disable();
    },
    error =>{console.log(error)})
  }
}
