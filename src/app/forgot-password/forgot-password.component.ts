import { Component, OnInit } from '@angular/core';
import { ForgotpasswordService} from './forgotpassword.service'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  appstate;
  private errorMessage:any = '';
  constructor(private _forgotpasswordService:ForgotpasswordService) { }

  emailId;
  forgotpassword;

  ngOnInit() {
  }

  forgotPassword(){
    this.appstate = "forgotPassword";
    console.log("fields:"+this.emailId);
    var forgot_password= {
    emailId:this.emailId
    }
    this._forgotpasswordService.forgotPassword(this.emailId)
	     .subscribe( forgotpassword => 
			            this.forgotpassword=forgotpassword,
                         error => this.errorMessage = <any>error);
  }

}
