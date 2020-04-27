import { EhrPersonResponse } from "./ehr-person-response";

export class EhrPatientResponse {
    patientUID:string;
    id:number;
    ehrCustomerGroupId:number;
    ehrPersonResponse:EhrPersonResponse;

}
