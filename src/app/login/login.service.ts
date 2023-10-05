import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  urlBase = environment.API_URL_LOGIN
  
  constructor(private http: HttpClient) {
    
  }

  login(login:Login) {
    const options = {
      headers: {
        'content-type': 'application/json',
        Authorization: 'Bearer'
      }
    }
    let json = JSON.stringify(login)
    return this.http.post<any>(this.urlBase,json,options)
  }
}
