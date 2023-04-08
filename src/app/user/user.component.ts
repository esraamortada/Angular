import { Component } from '@angular/core';
import { UserServicesService} from '../Services/user-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  constructor(private UserService:UserServicesService, private router:Router) {}

  Users:any = [];
  errorMessage:any;

  ngOnInit(): void {
    
    this.UserService.GetAllUsers().subscribe({
      next:data=>this.Users = data,
      error:error=>this.errorMessage = error
    });
  }
 

  

}
