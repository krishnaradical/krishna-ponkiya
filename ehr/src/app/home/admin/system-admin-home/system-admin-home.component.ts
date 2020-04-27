import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EHRActionRoleView } from 'src/app/_models/ehraction-role-view';
import {  EhractionsService } from 'src/app/_services/ehractions.service';
import { EHRActionRoleDetailsView } from 'src/app/_models/ehraction-role-details-view';

@Component({
 
  selector: 'system-admin-home',
  templateUrl: './system-admin-home.component.html',
  styleUrls: ['./system-admin-home.component.scss']
})
export class SystemAdminHomeComponent implements OnInit ,AfterViewInit{


  ehrActionRoleDetailsViews: EHRActionRoleDetailsView[] = [];
  ehrActionRoleView :EHRActionRoleView;
  constructor(public router: Router,private route: ActivatedRoute, private ehractionsService:EhractionsService ) { 
    console.log(router.config)
  }
  ngAfterViewInit(){
    if(this.ehrActionRoleView !=null){
      this.ehractionsService.
      getEHRRoleDetailsViewByEMRActionRoleIdById(this.ehrActionRoleView.id).
      then(ehrActionRoleDetailsViews => {
        this.ehrActionRoleDetailsViews = ehrActionRoleDetailsViews;
        console.log('this.ehrActionRoleDetailsViews=' + JSON.stringify(this.ehrActionRoleDetailsViews));
     });;
  }
}
  ngOnInit() {
    this.ehrActionRoleView =  JSON.parse(localStorage.getItem('currentEHRActionRoleView'));
  }

    onRowClicked(ehrActionRoleDetailsView :EHRActionRoleDetailsView){
      this.router.navigate([ehrActionRoleDetailsView.routeSubString],{ relativeTo: this.route });
    }

}
