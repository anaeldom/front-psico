import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from 'src/app/models/paciente';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-paciente',
  templateUrl: './list-paciente.component.html',
  styleUrls: ['./list-paciente.component.css']
})
export class ListPacienteComponent implements OnInit {

  listaPaciente: Paciente[]=[];

  constructor(private _pacienteService: PacienteService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.obtenerPacientes();
  }

  obtenerPacientes(){
    this._pacienteService.getPaciente().subscribe(data =>{
      console.log(data);
      this.listaPaciente = data;
      

    }, error =>{
      console.log(error);
    })
  }

  eliminarPaciente(id: any){
    this._pacienteService.erasePaciente(id).subscribe(data =>{
      this.toastr.error('El medico fue eliminado.','Borrado');
      this.obtenerPacientes();
    }, error =>{
      console.log(error);
    }
    )
  }

}
