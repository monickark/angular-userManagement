import { Component, OnInit } from '@angular/core';
import { UserDonationsMasterVO} from './userdonationmaster'
import { UserdonationService} from './userdonation.service'

@Component({
  selector: 'app-user-donation',
  templateUrl: './user-donation.component.html',
  styleUrls: ['./user-donation.component.css']
})
export class UserDonationComponent implements OnInit {

  appstate;
  private errorMessage:any = '';
  private userdonation=new UserDonationsMasterVO();
  private userdonations:UserDonationsMasterVO[] = [];
  constructor(private _userdonationService:UserdonationService) { }

  userDetailsVO;

  ngOnInit() {
  }
  viewdonations(){
  this.appstate="viewRepAdmin";
    console.log("fields:"+this.userDetailsVO);
     
    this._userdonationService.viewdonations(this.userdonation)
	     .subscribe( userdonation => {
			            this.userdonations.push(this.userdonation);
			 },
      error => this.errorMessage = <any>error);
  }

}
