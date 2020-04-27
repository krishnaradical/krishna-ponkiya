import { EHRFacilityResponse } from "./ehrfacility-response";
import { CustomerGroupSettingsResponse } from "./customer-group-settings-response";
import { EHRAddressResponse } from "./ehraddress-response";

export class EhrCustomerGroupResponse {

    id:Number;

	name:string;

	workPhone:string;

	mobilePhone:string;

	fax:string;

	primaryEmail:string;

	alternativeEmail:string;
	
	rootFolderPath:string;
	description:string;

	 enableStatus:boolean;

	metaStatus:boolean;

	eHRFacilities:EHRFacilityResponse[] =[];// new ArrayList<EHRFacilityResponse>();

	customerGroupSettingsResponse:CustomerGroupSettingsResponse;
	
	 ehrAddressResponse:EHRAddressResponse;
}
