import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EhrPatientResponse } from 'src/app/_models/ehr-patient-response';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { EhrPatientService } from 'src/app/_services/ehr-patient.service';

@Component({
  selector: 'patient-search-home',
  templateUrl: './patient-search-home.component.html',
  styleUrls: ['./patient-search-home.component.scss']
})
export class PatientSearchHomeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'primaryEmail' ,'actions'];
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;   
  public dataSource = new MatTableDataSource<EhrPatientResponse>();
  isLoadingResults = true;
  ehrPatientResponse:EhrPatientResponse[] = [];
  constructor(public router: Router,private route: ActivatedRoute ,private ehrPatientService:EhrPatientService) { }

  ngOnInit() {
  // let ehrCustomerGroupResponse :EhrCustomerGroupResponse = localStorage.getItem('selectedCustomerGroup');
    this.getEhrPatientByCustomerGroupId(1);//ehrCustomerGroupResponse.id);
      
  
  }

  getEhrPatientByCustomerGroupId(customergroupId :number){
   /* this.ehrPatientService.getEhrPatientByCustomerGroupId(customergroupId)
    .then(ehrPatientResponse => {
      this.ehrPatientResponse = ehrPatientResponse;
      this.dataSource.data = ehrPatientResponse;
      this.isLoadingResults =false;
    })
    .catch(
      ()=>{this.isLoadingResults = false;
      });*/
  }

  addCustomerGroup(){
    console.log("  :::path" +this.route.parent.snapshot.pathFromRoot
    )
    this.router.navigate(['../ehr-patient-add'],{ relativeTo: this.route });
  }

  updateCustomerGroup(customergroupId:Number){
    this.router.navigate(['../ehr-patient-add', customergroupId],{ relativeTo: this.route });
  
  }

  redirectToDetails(ehrCustomerGroupResponse:EhrPatientResponse){
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
