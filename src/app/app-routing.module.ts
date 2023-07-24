import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUserComponent } from './all-user/all-user.component';
import { AuthGuard } from './guard/auth.guard';
import { ProfileComponent } from './profile/profile.component';
import { RoleComponent } from './role/role.component';
import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  {
    path:'all-role',
    component: RoleComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'all-user',
    component: AllUserComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'login',
    component: UserLoginComponent,
    // canActivate: [!AuthGuard],
  },
  {
    path:'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
