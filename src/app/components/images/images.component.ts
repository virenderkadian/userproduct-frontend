import { Component, OnInit } from '@angular/core';
import { GetimageService } from 'src/app/services/getimage.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  selectedFile:string=""
  public url:string=""

  constructor( private imageService:GetimageService) { }
  public imgURL:string;
  ngOnInit(){}

  selectFile(event){
    var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (event) => {      
			this.url = event.target.result as string; 
      console.log(this.url)
      this.imageService.sendImage(this.url)
      

		} 
    this.imageService.sendEmpty(this.selectFile)
    
  }

}
