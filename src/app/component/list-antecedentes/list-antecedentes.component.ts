import { Component, OnInit } from '@angular/core';
import { AntecedentesService } from 'src/app/services/antecedentes.service';
import { Antecedentes } from 'src/app/models/antecedentes';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-antecedentes',
  templateUrl: './list-antecedentes.component.html',
  styleUrls: ['./list-antecedentes.component.css']
})
export class ListAntecedentesComponent implements OnInit {

  
  listaAntecedentes: Antecedentes[]=[];

  constructor(private _antecedentesService: AntecedentesService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.obtenerAntecedentes();
  }

  obtenerAntecedentes(){
    this._antecedentesService.getAntecedentes().subscribe(data =>{
      console.log(data);
      this.listaAntecedentes = data;
    }, error =>{
      console.log(error);
    })
  }

  eliminarAntecedente(id: any){
    this._antecedentesService.eraseAntecedentes(id).subscribe(data =>{
      this.toastr.error('El medico fue eliminado.','Borrado');
      this.obtenerAntecedentes();
    }, error =>{
      console.log(error);
    }
    )
  }

}
