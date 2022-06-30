import {Routes} from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonationComponent } from './donation/donation.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { UserDonationComponent } from './user-donation/user-donation.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserMgmtComponent } from './user-mgmt/user-mgmt.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


export const AppRoutes
 = [
     {
        path: "",
        redirectTo: 'about',
        pathMatch: 'full'
    },
    /*{
        path: '**',
        redirectTo: 'about',
        pathMatch: 'full'
    },*/
    {
        path:"about",
        component : HomeComponent
    },
    {
        path:"dashboard",
        component : DashboardComponent
    },
    {
        path:"donation",
        component : DonationComponent
    },
    {
        path:"receipt",
        component : ReceiptComponent
    },
    {
        path:"reports",
        component : UserDonationComponent
    },
    {
        path:"signup",
        component : UserSignupComponent
    },
    {
        path:"delete-profile",
        component : UserDeleteComponent
    },
    {
        path:"view-profile",
        component : UserViewComponent
    },
    {
        path:"edit-profile",
        component : UserEditComponent
    },
    {
        path:"user-list",
        component : UserMgmtComponent
    },
    {
        path:"change-password",
        component : ChangePasswordComponent
    },
    {
        path:"forgot-password",
        component : ForgotPasswordComponent
    },
    {
        path:"login",
        component : LoginComponent
    },
    {
        path:"logout",
        component : LogoutComponent
    }
    
];