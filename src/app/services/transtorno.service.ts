import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Transtorno } from '../models/transtorno';

@Injectable({
  providedIn: 'root'
})
export class TranstornoService {

  url = 'http://localhost:4000/api/transtorno/';
  constructor(private http: HttpClient) { }

  getTranstorno(): Observable<any>{
    return this.http.get(this.url);
  }

  eraseTranstorno(id: string): Observable<any>{
    return this.http.delete(this.url + id);
  }

  saveTranstorno(transtorno: Transtorno): Observable<any>{
    return this.http.post(this.url, transtorno);
  }

  obtenerTranstorno(id: string):  Observable<any>{
    return this.http.get(this.url + id);
  }

  editTranstorno(id: string, transtorno: Transtorno): Observable<any>{
    return this.http.put(this.url+id,transtorno);
  }
}
