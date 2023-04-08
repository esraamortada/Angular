import { Component ,OnInit} from '@angular/core';
import { EnrollService } from '../enroll.service';
import { register } from '../register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  implements OnInit{

  constructor( private enrollService:EnrollService){}

  
  topics=["Facebook","twitter","google"];
  
  userModel=new register("","","","","");

  ngOnInit(): void {
  }
  submitData(){

    this.enrollService.enroll(this.userModel).subscribe({
      next:data=>console.log(data),
      error:error=>console.log(error)
      

  });

 }
}
