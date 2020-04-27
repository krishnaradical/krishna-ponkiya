import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EHRActionRoleDetailsView } from '../_models/ehraction-role-details-view';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class EhractionsService {

  constructor(private http: HttpClient) { }

  getEHRRoleDetailsViewByEMRActionRoleIdById(id: Number):Promise<EHRActionRoleDetailsView[]> {
    return this.http.get(environment.apiURL+`/ehractionroledetails/` + id)
    .toPromise()
    .then(response => response as EHRActionRoleDetailsView[]);
    
  }
}
