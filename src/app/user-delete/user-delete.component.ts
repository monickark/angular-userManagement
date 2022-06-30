import { Component, OnInit } from '@angular/core';
import { UserdeleteService} from './userdelete.service'
import { UserDetailsVO} from '../user-signup/userdetails'


@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {

  appstate;
  private errorMessage:any = '';
  private delete=new UserDetailsVO();
  private deletes:UserDetailsVO[] = [];
  constructor(private _userdeleteService:UserdeleteService) { }

  ngOnInit() {
  }

  deleteUser(){
    this.appstate="deleteUser";
    console.log("fields:"+this.delete);  
    this._userdeleteService.delete(this.delete)
	     .subscribe( signup => {
			            this.deletes.push(this.delete);
                  // form.reset();					   
			 },
                         error => this.errorMessage = <any>error);
  }

}
