import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EHRActionRoleView } from 'src/app/_models/ehraction-role-view';
import { EHRUserResponseVO } from 'src/app/_models';
import { AuthenticationService } from 'src/app/_services';

@Component({
  
  selector: 'app-ehr-header',
  templateUrl: './ehr-header.component.html',
  styleUrls: ['./ehr-header.component.css']
})
export class EhrHeaderComponent implements OnInit,OnDestroy {
  currentUser: EHRUserResponseVO;
  currentUserSubscription: Subscription;
  ehrActionRoleView:EHRActionRoleView;

  constructor( private authenticationService: AuthenticationService ,private route: ActivatedRoute,
    private router: Router) { 
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(ehrUserResponseVO => {
      this.currentUser = ehrUserResponseVO;
  });
  }
  public onValChange(ehrActionRoleView: EHRActionRoleView) {
    //console.log(val);
    this.router.navigate([ehrActionRoleView.routeString],{ relativeTo: this.route });
    localStorage.setItem('currentEHRActionRoleView' ,JSON.stringify(ehrActionRoleView));
    
  }
  ngOnInit() {
    if(this.currentUser !=null){
      this.currentUser.ehrActionRoleViews.forEach(element => {
        if(element.actionOrder == 1 ){
          this.router.navigate([element.routeString],{ relativeTo: this.route });
          localStorage.setItem('currentEHRActionRoleView' ,JSON.stringify(element));
        }
      }); 
    }
  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.currentUserSubscription.unsubscribe();
    this.ehrActionRoleView = null;
}

}
