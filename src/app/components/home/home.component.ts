import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  options:string[]=[];
  optionsProduct:string[]=[];
  optionsUser:string[]=[];
  filteredOptions:string[]=[];
  filteredOptionsProduct:string[]=[];
  filteredOptionsUser:string[]=[];
  public udetails=[];
  public pdetails=[];
  public searched=[];

  public userA=null;
  public prodA=null;
  flagU=undefined;
  flagP=undefined;
  formGroup:FormGroup;
  constructor(public detailService:DetailService,private fb:FormBuilder) { }

  ngOnInit(): void {
    this.detailService.getuserDetail().subscribe(data=>this.udetails=data);
    this.detailService.getproductDetail().subscribe(data=>this.pdetails=data);
    this.initForm();
    this.detailService.searchUser().subscribe(response=>{
      this.optionsUser=response
      this.filteredOptionsUser=response
      this.detailService.searchProduct().subscribe(response=>{
        this.optionsProduct=response
        this.filteredOptionsProduct=response
        this.options=this.optionsUser.concat(this.optionsProduct)
        this.filteredOptions=this.filteredOptionsUser.concat(this.filteredOptionsProduct)
       
      })
    })    
  }

  initForm(){
    this.formGroup=this.fb.group({
      'userName':['']
    })
    this.formGroup.get('userName').valueChanges.subscribe(response=>{
      this.filtered(response);
    })
  }
  private filtered(value){
    this.filteredOptions=this.options.filter(option=>{
      return option.toLowerCase().indexOf(value.toLowerCase())>-1
    })
  }
  search(e){
    console.log(e)

    this.searched=this.udetails.find(({ userName }) => userName === e)
    this.flagP=undefined;
    this.flagU=1;
    if (!this.searched){
      this.searched=this.pdetails.find(({ productName }) => productName === e)
      this.flagU=undefined;
      this.flagP=1;

    }
    console.log(this.searched);
    
  }
 
}
