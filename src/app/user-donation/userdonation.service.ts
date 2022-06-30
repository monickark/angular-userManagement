import { Injectable } from '@angular/core';
import { UserDonationsMasterVO} from './userdonationmaster';
import { Http, Response, Headers, ResponseOptions, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';

@Injectable()
export class UserdonationService {

  appstate;
  headers: Headers;
  options: RequestOptions;
  constructor(private http:Http) {
      this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
      this.options = new RequestOptions({ headers: this.headers });
  }
  viewdonations(userdonation:UserDonationsMasterVO) : Observable<Object> {
      const params = new URLSearchParams();
      params.set('startDate', userdonation.userDonationsSearchVO.fromDate);
      params.set('endDate', userdonation.userDonationsSearchVO.toDate);
      params.set('dateRange', userdonation.userDonationsSearchVO.dateRange);
      params.set('userDetail', userdonation.userDonationsSearchVO.userDetail);
    return this.http
        .get('http://localhost:8080/viewReport/',{search: params})
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
