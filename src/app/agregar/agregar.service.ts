import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tarjeta } from './tarjeta';

@Injectable({
  providedIn: 'root'
})
export class AgregarService {

  urlBase = environment.API_URL_AGREGAR
  constructor(private http:HttpClient) {

   }

  agregar(tarjeta:Tarjeta){
    const options = {
      headers: {
        'content-type': 'application/json'
      }
    }
    let json = JSON.stringify(tarjeta)
    return this.http.post<any>(this.urlBase,json,options)
  }
}
