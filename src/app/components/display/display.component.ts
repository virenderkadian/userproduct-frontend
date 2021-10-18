import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detail.service';



@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  public details=[];
  public displayitem="";
  public productname="";
  public firstpic="";
  public firstproduct="";
  showimage:boolean =false;

  constructor( public _detailService:DetailService) { }

   ngOnInit(): void {
    this._detailService.getuserDetail().subscribe(data=>this.details=data);

  }

  ngDoCheck():void{
    console.log(this.details)
    this.firstpic=this.details[0].imgByte
    this.firstproduct=this.details[0].product
  }
  

  
  public displayImage(item:string,imgByte:string){
    this.displayitem=item
    this.productname=imgByte
    this.showimage=true
  }

  

}
