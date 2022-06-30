import { Component, OnInit } from '@angular/core';
import { UsereditService} from './useredit.service'
import { UserDetailsVO} from '../user-signup/userdetails'

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  appstate;
  private errorMessage:any = '';
  private edit=new UserDetailsVO();
  private edits:UserDetailsVO[] = [];
  constructor(private _usereditService:UsereditService) { }

  userDetailsVO;

  ngOnInit() {
  }
  editUser(){
  this.appstate="editUser";
    console.log("fields:"+this.userDetailsVO);
    
  
    this._usereditService.edit(this.edit)
	     .subscribe( signup => {
			            this.edits.push(this.edit);
                  // form.reset();					   
			 },
      error => this.errorMessage = <any>error);
  }

}
