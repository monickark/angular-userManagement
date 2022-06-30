import { Component, ViewEncapsulation } from '@angular/core';
import { LoginService } from './login/login.service';
import { ChangepasswordService} from './change-password/changepassword.service'
import { ForgotpasswordService} from './forgot-password/forgotpassword.service'
import { UserMgmtService} from './user-mgmt/user-mgmt.service'
import { UsersignupService} from './user-signup/usersignup.service'
import { UsereditService} from './user-edit/useredit.service'
import { UserviewService} from './user-view/userview.service'
import { UserdeleteService} from './user-delete/userdelete.service'
import { DonationService} from './donation/donation.service'
import { UserdonationService} from './user-donation/userdonation.service'
import { ReceiptService} from './receipt/receipt.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService,UserMgmtService,ChangepasswordService,ForgotpasswordService,
  UsersignupService,UsereditService,UserviewService,UserdeleteService,DonationService,UserdonationService,ReceiptService],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = 'app';
}
