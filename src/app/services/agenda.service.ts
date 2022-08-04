import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Agenda } from '../models/agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  url = 'http://localhost:4000/api/agenda/';
  constructor(private http: HttpClient) { }

  getAgenda(): Observable<any>{
    return this.http.get(this.url);
  }

  eraseAgenda(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  saveAgenda(agenda: Agenda): Observable<any>{
    return this.http.post(this.url, agenda);
  }

  obtenerAgenda(id: string):  Observable<any>{
    return this.http.get(this.url + id);
  }

  editAgenda(id: string, agenda: Agenda): Observable<any>{
    return this.http.put(this.url+id,agenda);
  }
}
