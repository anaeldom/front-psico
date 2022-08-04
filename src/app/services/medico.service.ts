import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medico } from '../models/medico';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  url = 'http://localhost:4000/api/medico/';
  constructor(private http: HttpClient) { }

  getMedico(): Observable<any>{
    return this.http.get(this.url);
  }

  eraseMedico(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  saveMedico(medico: Medico): Observable<any>{
    return this.http.post(this.url, medico);
  }

  obtenerMedico(id: string):  Observable<any>{
    return this.http.get(this.url + id);
  }

  obtenerAllMedicos():Observable<any>{
    return this.http.post(this.url+"/getMedicoCompleto","");
  }

  obtenerOneMedico(id:string):Observable<any>{
    return this.http.get(this.url+"getOneMedico/"+id);
  }

  editMedico(id: string, medico: Medico): Observable<any>{
    return this.http.put(this.url+id,medico);
  }
}
