import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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
  constructor(private userService :UserService) { }

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
          if (res) {
            console.log('login successfully')
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
