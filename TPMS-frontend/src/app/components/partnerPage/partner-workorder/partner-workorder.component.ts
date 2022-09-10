import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-partner-workorder',
  templateUrl: './partner-workorder.component.html',
  styleUrls: ['./partner-workorder.component.css']
})
export class PartnerWorkorderComponent implements OnInit {

  user:any;
  workOrders:any=[];

  constructor(private router: Router, private partnerService: PartnerService) { }

  ngOnInit(): void {
    localStorage.removeItem('invo-woid');
    localStorage.removeItem("woid");
    this.user = localStorage.getItem("user");
    this.partnerService.getWorkOrder(this.user).subscribe((data)=>{
      this.workOrders = JSON.parse(JSON.stringify(data));
    })
  }

  detailedView(woid: any){
    localStorage.setItem("woid",woid.toString());
    this.router.navigate(['partner/workorder/',woid]);
  }

}
