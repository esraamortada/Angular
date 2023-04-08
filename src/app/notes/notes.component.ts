import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../shared classes/IProduct';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  
  notesForm=this.fb.group({
      name:['', [Validators.required,Validators.minLength(5)]],
      // product: ['', Validators.required],
      discount: [false],
      discountValue: ['', Validators.required],
      comment: ['']
    })
  
    get name()
    {
      return this.notesForm.get('Name');
    }
    get discount(){
      return this.notesForm.get('discount');
    }
  

  Products:IProduct[]=[{ID:1,Name:"p1",Quantity:5,Price:15000,Img:"/assets/1.jpg"},
  {ID:2,Name:"p2",Quantity:5,Price:15000,Img:"/assets/1.jpg"},
  {ID:3,Name:"p3",Quantity:5,Price:15000,Img:"/assets/1.jpg"},
  {ID:4,Name:"p4",Quantity:5,Price:15000,Img:"/assets/1.jpg"}]




  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {}



  onSubmit() {
    console.log(this.notesForm.value);
  }



}
