import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'https://demo.credy.in/api/v1/usermodule/login/';

  constructor(private http: HttpClient) { }

  login(userCredentials: any){
    return this.http.post(this.apiUrl, userCredentials);
  }
  isLoggedIn(){
    return localStorage.getItem('token') != null;
  }

  getToken(){
    return localStorage.getItem('token') || '';
  }
}
