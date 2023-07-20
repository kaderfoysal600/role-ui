import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUserComponent } from './all-user/all-user.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [
  {
    path:'',
    component: RoleComponent
  },
  {
    path:'all-user',
    component: AllUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
