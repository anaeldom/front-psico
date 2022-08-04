import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../models/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  url = 'http://localhost:4000/api/paciente/';
  constructor(private http: HttpClient) { }

  getPaciente(): Observable<any>{
    return this.http.get(this.url);
  }

  erasePaciente(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  savePaciente(paciente: Paciente): Observable<any>{
    return this.http.post(this.url, paciente);
  }

  obtenerPaciente(id: String):  Observable<any>{
    return this.http.get(this.url + id);
  }

  editPaciente(id: string, paciente: Paciente): Observable<any>{
    return this.http.put(this.url+id,paciente);
  }
}
