import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
public loginUser=null;
  constructor( public userService: UserService) { }

  ngOnInit(): void {
    this.getLoggedinUser()
  }
  getLoggedinUser(){
    if (localStorage.getItem('token')){
      this.userService.getLoggedinUser(localStorage.getItem('token')).subscribe({
      
        next: (res: any) => {
          console.log(res);
          if(res.data.length === 0){
            this.loginUser = [];
          }
          this.loginUser = res;
        },
        error: (error: any) => {
          console.log(error);
        },
      });
    }

  }
}
