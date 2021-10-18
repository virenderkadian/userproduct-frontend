import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/app/services/detail.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public detailService:DetailService) { }

  ngOnInit(): void {
  }
  onLogOut(){
    this.detailService.logout();
  }

  loggedIn(){
    return this.detailService.isLoggedIn()
  }
}
