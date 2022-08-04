import { Component, OnInit } from '@angular/core';
import { EspecialidadService } from 'src/app/services/especialidad.service';
import { Especialidad } from 'src/app/models/especialidad';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-especialidad',
  templateUrl: './list-especialidad.component.html',
  styleUrls: ['./list-especialidad.component.css']
})
export class ListEspecialidadComponent implements OnInit {

  listaEspecialidad: Especialidad[]=[];

  constructor(private _especialidadService: EspecialidadService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.obtenerEspecialidad();
  }

  obtenerEspecialidad(){
    this._especialidadService.getEspecialidad().subscribe(data =>{
      console.log(data);
      this.listaEspecialidad = data;
    }, error =>{
      console.log(error);
    })
  }

  eliminarEspecialidad(id: any){
    this._especialidadService.eraseEspecialidad(id).subscribe(data =>{
      this.toastr.error('La especialidad fue eliminada.','Borrado');
      this.obtenerEspecialidad();
    }, error =>{
      console.log(error);
    }
    )
  }
}
