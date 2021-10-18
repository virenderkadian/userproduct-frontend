import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetimageService {
  public imgurl:string;

  constructor() { }

  sendImage(imageURL:string){
    this.imgurl=imageURL;
  }

  receiveImage(){
    return this.imgurl;
  }
  sendEmpty(value){
    return value=""
  }

}
