import { Component, OnInit } from '@angular/core';
import { MedicoService } from 'src/app/services/medico.service';
import { Medico } from 'src/app/models/medico';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-list-medico',
  templateUrl: './list-medico.component.html',
  styleUrls: ['./list-medico.component.css']
})
export class ListMedicoComponent implements OnInit {

  listaMedico: Medico[]=[];

  constructor(private _medicoService: MedicoService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.obtenerMedicos();
  }

  obtenerMedicos(){
    this._medicoService.getMedico().subscribe(data =>{
      console.log(data);
      this.listaMedico = data;
    }, error =>{
      console.log(error);
    })
  }

  eliminarMedico(id: any){
    this._medicoService.eraseMedico(id).subscribe(data =>{
      this.toastr.error('El medico fue eliminado.','Borrado');
      this.obtenerMedicos();
    }, error =>{
      console.log(error);
    }
    )
  }
}
