import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { RoleDialogComponent } from '../dialog/role-dialog/role-dialog.component';
import { RoleServicesService } from '../services/role-services.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {
public allRoles:any = []


private subDataTwo: Subscription;
  constructor(
    public roleService: RoleServicesService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.getAllRole()
  }
  private getAllRole() {
    this.roleService.AllRole().subscribe({
      next: (res: any) => {
        console.log(res);
        this.allRoles = res;
      },
      error: (error: any) => {
        console.log(error);
      },
    });
  }

  public deleteUser(id: string) {
    this.roleService.deleteUserById(id).subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          location.reload();
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }


  public openEditControllerDialog(data?: any) {
    const dialogRef = this.dialog.open(RoleDialogComponent, {
      maxWidth: '600px',
      width: '95%',
      data: data,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((dialogResult) => {
      if (dialogResult && dialogResult.data) {
        if (data) {
          this.updateRoleById(data._id, dialogResult.data);
        } else {
          this.addRole(dialogResult.data);
        }
      }
    });
  }

  public updateRoleById(id: string, data: any) {
    this.roleService.updateUserById(id, data).subscribe({
      next: (res) => {
        console.log(res);
        if (res) {
          location.reload();
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  addRole(data: any) {
    this.subDataTwo = this.roleService.addRole(data)
      .subscribe({
        next: (res) => {
          if (res) {
            // this.reloadService.needRefreshData$();
            // this.uiService.success('Review added successfully.')
            console.log('role added successfully')
          } else {
            // this.uiService.wrong('Error! Please try again.')
            console.log('role added successfully')
          }
        },
        error: (err) => {
          console.log(err)
        }
      })
  }
}
