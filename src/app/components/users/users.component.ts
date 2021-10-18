import { Component, OnInit } from '@angular/core';
import { usersDetail } from '../../usersDetail';
import { DetailService } from 'src/app/services/detail.service';
import {ImagesComponent } from '../images/images.component';

import { GetimageService } from 'src/app/services/getimage.service';
import { Routes } from '@angular/router';
import { FormGroup,FormBuilder, FormControl,NgForm } from '@angular/forms';
import { usersDetailsf } from 'src/app/usersDetailsf';





@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  selectedFile;
  image:FileList;
  username:string=""
  public url:string;
  public imgurl:string;
  usersDetailsf:usersDetailsf[]=[];

  constructor( public _detailService:DetailService,public imageService:GetimageService) {

   }
  ngOnInit(){

  }

  onSubmit(): void{
    
    if(!this.username){
      alert('Please add UserName')
      return
    }
    this.url=this.imageService.receiveImage();
    console.log(this.url)
    if(!this.url){
      alert('Please select image')
      return
    }

    const newDetail:usersDetailsf ={
      userName: this.username,
      imgByte:this.url
    }
    console.log(newDetail)
    this.username=""
    this.url=""
    this._detailService.saveUser(newDetail).subscribe((newDetail)=>(this.usersDetailsf.push(newDetail)))
    window.location.reload();
  }
  

}
