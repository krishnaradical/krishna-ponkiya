import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatPaginator, MatTableDataSource } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';

import { EhrPatientService } from 'src/app/_services/ehr-patient.service';
import { EhrCustomerGroupResponse } from 'src/app/_models/ehr-customer-group-response';
import { CommonService } from 'src/app/_services/common.service';
import { EhrPatientView } from 'src/app/_models/ehr-patient-view';

@Component({
  selector: 'demographics-home',
  templateUrl: './demographics-home.component.html',
  styleUrls: ['./demographics-home.component.scss']
})
export class DemographicsHomeComponent implements OnInit {

  displayedColumns: string[] = ['uid' ,'fname','lname','dateOfBirth', 'gender', 'primaryEmail' ,'status','actions'];
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;   
  public dataSource = new MatTableDataSource<EhrPatientView>();
  isLoadingResults = true;
  ehrPatientResponse:EhrPatientView[] = [];
  constructor(public router: Router,private route: ActivatedRoute ,private ehrPatientService:EhrPatientService ,private commonService:CommonService) { }

  ngOnInit() {

    this.getEhrPatientByCustomerGroupId(this.commonService.getLoggedInCustomerGroupId());//ehrCustomerGroupResponse.id);
      
  
  }

  getEhrPatientByCustomerGroupId(customergroupId :number){
    this.ehrPatientService.getEhrPatientByCustomerGroupId(customergroupId)
    .then(ehrPatientView => {
      this.ehrPatientResponse = ehrPatientView;
      this.dataSource.data = ehrPatientView;
      this.isLoadingResults =false;
    })
    .catch(
      (e)=>{
        this.isLoadingResults = false;
        console.log(e);
      });
  }

  addCustomerGroup(){
    console.log("  :::path" +this.route.parent.snapshot.pathFromRoot
    )
    this.router.navigate(['../ehr-patient-add'],{ relativeTo: this.route });
  }

  updateCustomerGroup(customergroupId:Number){
    this.router.navigate(['../ehr-patient-add', customergroupId],{ relativeTo: this.route });
  
  }

  redirectToDetails(ehrCustomerGroupResponse:EhrPatientView){
    localStorage.setItem('selectedCustomerGroup', JSON.stringify(ehrCustomerGroupResponse));

   // this.router.navigate(['../customergroup-details', ehrCustomerGroupResponse.id],{ relativeTo: this.route });
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
