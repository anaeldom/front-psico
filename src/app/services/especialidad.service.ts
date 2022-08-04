import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Especialidad } from '../models/especialidad';

@Injectable({
  providedIn: 'root'
})
export class EspecialidadService {

  url = 'http://localhost:4000/api/especialidad/';
  constructor(private http: HttpClient) { }

  getEspecialidad(): Observable<any>{
    return this.http.get(this.url);
  }

  eraseEspecialidad(id: String): Observable<any>{
    return this.http.delete(this.url + id);
  }

  saveEspecialidad(especialidad: Especialidad): Observable<any>{
    return this.http.post(this.url, especialidad);
  }

  obtenerEspecialidad(id: String):  Observable<any>{
    return this.http.get(this.url + id);
  }

  editEspecialidad(id: string, especialidad: Especialidad): Observable<any>{
    return this.http.put(this.url+id,especialidad);
  }
}
