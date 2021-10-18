import { Component, OnInit } from '@angular/core';
import { productsDetail } from '../../productsDetail';
import { DetailService } from 'src/app/services/detail.service';
import { GetimageService } from 'src/app/services/getimage.service';
import { productsDetails } from 'src/app/productsDetails';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productname:string=""
  public url:string;
  public imgurl:string;
  productsDetails:productsDetails[]=[];

  constructor(public _detailService:DetailService,public imageService:GetimageService) { }
  ngOnInit(){

  }

  onSubmit(){
    if(!this.productname){
      alert('Please add Product Name')
      return
    }
    this.url=this.imageService.receiveImage();
    if(!this.url){
      alert('Please select image')
    }

    const newDetail:productsDetails ={
      productName: this.productname,
      imgByte:this.url
    }
    console.log(newDetail)
    this.productname=""
    this.url=""
    this._detailService.saveProduct(newDetail).subscribe((newDetail)=>(this.productsDetails.push(newDetail)))
    window.location.reload();
  }


}
