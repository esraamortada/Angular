import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.component.html',
  styleUrls: ['./reactive-login.component.scss']
})
export class ReactiveLoginComponent implements OnInit {

  LoginForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(5)]],
    password:[''],
    
    subscribe:[false],
    
  
  })

  get userName()
  {
    return this.LoginForm.get('userName');
  }





  constructor( private fb:FormBuilder){ }
  ngOnInit(): void {
  }


  submitData()
  {
    console.log(this.LoginForm.value)
  }


}
