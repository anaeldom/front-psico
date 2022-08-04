import { Component, OnInit } from '@angular/core';
import { MedicoService } from 'src/app/services/medico.service';
import { Medico } from 'src/app/models/medico';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-paciente',
  templateUrl: './view-paciente.component.html',
  styleUrls: ['./view-paciente.component.css']
})
export class ViewPacienteComponent implements OnInit {

  listaMedico: Medico[]=[];
  listaMedico2: any[]=[];
  var1: String[] = [];

  constructor(private _medicoService: MedicoService, private toastr:ToastrService) { }

  ngOnInit(): void {
    //this.obtenerMedicos();
    this.ejemplo();
  }

  ejemplo(){
    this._medicoService.obtenerAllMedicos().subscribe(data=>{
      console.log(data);
      this.listaMedico2=data;
    },error=>{console.log(error)});
  }

}
