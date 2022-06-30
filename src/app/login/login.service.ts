import { Injectable } from '@angular/core';
import { Http, Response, Headers, ResponseOptions, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';
import { Login } from './login';
// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class LoginService  {
  headers: Headers;
    options: RequestOptions;
    
    constructor(private http: Http) {
        this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
        this.options = new RequestOptions({ headers: this.headers });
    }


   loginUser(login:Login) : Observable<Object> {
     
    console.log(login.userId);
    console.log(login.passWord);
     const params = new URLSearchParams();
      params.set('userId', login.userId);
      params.set('passWord', login.passWord);
      return this.http
        .get('http://localhost:8080/login',{search: params})
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