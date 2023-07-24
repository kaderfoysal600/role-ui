import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
loggedin = false;
  constructor( public router: Router) {
    if(localStorage.getItem('token')){
      this.loggedin = true
    }
   }

  ngOnInit(): void {
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.loggedin = false
  }

}
