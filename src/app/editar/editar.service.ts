import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tarjeta } from '../agregar/tarjeta';

@Injectable({
  providedIn: 'root'
})
export class EditarService {

  urlBase = environment.API_URL_EDITAR
  constructor(private http:HttpClient) {

   }

  agregar(tarjeta:Tarjeta){
    const options = {
      headers: {
        'content-type': 'application/json'
      }
    }
    let json = JSON.stringify(tarjeta)
    return this.http.put<any>(this.urlBase,json,options)
  }
}
