import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../services/DataSharingService.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // Define a variable to use for showing/hiding the Login button
  isUserLoggedIn: boolean;
  constructor( public router: Router, private dataSharingService: DataSharingService) {
    this.dataSharingService.isUserLoggedIn.subscribe( value => {
            this.isUserLoggedIn = value;

  });
   }

  ngOnInit(): void {

  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.dataSharingService.setUserLoggedInStatus(false);
  }

}
