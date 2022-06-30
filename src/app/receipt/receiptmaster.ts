import { CharityDetailsVO} from '../donation/charitydetails'
import { UserDetailsVO} from '../user-signup/userdetails'
import { DonationMasterVO} from '../donation/donationmaster'

export class ReceiptMasterVO{
    charityDetailsVO :CharityDetailsVO;
    userDonationsListVO :UserDetailsVO;
    donationMasterVO :DonationMasterVO;
}