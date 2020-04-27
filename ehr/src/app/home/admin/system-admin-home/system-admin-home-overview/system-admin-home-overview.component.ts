import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'system-admin-home-overview',
  templateUrl: './system-admin-home-overview.component.html',
  styleUrls: ['./system-admin-home-overview.component.css']
})
export class SystemAdminHomeOverviewComponent implements OnInit {

  constructor(public router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
