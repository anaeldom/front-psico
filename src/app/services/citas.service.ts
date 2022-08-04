import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Citas } from '../models/citas';

@Injectable({
  providedIn: 'root'
})
export class CitasService {

  url = 'http://localhost:4000/api/citas/';
  constructor(private http: HttpClient) { }

  getCitas(): Observable<any>{
    return this.http.get(this.url);
  }

  eraseCitas(id: String): Observable<any>{
    return this.http.delete(this.url + id);
  }

  saveCitas(citas: Citas): Observable<any>{
    return this.http.post(this.url, citas);
  }

  obtenerCitas(id: String):  Observable<any>{
    return this.http.get(this.url + id);
  }

  obtenerCitasM(id: String): Observable<any>{
    return this.http.get(this.url+"bcm/"+id);
  }

  obtenerCitasMM(id: String): Observable<any>{
    return this.http.get(this.url+"bcmm/"+id);
  }

  editCitas(id: string, citas: Citas): Observable<any>{
    return this.http.put(this.url+id,citas);
  }
}
