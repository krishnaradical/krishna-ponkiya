import { Component, OnInit } from '@angular/core';
import { EhrCustomerGroupResponse } from 'src/app/_models/ehr-customer-group-response';
import { Location } from '@angular/common';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-customergroup-details',
  templateUrl: './customergroup-details.component.html',
  styleUrls: ['./customergroup-details.component.css']
})
export class CustomergroupDetailsComponent implements OnInit {

  public isCustomerGroup:boolean =true;
  constructor(private location: Location) { }
  ehrCustomerGroupResponse:EhrCustomerGroupResponse = new EhrCustomerGroupResponse();
  ngOnInit() {
   this.ehrCustomerGroupResponse = JSON.parse(localStorage.getItem('selectedCustomerGroup'));
   }

   public back = () => {
    localStorage.setItem('selectedCustomerGroup',null);
    this.location.back();
  }
  onLinkClick(event: MatTabChangeEvent) {
    console.log('event => ', event);
    console.log('index => ', event.index);
    console.log('tab => ', event.tab);
  
     
  }
}
