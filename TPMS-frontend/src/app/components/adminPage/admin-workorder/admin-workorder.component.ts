import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-admin-workorder',
  templateUrl: './admin-workorder.component.html',
  styleUrls: ['./admin-workorder.component.css'],
})
export class AdminWorkorderComponent implements OnInit {

  workorder = [
    {
      _id: '',
      woid: '',
      partner_name: '',
      program_name: '',
      date_start: '',
      date_end: '',
    },
  ];
  role:any;
  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.role=localStorage.getItem('role');
    this.adminService.getWorkorders().subscribe((data) => {
      this.workorder = JSON.parse(JSON.stringify(data));
    });
  }
}
