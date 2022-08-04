import { Component, OnInit } from '@angular/core';
import { LoginSignupService } from 'src/app/services/login-signup.service';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from 'src/app/models/paciente';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {

  //public var1: string = '';

  constructor(public authS:LoginSignupService,public pacienteServ: PacienteService) {  }
  
  ngOnInit(): void { }

  getRole():any{
         return localStorage.getItem('rol');
  }

  /*datosP():boolean{
    const idPaciente = localStorage.getItem('id') as string;
    this.pacienteServ.obtenerPaciente(idPaciente).subscribe( data =>{
      //this.var = data;
      this.var1 = data.nombrePaciente+' '+data.apellidoPatPaciente+' '+data.apellidoMatPaciente; ERROR
    },error=>{
      //console.log(error);
      return false;
    });
    return true; 
  }*/
  
}
