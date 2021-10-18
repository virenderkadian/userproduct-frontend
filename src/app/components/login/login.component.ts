import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adminDetail } from 'src/app/adminDetail';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email:string
    password:string
    isLoggedin = false;
    msg:string

  constructor(public detailService:DetailService, private router:Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.password || !this.email){
      return alert("Please Enter Credentials")
    }
    console.log(this.email)
    this.detailService.login(this.email,this.password).subscribe(
      (newDetail)=>{
        this.isLoggedin = true;
        this.router.navigate(['/home'])
      },
      error=>{
        this.msg="Email or Password Mismatch"
      }
    )
    }

    display(email){
      return this.email;
    }

}
