import { Injectable } from '@angular/core';
import { ReceiptMasterVO} from './receiptmaster'
import { Http, Response, Headers, ResponseOptions, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReceiptService {

  appstate;
  headers: Headers;
  options: RequestOptions;
  constructor(private http:Http) {
      this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
      this.options = new RequestOptions({ headers: this.headers });
  }
  receipt(receipt:ReceiptMasterVO) : Observable<Object> {
    let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
    return this.http
        .get('http://localhost:8080/viewReceipt/')
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
