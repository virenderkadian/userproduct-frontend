import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { adminDetail } from 'src/app/adminDetail';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string
  adminName:string
  password:string
  password1:string
  adminDetail:adminDetail[]=[];
  isRegistered=false;
  constructor(public detailService:DetailService, private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.password1 !==this.password){
      return alert("Password Mismatch!")
    }
    if(!this.password1 || !this.email ||!this.adminName){
      return alert("Please Enter Details")
    }
    const newDetail:adminDetail ={
      adminName:this.adminName,
      email: this.email,
      password:this.password
    }

    console.log(newDetail)
    this.detailService.signup(newDetail).subscribe(
      (newDetail)=>{
        this.isRegistered = true;
        this.router.navigate(['/login'])
      })

  }

}
