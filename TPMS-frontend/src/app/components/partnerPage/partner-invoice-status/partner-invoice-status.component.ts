import { Component, OnInit } from '@angular/core';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-partner-invoice-status',
  templateUrl: './partner-invoice-status.component.html',
  styleUrls: ['./partner-invoice-status.component.css']
})
export class PartnerInvoiceStatusComponent implements OnInit {

  user:any;
  role:any;
  invoices:any=[];

  constructor(private partnerService:PartnerService) { }

  ngOnInit(): void {
    this.user=localStorage.getItem('user');
    this.role=localStorage.getItem('role');
      localStorage.removeItem("invo-id");
      this.partnerService.getInvodata(this.user)
      .subscribe((data)=>{
        this.invoices = data;
      })
  }

}
