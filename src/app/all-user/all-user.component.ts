import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { UserDialogComponent } from '../dialog/user-dialog/user-dialog.component';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-all-user',
  templateUrl: './all-user.component.html',
  styleUrls: ['./all-user.component.scss']
})
export class AllUserComponent implements OnInit {
  public allUser:any = []
 public heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
 private subDataTwo: Subscription;
  constructor(public userService: UserService,    private dialog: MatDialog ) { }

  ngOnInit(): void {
    this.getAllUser()
  }
  getAllUser(){
    this.userService.getAllUser().subscribe({
      next: (res: any) => {
        console.log(res);
        if(res.data.length ===0){
          this.allUser = [];
        }
        this.allUser = res;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }
  public openUserControllerDialog(data?: any) {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      maxWidth: '600px',
      width: '95%',
      data: data,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((dialogResult) => {
      if (dialogResult && dialogResult.data) {
        if (data) {
          this.updateUserRoleById(data._id, dialogResult.data);
          console.log( dialogResult.data)
          console.log( dialogResult)
        } else {
          this.addUser(dialogResult.data);
        }
      }
    });
  }


  addUser(data: any) {
    this.subDataTwo = this.userService.addUser(data)
      .subscribe({
        next: (res) => {
          if (res) {
            // this.reloadService.needRefreshData$();
            // this.uiService.success('Review added successfully.')
            console.log('User added successfully')
            this.getAllUser()
          } else {
            // this.uiService.wrong('Error! Please try again.')
            console.log('Error! Please try again.')
          }
        },
        error: (err) => {
          console.log(err)
        }
      })
  }

  public deleteUser(id: string) {
    this.userService.deleteUserById(id).subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
         this.getAllUser()
        }
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  public updateUserRoleById(id: string, data: any) {
    this.userService.updateUserById(id, data).subscribe({
      next: (res) => {
        console.log('update data from update function', data);
        
        console.log(res);
        if (res) {
          this.getAllUser()
        }
      },
      error: (err) => {
        console.log('update data from update error function', data);
        console.log(err);
      },
    });
  }


  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }

}
