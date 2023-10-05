import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Tarjeta } from '../agregar/tarjeta';

@Injectable({
  providedIn: 'root'
})
export class ListarService {

  urlBase = environment.API_URL_LISTAR
  constructor(private http:HttpClient) {

   }

  listar(){
    const options = {
      headers: {
        'content-type': 'application/json'
      }
    }
    return this.http.get<any>(this.urlBase, options)
  }
}
