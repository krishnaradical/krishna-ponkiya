import { EHRAddressResponse } from "./ehraddress-response";
import { EHRFacilityResponse } from "./ehrfacility-response";

export class CustomerGroupSettingsResponse {

    id:Number;
    name:string;
   primaryEmail:string;
   ehrAddressResponse:EHRAddressResponse;
   workPhone:string;
   mobilePhone:string;
   fax:string;
   alternativeEmail:string;
   rootFolderPath:string;
   description:string;
   enableStatus:boolean;
   metaStatus:boolean;
   eHRFacilityResponses:Array<EHRFacilityResponse>;
   customerGroupSettingsResponse:CustomerGroupSettingsResponse;
}
