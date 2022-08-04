import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  listaUsuario: Usuario[]=[];

  constructor(private _usuarioService: UsuarioService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(){
    this._usuarioService.getUsuario().subscribe(data =>{
      console.log(data);
      this.listaUsuario = data;
    }, error =>{
      console.log(error);
    })
  }

  eliminarUsuario(id: any){
    this._usuarioService.eraseUsuario(id).subscribe(data =>{
      this.toastr.error('El medico fue eliminado.','Borrado');
      this.obtenerUsuarios();
    }, error =>{
      console.log(error);
    }
    )
  }

}
