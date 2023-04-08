import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { ConfirmPasswordValidator } from '../Validations/password.validations';


@Component({
  selector: 'app-reactive-register',
  templateUrl: './reactive-register.component.html',
  styleUrls: ['./reactive-register.component.scss']
})




export class ReactiveRegisterComponent implements OnInit {



  registerationForm=this.fb.group({
    userName:['',[Validators.required,Validators.minLength(5)]],
    password:[''],
    confirmPassword:[''],
    email:[''],
    subscribe:[false],
    
  
  },{validator:[ConfirmPasswordValidator]})

  get userName()
  {
    return this.registerationForm.get('userName');
  }
  get email()
  {
    return this.registerationForm.get('email');
  }

  get aleternativecomments()
  {
    return this.registerationForm.get('aleternativecomments') as FormArray;
  }

  addAlternativeComment()
  {
    this.aleternativecomments.push(this.fb.control(''));
  }
  deletecomment(index:any)
  {
   this.aleternativecomments.removeAt(index);
  }


  constructor( private fb:FormBuilder){ }
  ngOnInit(): void {
  }


  setEmailValidation()
  {
    this.registerationForm.get('subscribe')?.valueChanges.subscribe(checkedValue=>{
      if(checkedValue)
      {
        //set validation
        this.email?.setValidators(Validators.required);
      }
      else
      {
       // clear validation
       this.email?.clearValidators();
      }
      //upadte dom
      this.email?.updateValueAndValidity();
    })
  }

  submitData()
  {
    console.log(this.registerationForm.value)
  }


}
