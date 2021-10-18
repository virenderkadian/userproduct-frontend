import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detail.service';


@Component({
  selector: 'app-display-product',
  templateUrl: './display-product.component.html',
  styleUrls: ['./display-product.component.css']
})
export class DisplayProductComponent implements OnInit {

  public details=[];
  public displayitem="";
  public productname="";
  public firstpic="";
  public firstproduct="";
  showimage:boolean =false;

  constructor( public _detailService:DetailService) { }

   ngOnInit(): void {
    this._detailService.getproductDetail().subscribe(data=>this.details=data);

  }

  ngDoCheck():void{
    console.log(this.details)
    this.firstpic=this.details[0].imgByte
    this.firstproduct=this.details[0].product
  }
  

  
  public displayImage(item:string,product:string){
    this.displayitem=item
    this.productname=product
    this.showimage=true
  }


}
