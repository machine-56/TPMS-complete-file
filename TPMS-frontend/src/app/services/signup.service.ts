import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { serverURL } from '../server';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}
  signup(signupData: any) {
    return this.http
      .post(`${serverURL}/signup`, signupData)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
