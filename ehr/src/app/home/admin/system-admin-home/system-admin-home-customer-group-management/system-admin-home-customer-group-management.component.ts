import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomergroupService } from 'src/app/_services/customergroup.service';
import { EhrCustomerGroupResponse } from 'src/app/_models/ehr-customer-group-response';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { UserService } from 'src/app/_services';

@Component({
  selector: 'system-admin-home-customer-group-management',
  templateUrl: './system-admin-home-customer-group-management.component.html',
  styleUrls: ['./system-admin-home-customer-group-management.component.css']
})
export class SystemAdminHomeCustomerGroupManagementComponent implements OnInit ,AfterViewInit {

  displayedColumns: string[] = ['name', 'primaryEmail' ,'actions'];
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;   
  public dataSource = new MatTableDataSource<EhrCustomerGroupResponse>();
  isLoadingResults = true;
  ehrCustomerGroupResponse:EhrCustomerGroupResponse[] = [];
  constructor(public router: Router,private route: ActivatedRoute ,private customerGroupService:CustomergroupService) { }

  ngOnInit() {
    this.getAllCustomerGroups();
      
  
  }

  getAllCustomerGroups(){
    this.customerGroupService.getAllCustomerGroups()
    .then(ehrCustomerGroupResponse => {
      this.ehrCustomerGroupResponse = ehrCustomerGroupResponse;
      this.dataSource.data = ehrCustomerGroupResponse;
      this.isLoadingResults =false;
    })
    .catch(
      ()=>{this.isLoadingResults = false;
      });
  }

  addCustomerGroup(){
    console.log("  :::path" +this.route.parent.snapshot.pathFromRoot
    )
    this.router.navigate(['../customergroup-add'],{ relativeTo: this.route });
  }

  updateCustomerGroup(customergroupId:Number){
    this.router.navigate(['../customergroup-add', customergroupId],{ relativeTo: this.route });
  
  }

  redirectToDetails(ehrCustomerGroupResponse:EhrCustomerGroupResponse){
    localStorage.setItem('selectedCustomerGroup', JSON.stringify(ehrCustomerGroupResponse));

    this.router.navigate(['../customergroup-details', ehrCustomerGroupResponse.id],{ relativeTo: this.route });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  public doFilter = (value: string) => {
    console.log(value)
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
