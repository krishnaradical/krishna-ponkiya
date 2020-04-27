import { EHRCustomerGroupResponseVO } from "./ehrcustomer-group-response-vo";
import { EHRActionRoleView } from "./ehraction-role-view";
import { EHRUserRolesVO } from "./ehruser-roles-vo";
import { EHRUserFacilityVO } from "./ehruser-facility-vo";

export class EHRUserResponseVO { 

   userId:Number;
	 userName:string;
   emailId:string;
	lastLoginDate:Date;
	isAgreedDate:Date;
	isLogeedIn:Number;
  name:string;// user first name and last name
	//ehrCustomerGroupResponseVO:EHRCustomerGroupResponseVO;
	ehrUserFacilityVOs:Array<EHRUserFacilityVO>;//private List<EHRUserFacilityVO> 
	ehrUserRolesVOs:Array<EHRUserRolesVO>;//EHRCustomerGroupResponseVO
	ehrActionRoleViews:Array<EHRActionRoleView>;


}
