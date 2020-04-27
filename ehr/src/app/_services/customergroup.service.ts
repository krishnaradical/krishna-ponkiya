import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { EhrCustomerGroupResponse } from '../_models/ehr-customer-group-response';
import { EHRUserResponseVO } from '../_models';

@Injectable({
  providedIn: 'root'
})
export class CustomergroupService {

  constructor(public http: HttpClient) { }

  async getAllCustomerGroups():Promise<EhrCustomerGroupResponse[]> {
    const respoonse = await this.http.get(environment.apiURL + '/admin/allcustomergroups')
      .toPromise();
    return respoonse as EhrCustomerGroupResponse[];
  }

  async getCustomerGroupById(customergroupId: number): Promise<EhrCustomerGroupResponse> {
    const url = environment.apiURL +customergroupId;
    const respoonse = await  this.http.get<EhrCustomerGroupResponse>(url).toPromise();
    return respoonse as EhrCustomerGroupResponse;
  }

 
}
