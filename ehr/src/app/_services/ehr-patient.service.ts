import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { EhrPatientResponse } from '../_models/ehr-patient-response';
import { EhrPatientView } from '../_models/ehr-patient-view';


@Injectable({
  providedIn: 'root'
})
export class EhrPatientService {

  constructor(public http: HttpClient) { }

  async getEhrPatientByCustomerGroupId(customergroupId: number): Promise<EhrPatientView[]> {
    const url = environment.apiURL + "/ehrPatients/"+customergroupId;
    const respoonse = await  this.http.get<EhrPatientView[]>(url).toPromise();
    return respoonse as EhrPatientView[];
  }

  
}
