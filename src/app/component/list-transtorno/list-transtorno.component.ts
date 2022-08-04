import { Component, OnInit } from '@angular/core';
import { TranstornoService } from 'src/app/services/transtorno.service';
import { Transtorno } from 'src/app/models/transtorno';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-transtorno',
  templateUrl: './list-transtorno.component.html',
  styleUrls: ['./list-transtorno.component.css']
})
export class ListTranstornoComponent implements OnInit {

  listaTranstorno: any[]=[];

  constructor(private _transtornoService: TranstornoService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.obtenerTranstorno();
  }

  obtenerTranstorno(){
    this._transtornoService.getTranstorno().subscribe(data =>{
      console.log(data);
      this.listaTranstorno = data;
    }, error =>{
      console.log(error);
    })
  }

  eliminarTranstorno(id: any){
    this._transtornoService.eraseTranstorno(id).subscribe(data =>{
      this.toastr.error('El transtorno fue eliminado.','Borrado');
      this.obtenerTranstorno();
    }, error =>{
      console.log(error);
    }
    )
  }

}
