import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-apv-invoice',
  templateUrl: './admin-apv-invoice.component.html',
  styleUrls: ['./admin-apv-invoice.component.css']
})
export class AdminApvInvoiceComponent implements OnInit {

  invoices:any=[]
  role:any;

  constructor(private router:Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.role=localStorage.getItem('role');
    localStorage.removeItem("invo-id");
    this.adminService.getInvodata()
    .subscribe((data)=>{
      this.invoices = data;
    })
  }

  detailedView(data: any){
    localStorage.setItem('invo-id', data._id);
    localStorage.setItem('invo-file', data.fileName);
    this.router.navigate(['/admin/invoice/',data.fileName]);
  }

}
