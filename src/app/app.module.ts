import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ProductlistComponent } from './productlist/productlist.component';

import { RegisterComponent } from './register/register.component';

import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserComponent } from './user/user.component';
import { PostComponent } from './post/post.component';
import { ProductComponent } from './product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveRegisterComponent } from './reactive-register/reactive-register.component';
import { NotesComponent } from './notes/notes.component';
import { ReactiveLoginComponent } from './reactive-login/reactive-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,

    ParentComponent,
    ChildComponent,
    ProductlistComponent,
  
    RegisterComponent,

    LoginComponent,
    PagenotfoundComponent,
    UserComponent,
    PostComponent,
    ProductComponent,
    ReactiveRegisterComponent,
    NotesComponent,
    ReactiveLoginComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
