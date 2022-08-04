import { Component, OnInit } from '@angular/core';
import { AgendaService } from 'src/app/services/agenda.service';
import { Agenda } from 'src/app/models/agenda';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-agenda',
  templateUrl: './list-agenda.component.html',
  styleUrls: ['./list-agenda.component.css']
})
export class ListAgendaComponent implements OnInit {

  listaAgenda: Agenda[]=[];

  constructor(private _agendaService: AgendaService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.obtenerAgenda();
  }

  obtenerAgenda(){
    this._agendaService.getAgenda().subscribe(data =>{
      console.log(data);
      this.listaAgenda = data;
    }, error =>{
      console.log(error);
    })
  }

  eliminarAgenda(id: any){
    this._agendaService.eraseAgenda(id).subscribe(data =>{
      this.toastr.error('La agenda fue eliminada.','Borrado');
      this.obtenerAgenda();
    }, error =>{
      console.log(error);
    }
    )
  }
}
