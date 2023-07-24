import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  // Reactive Form
  loginForm: FormGroup;
  username = new FormControl('', [Validators.required]);
  password = new FormControl('', [Validators.required]);
  constructor(private userService :UserService, public router: Router) { }
  ngOnInit(): void {
        // Main reactive form..
        this.loginForm = new FormGroup({
          username: this.username,
          password: this.password
        });
    
  }


    /**
   * Login
   */
    onLogin() {
      if (this.loginForm.invalid) {
       console.log('Invalid Input field!');
        return;
      }
      // Form Data..
      const username = this.loginForm.value.username.trim().toLowerCase();
      const password = this.loginForm.value.password;
  
      const data = {username, password};
  
  
      this.userService.loginUser(data).subscribe({
        next: (res) => {
          if (res && res['status']=="ok" && res['data']['accessToken'] ) {
            console.log(res)
            console.log('login successfully')
             localStorage.setItem('token', res['data']['accessToken']);
               this.router.navigate(['/profile']);
          } else {
            console.log('Error! Please try again.')
          }
        },
        error: (err) => {
          console.log(err)
        }
      })
    }
  

}
