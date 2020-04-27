import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'patient-chart-home-vitals',
  templateUrl: './patient-chart-home-vitals.component.html',
  styleUrls: ['./patient-chart-home-vitals.component.css']
})
export class PatientChartHomeVitalsComponent implements OnInit {

  constructor(public router: Router,private route: ActivatedRoute ) { }

  ngOnInit() {
  }

}
