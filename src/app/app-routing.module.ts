import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUserComponent } from './all-user/all-user.component';
import { RoleComponent } from './role/role.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {
    path:'all-role',
    component: RoleComponent
  },
  {
    path:'all-user',
    component: AllUserComponent
  },
  {
    path:'login',
    component: UserLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
