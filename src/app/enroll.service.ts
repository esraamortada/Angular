import { Injectable } from '@angular/core';
import { register } from './register';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  _url:string="http://localhost:4000/enroll";

  constructor(private http:HttpClient) { }
  enroll(user:register){

    return this.http.post(this._url,user);
  }

  login(email: any, password: any): any {
   
    const storedemail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    if (email === storedemail && password === storedPassword) {

      return `Welcome, ${email}!`;
    } else {
     
      return 'Invalid email or password';
    }
  }
}
