import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PatientChartHomeService } from 'src/app/_services/patient-chart-home.service';
import { EhractionsService } from 'src/app/_services/ehractions.service';
import { EHRActionRoleDetailsView } from 'src/app/_models/ehraction-role-details-view';
import { EHRActionRoleView } from 'src/app/_models/ehraction-role-view';
import { NavService } from 'src/app/_services/nav.service';

@Component({
  selector: 'patient-chart-home',
  templateUrl: './patient-chart-home.component.html',
  styleUrls: ['./patient-chart-home.component.scss']
})
export class PatientChartHomeComponent implements OnInit ,AfterViewInit {

  ehrActionRoleDetailsViews: EHRActionRoleDetailsView[] = [];
  ehrActionRoleView :EHRActionRoleView;
  constructor(public router: Router,private route: ActivatedRoute, private nav:NavService, private ehractionsService:EhractionsService ,private patientChartHomeService:PatientChartHomeService ) { 
    console.log(router.config)
  }

  ngOnInit() {
    this.ehrActionRoleView =  JSON.parse(localStorage.getItem('currentEHRActionRoleView'));
  }
  ngAfterViewInit(){
    if(this.ehrActionRoleView !=null){
      this.ehractionsService.
      getEHRRoleDetailsViewByEMRActionRoleIdById(this.ehrActionRoleView.id).
      then(ehrActionRoleDetailsViews => {
        this.ehrActionRoleDetailsViews = ehrActionRoleDetailsViews;
        console.log('this.ehrActionRoleDetailsViews=' + this.ehrActionRoleDetailsViews);
        this.onRowClicked(this.ehrActionRoleDetailsViews[0]);
        this.nav.openNav();
     });;
  }
}
onRowClicked(ehrActionRoleDetailsView :EHRActionRoleDetailsView){
  this.router.navigate([ehrActionRoleDetailsView.routeSubString],{ relativeTo: this.route });
}
}
