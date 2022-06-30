import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Login } from './login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  appstate;
  private message: String;
  private loginData;
  private errorMessage: any = '';
  private userId;
  private passWord;
  constructor(private loginService: LoginService) {}

  ngOnInit() {
  }
  login() {
    
  }
  loginUser() {
    this.appstate = "login";
    console.log("inside login");
     console.log(this.userId, this.passWord)
    this.loginData = new Login (this.userId, this.passWord);
    this.loginService.loginUser(this.loginData)
      .subscribe(data => {
        console.log("Login success")
      },
      error => this.errorMessage = <any>error);

  }

}
