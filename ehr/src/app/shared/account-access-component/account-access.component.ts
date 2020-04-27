import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{EhrFooterComponent} from '../ehr-footer';
import{EhrHeaderComponent} from '../ehr-header'

@Component({
  selector: 'account-access-home',
  templateUrl: './account-access-component.html',
  styleUrls: ['./account-access-component.css']
})
export class AccountAccessComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
  }

}
