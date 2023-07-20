import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss']
})
export class AllUserComponent implements OnInit {
  public allUser:any = []
 public heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  constructor(public userService: UserService) { }

  ngOnInit(): void {
    this.getAllUser()
  }
  getAllUser(){
    this.userService.getAllUser().subscribe({
      next: (res: any) => {
        console.log(res);
        this.allUser = res;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

}
