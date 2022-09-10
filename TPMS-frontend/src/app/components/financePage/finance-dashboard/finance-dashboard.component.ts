import { Component, OnInit, LOCALE_ID,Inject } from '@angular/core';
import { formatDate } from '@angular/common';
import { FinanceService } from 'src/app/services/finance.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finance-dashboard',
  templateUrl: './finance-dashboard.component.html',
  styleUrls: ['./finance-dashboard.component.css']
})
export class FinanceDashboardComponent implements OnInit {

  role:any;
  currentDateTime:Date =new Date();
  invodate:any;
  testdate:any;
  payments:any=[];
  selected: any;

  constructor(@Inject(LOCALE_ID) private locale: string, private financeService: FinanceService) { }

  ngOnInit(): void {
    this.role=localStorage.getItem('role');
    // checking for overdue
    this.financeService.getPayment().subscribe((data: any) => {
      this.payments = data;
      for(let i=0;i<this.payments.length;i++ ){
        this.invodate=formatDate(this.payments[i].duedate,'dd-MM-yyyy',this.locale)
        this.testdate=formatDate(this.currentDateTime,'dd-MM-yyyy',this.locale)
        if((this.testdate>this.invodate) && (this.payments[i].paystatus!='Paid')){
          // set over due
          this.financeService.setOverdue(this.payments[i]._id).subscribe(()=>{})
        }
      }
    });
  }

}
