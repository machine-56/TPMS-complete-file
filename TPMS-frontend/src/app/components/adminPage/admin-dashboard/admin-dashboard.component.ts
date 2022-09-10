import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})

export class AdminDashboardComponent implements OnInit {

  role:any;
  selected!:any;

  constructor() { }

  ngOnInit(): void {
    this.role=localStorage.getItem('role');
  }

}
