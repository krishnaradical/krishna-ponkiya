import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  moduleId :module.id,
  selector: 'nurse-doctor-home',
  templateUrl: './nurse-doctor-home.component.html',
  styleUrls: ['./nurse-doctor-home.component.css']
})
export class NurseDoctorHomeComponent implements OnInit {

  constructor(public router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
