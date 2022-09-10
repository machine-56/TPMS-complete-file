import { HttpClient,HttpParams  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverURL } from '../server';

@Injectable({
  providedIn: 'root',
})
export class LoginService {

  constructor(private http: HttpClient) {}
 
  loginFn(loginData: any) {
    return this.http.post<any>(`${serverURL}/login`, loginData);
  }
  loggedIn(){
   
    return !!localStorage.getItem('token');
    
  }
  getToken(){
    return localStorage.getItem('token');
  }
  getRole(){
    return localStorage.getItem('role')
  }
 
}
