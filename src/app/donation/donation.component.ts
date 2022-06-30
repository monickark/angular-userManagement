import { Component, OnInit } from '@angular/core';
import { DonationService} from './donation.service'
import { DonationMasterVO} from './donationmaster'

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {
  appstate;
  private errorMessage:any = '';
  private donation=new DonationMasterVO();
  private donations:DonationMasterVO[] = [];
  constructor(private _donationService:DonationService) { }

  userDetailsVO;

  ngOnInit() {
  }
  makeDonation(){
  this.appstate="makeDonation";
    console.log("fields:"+this.userDetailsVO);

    this._donationService.makedonation(this.donation)
	     .subscribe( donation => {
			            this.donations.push(this.donation);
                  // form.reset();					   
			 },
      error => this.errorMessage = <any>error);
  }

  viewRepDonation(){
    this.appstate="viewRepDonation";
  }
  viewRepAdmin(){
    this.appstate="viewRepAdmin";
  }
   receipt(){
    this.appstate="receipt";
  }
}
