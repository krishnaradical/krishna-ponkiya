import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'frontdesk-home',
  templateUrl: './frontdesk-home.component.html',
  styleUrls: ['./frontdesk-home.component.css']
})
export class FrontdeskHomeComponent implements OnInit {

  constructor(public router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
