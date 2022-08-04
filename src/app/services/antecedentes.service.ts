import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Antecedentes } from '../models/antecedentes';

@Injectable({
  providedIn: 'root'
})

export class AntecedentesService {
  url = 'http://localhost:4000/api/antecedentes/';
  constructor(private http: HttpClient) { }

  getAntecedentes(): Observable<any>{
    return this.http.get(this.url);
  }

  eraseAntecedentes(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  saveAntecedentes(antecedentes: Antecedentes): Observable<any>{
    return this.http.post(this.url, antecedentes);
  }

  obtenerAntecedentes(id: string):  Observable<any>{
    return this.http.get(this.url + id);
  }

  editAntecedentes(id: string, antecedentes: Antecedentes): Observable<any>{
    return this.http.put(this.url+id,antecedentes);
  }
}
