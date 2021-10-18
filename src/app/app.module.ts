import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersComponent } from './components/users/users.component';
import { ProductComponent } from "./components/product/product.component";
import { ImagesComponent } from './components/images/images.component';
import { DisplayProductComponent } from './components/display-product/display-product.component';
import { HomeComponent } from './components/home/home.component';

import { DisplayComponent } from './components/display/display.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from "@angular/material/icon";
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthInterceptorService } from './auth-interceptor.service';





@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    DisplayComponent,
    NavbarComponent,
    UsersComponent,
    ImagesComponent,
    DisplayProductComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,MatAutocompleteModule,ReactiveFormsModule
  ],
  schemas:[],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
