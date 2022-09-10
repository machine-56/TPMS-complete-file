import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-payment',
  templateUrl: './admin-payment.component.html',
  styleUrls: ['./admin-payment.component.css']
})
export class AdminPaymentComponent implements OnInit {

  payments: any = [];
  role:any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.role=localStorage.getItem('role');
    this.adminService.getPayment().subscribe((data: any) => {
      this.payments = data;
    });
  }

}
