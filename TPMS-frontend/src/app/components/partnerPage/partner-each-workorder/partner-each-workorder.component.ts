import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';
import { PdfService } from 'src/app/services/pdf.service';
const numWords = require('num-words')

@Component({
  selector: 'app-partner-each-workorder',
  templateUrl: './partner-each-workorder.component.html',
  styleUrls: ['./partner-each-workorder.component.css']
})
export class PartnerEachWorkorderComponent implements OnInit {

  woid=localStorage.getItem("woid");
  public id: any; logo='/assets/images/logo.png';
  public workorders:any=[];
  user:any;
  amountinwords:any;
  constructor(private partnerService:PartnerService, private pdfService: PdfService, private router: Router) { }
  
  ngOnInit(): void {
    this.user=localStorage.getItem('user');
    this.partnerService.eachWorkorder(this.woid)
    .subscribe((data)=>{
      this.workorders = JSON.parse(JSON.stringify(data));
      this.amountinwords=numWords(this.workorders.amount)
    });
  }

  generatePDF(){
    this.pdfService.generatePDF(this.workorders);
    
  }
  submitinvoice(data: any){
    localStorage.setItem('invo-woid',data);
    this.router.navigate(['/partner/invoice'])
  }
}
