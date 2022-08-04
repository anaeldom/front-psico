import { Component, OnInit } from '@angular/core';
import { Form, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Paciente } from 'src/app/models/paciente';
import { PacienteService } from 'src/app/services/paciente.service';

@Component({
  selector: 'app-perfil-p',
  templateUrl: './perfil-p.component.html',
  styleUrls: ['./perfil-p.component.css']
})
export class PerfilPComponent implements OnInit {
  perfil: UntypedFormGroup;
  constructor(private _pacienteS:PacienteService,private fb: UntypedFormBuilder) {
    this.perfil = this.fb.group({nombrem:[''],apepatm:[''],apematm:[''],fechan:[''],tel:['']});
   }

  ngOnInit(): void {
    this.obtenerP();
  }

  getID():any{
    return localStorage.getItem('id');
  }

  obtenerP(){
    //console.log(localStorage.getItem('id'));
    const id: string = localStorage.getItem('id')!;
    this._pacienteS.obtenerPaciente(id)?.subscribe(data =>{    
      console.log(data);  
      this.perfil.setValue({
        nombrem: data.nombrePaciente,
        apepatm: data.apellidoPatPaciente,
        apematm: data.apellidoMatPaciente,
        fechan: data.fechaNacimiento,
        tel: data.telefono,
      });
      this.perfil.controls['nombrem'].disable();
      
      this.perfil.controls['apepatm'].disable();
      this.perfil.controls['apematm'].disable();
      this.perfil.controls['fechan'].disable();
      this.perfil.controls['tel'].disable();

    },error =>{console.log(error)})
  }  
}

