import { Component, OnInit } from '@angular/core';
import {ChangePasswordVO} from './changepassword'
import {ChangepasswordService} from './changepassword.service'
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  appstate;
  private errorMessage:any = '';
  private changepassword=new ChangePasswordVO();
  private changepasswords:ChangePasswordVO[] = [];
  constructor(private _changepasswordService:ChangepasswordService) { }

  userId;
  currentPassword;
  newPassword;
  retypeNewPassword;

  ngOnInit() {
  }

  changePassword(){
    this.appstate = "changePassword";
    console.log("changepasword:"+this.changepassword.currentPassword);
    console.log("fields:"+this.currentPassword+","+this.newPassword);
    var change_password= {
    currentPassword:this.currentPassword,
    newPassword:this.newPassword,
    userId:this.userId
    }
    // console.log("Form value"+JSON.stringify(form));
    this._changepasswordService.changePassword(this.changepassword)
	     .subscribe( changepassword => {
			            this.changepasswords.push(this.changepassword);
                  // form.reset();					   
			 },
                         error => this.errorMessage = <any>error);
  }

}
