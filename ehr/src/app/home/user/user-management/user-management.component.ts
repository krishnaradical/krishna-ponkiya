import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from 'src/app/_services';
import { Router, ActivatedRoute } from '@angular/router';
import { EhrCustomerGroupResponse } from 'src/app/_models/ehr-customer-group-response';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { EHRUserResponseVO } from 'src/app/_models';
import { CustomergroupService } from 'src/app/_services/customergroup.service';

@Component({
  selector: 'user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  public isCustomerGroup:boolean;
  private selectedCustomerGroup:EhrCustomerGroupResponse;

  displayedColumns: string[] = ['name', 'primaryEmail' ,'actions'];
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;   
  public dataSource = new MatTableDataSource<EHRUserResponseVO>();
  isLoadingResults = true;
  ehrUserResponseVO:EHRUserResponseVO[] = []; 
  
  constructor(public userService:UserService,public router: Router,private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    console.log("isfromcustomerGroup con " + this.isCustomerGroup)
    this.selectedCustomerGroup = JSON.parse(localStorage.getItem('selectedCustomerGroup'));
    this.getAllUsersByCustomerGroupId(this.selectedCustomerGroup.id);
  }
  getAllUsersByCustomerGroupId(customerGroupId:Number){
    this.userService.getAllUsersByCustomerGroupId(customerGroupId).
    then(ehrUserResponseVO => {
     this.ehrUserResponseVO = this.dataSource.data = ehrUserResponseVO;
      this.isLoadingResults =false;
    })
    .catch((err)=>{
        this.isLoadingResults = false;
        console.log(err)
      });
  }
 onSearch(){
   this.getAllUsersByCustomerGroupId(this.selectedCustomerGroup.id);
  }

}
