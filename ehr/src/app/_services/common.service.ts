
import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import { AppConstants } from '../_helpers/AppConstants';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  public getHeader():Headers{
    return new Headers({'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization' : 'Bearer ' + localStorage.getItem('jwt')})
  
  }

  public setJwtValues():void{
    const helper = new JwtHelperService();

    const decodedToken = helper.decodeToken(localStorage.getItem('jwt'));
   localStorage.setItem("userId", decodedToken.userId);
    localStorage.setItem("userName", decodedToken.userName);
    localStorage.setItem("customerGroupId", decodedToken.customerGroupId);
    localStorage.setItem("jwtType", decodedToken.jwtType);

  }

  public getLoggedInCustomerGroupId():number{
    let id:string = localStorage.getItem("customerGroupId");
    return +id;//convert string to number by using the +
  }
  public getLoggedInUserName():string{
   let stringName:string =localStorage.getItem("userName");
   return stringName;
    
  }
}

  
