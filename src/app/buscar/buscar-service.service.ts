import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  urlBase = environment.API_URL_BUSCAR

  constructor(private http: HttpClient) {

  }

  getSearchTarjeta(keyword:string) {
    const options = {
      headers: {
        'content-type': 'application/json'
      }
    }
    return this.http.get<any>(this.urlBase +"/buscar/tarjeta" +"?language=es&query=" + keyword, options)
  }
}
