import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partner-dashboard',
  templateUrl: './partner-dashboard.component.html',
  styleUrls: ['./partner-dashboard.component.css']
})
export class PartnerDashboardComponent implements OnInit {

  user:any;
selected: any;


  constructor() { }

  ngOnInit(): void {
    this.user=localStorage.getItem('user');
  }

}
