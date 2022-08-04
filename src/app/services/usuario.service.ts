import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://localhost:4000/api/usuario/';
  constructor(private http: HttpClient) { }

  getUsuario(): Observable<any>{
    return this.http.get(this.url);
  }

  eraseUsuario(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  saveUsuario(usuario: Usuario): Observable<any>{
    return this.http.post(this.url, usuario);
  }

  obtenerUsuario(id: string):  Observable<any>{
    return this.http.get(this.url + id);
  }

  editUsuario(id: string, usuario: Usuario): Observable<any>{
    return this.http.put(this.url+id, usuario);
  }
}
