import { Component } from '@angular/core';
import { EnrollService } from '../enroll.service';
import { login } from '../login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private enrollService:EnrollService) {}
  email: any ;
  password: any;
  message: any ;
  userModel=new login("","");

 

  onSubmit() {
    this.message = this.enrollService.login(this.email, this.password);
  }


}
