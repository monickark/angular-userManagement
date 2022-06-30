import { Component, OnInit } from '@angular/core';
import { UserSignupVO} from './usersignup'
import { UsersignupService} from './usersignup.service'


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css']
})
export class UserSignupComponent implements OnInit {

appstate;
private errorMessage:any = '';
  private signup=new UserSignupVO();
  private signups:UserSignupVO[] = [];
  constructor(private _usersignupService:UsersignupService) { }

  userDetailsVO;

  ngOnInit() {
  }
  newUser(){
  this.appstate="newUser";
    console.log("fields:"+this.userDetailsVO);

    this._usersignupService.signup(this.signup)
	     .subscribe( signup => {
			            this.signups.push(this.signup);
			 },
      error => this.errorMessage = <any>error);
  }
}
