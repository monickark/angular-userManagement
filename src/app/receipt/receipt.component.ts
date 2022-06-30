import { Component, OnInit } from '@angular/core';
import { ReceiptMasterVO} from './receiptmaster'
import { ReceiptService} from './receipt.service'

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  appstate;
  private errorMessage:any = '';
  private receipt=new ReceiptMasterVO();
  private receipts:ReceiptMasterVO[] = [];
  constructor(private _receiptService:ReceiptService) { }

  userDetailsVO;

  ngOnInit() {
  }
  newUser(){
  this.appstate="newUser";
    console.log("fields:"+this.userDetailsVO);
    
  
    this._receiptService.receipt(this.receipt)
	     .subscribe( receipt => {
			            this.receipts.push(this.receipt);
                  // form.reset();					   
			 },
      error => this.errorMessage = <any>error);
  }

}
