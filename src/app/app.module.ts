import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoleComponent } from './role/role.component';
import { RoleDialogComponent } from './dialog/role-dialog/role-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllUserComponent } from './all-user/all-user.component';
import { HeaderComponent } from './header/header.component';
import { UserDialogComponent } from './dialog/user-dialog/user-dialog.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ProfileComponent } from './profile/profile.component';
import { DataSharingService } from './services/DataSharingService.service';

@NgModule({
  declarations: [
    AppComponent,
    RoleComponent,
    RoleDialogComponent,
    AllUserComponent,
    HeaderComponent,
    UserDialogComponent,
    UserLoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [DataSharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
