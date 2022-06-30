import { Injectable } from '@angular/core';
import { UserSignupVO} from './usersignup';
import { Http, Response, Headers, ResponseOptions, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class UsersignupService {

appstate;
newUser(){
  this.appstate="newUser";
}


  headers: Headers;
  options: RequestOptions;
  constructor(private http:Http) {
      this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
        this.options = new RequestOptions({ headers: this.headers });
    }
  signup(user_signup:UserSignupVO) : Observable<Object> {
      const params = new URLSearchParams();
      params.set('ulaId', user_signup.userDetailsVO.ulaId);
      params.set('firstName', user_signup.userDetailsVO.firstName);
      params.set('lastName', user_signup.userDetailsVO.lastName);
      params.set('emailId', user_signup.userDetailsVO.emailId);
      params.set('mobileNo', user_signup.userDetailsVO.mobileNo);
      params.set('gender', user_signup.userDetailsVO.gender);
      params.set('dateOfBirth', user_signup.userDetailsVO.dateOfBirth);
      params.set('address1', user_signup.userDetailsVO.address1);
      params.set('address2', user_signup.userDetailsVO.address2);
      params.set('city', user_signup.userDetailsVO.city);
      params.set('state', user_signup.userDetailsVO.state);
      params.set('country', user_signup.userDetailsVO.country);
      params.set('pincode', user_signup.userDetailsVO.pincode);
    return this.http
        .post('http://localhost:8080/signup/', params, this.options)
        .map(this.extractData)
        .catch(this.handleError);
  }
  

  private extractData(res:Response) {
  let body = res.json();
  return body || {};
}

private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
       console.error("if: ")
      const body = error.json() || '';
      console.error("error: "+body)
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      console.error("else: ")
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}

