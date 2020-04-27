import { Component, OnInit } from '@angular/core';
import { CustomergroupService } from 'src/app/_services/customergroup.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'customergroup-add',
  templateUrl: './customergroup-addedit.component.html',
  styleUrls: ['./customergroup-addedit.component.css']
})
export class CustomergroupAddeditComponent implements OnInit {

  constructor(public router: Router,private route: ActivatedRoute ,private customerGroupService:CustomergroupService) { }
   title:string ='';
  ngOnInit() {
    this.title = this.route.snapshot.data['title'];
  }

}
