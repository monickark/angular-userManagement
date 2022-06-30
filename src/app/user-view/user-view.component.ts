import { Component, OnInit } from '@angular/core';
import { UserviewService} from './userview.service'
import { UserDetailsVO} from '../user-signup/userdetails'

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  appstate;
  private errorMessage:any = '';
  private view=new UserDetailsVO();
  private views:UserDetailsVO[] = [];
  constructor(private _userviewService:UserviewService) { }

  userDetailsVO;

  ngOnInit() {
  }
  viewUser(){
  this.appstate="viewUser";
    console.log("fields:"+this.userDetailsVO);
    
  
    this._userviewService.view(this.view)
	     .subscribe( view => {
			            this.views.push(this.view);
                  // form.reset();					   
			 },
      error => this.errorMessage = <any>error);
  }

}
