import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DonationComponent } from './donation/donation.component';
import {LoginComponent} from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { AppRoutes} from './app.routes';
import { RouterModule} from '@angular/router';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HomeComponent } from './home/home.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserMgmtComponent } from './user-mgmt/user-mgmt.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserViewComponent } from './user-view/user-view.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { LogoutComponent } from './logout/logout.component';
import { UserDonationComponent } from './user-donation/user-donation.component';
import { SessionTimeoutComponent } from './session-timeout/session-timeout.component';

@NgModule({
  declarations: [
    AppComponent,
    DonationComponent,LoginComponent, NavBarComponent, TopBarComponent, HomeComponent, BottomBarComponent, 
    UserSignupComponent, UserMgmtComponent, DashboardComponent, UserDeleteComponent, ForgotPasswordComponent, 
    ChangePasswordComponent, UserEditComponent, UserViewComponent, ReceiptComponent, LogoutComponent, UserDonationComponent, SessionTimeoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
