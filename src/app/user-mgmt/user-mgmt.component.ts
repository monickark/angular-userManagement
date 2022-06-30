import { Component, OnInit } from '@angular/core';
import {UserMgmtService} from './user-mgmt.service'
import { UserDetailsListVO} from './userdetailslist'

@Component({
  selector: 'app-user-mgmt',
  templateUrl: './user-mgmt.component.html',
  styleUrls: ['./user-mgmt.component.css']
})
export class UserMgmtComponent implements OnInit {

  constructor(private _userService: UserMgmtService) { 
    console.log("inside user management");
  }

  private userDetailsListVOs:UserDetailsListVO[] = [];
  private userDetailsListVO:UserDetailsListVO;
  private errorMessage:any = '';
  mode = 'Observable';
  ngOnInit() {
    this._userService.getUsers()
            .subscribe(
                userDetailsListVOs => this.userDetailsListVOs = userDetailsListVOs,
                error => this.errorMessage = <any>error);
                console.log("User:"+this.userDetailsListVOs);


  }
}
