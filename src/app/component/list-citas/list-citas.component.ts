import { Component, OnInit } from '@angular/core';
import { CitasService } from 'src/app/services/citas.service';
import { Citas } from 'src/app/models/citas';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent implements OnInit {

  
  listaCitas: Citas[]=[];

  constructor(private _citasService: CitasService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.obtenerCitas();
  }

  obtenerCitas(){
    this._citasService.getCitas().subscribe(data =>{
      console.log(data);
      this.listaCitas = data;
    }, error =>{
      console.log(error);
    })
  }

  eliminarCita(id: any){
    this._citasService.eraseCitas(id).subscribe(data =>{
      this.toastr.error('La cita fue eliminada.','Borrado');
      this.obtenerCitas();
    }, error =>{
      console.log(error);
    }
    )
  }

}
