import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { serverURL } from 'src/app/server';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-finance-each-payment',
  templateUrl: './finance-each-payment.component.html',
  styleUrls: ['./finance-each-payment.component.css'],
})
export class FinanceEachPaymentComponent implements OnInit {
  invono = localStorage.getItem('invono');

  safeUrl: any;
  data: any;
  link: any;
  uid:any;
  role:any;
  invo={
    comment:'',
    invoid:localStorage.getItem('invo-id')
  }
  constructor(private sanitizer: DomSanitizer, private financeService: FinanceService, private router:Router) {}
  
  ngOnInit(): void {
    this.invo.invoid=localStorage.getItem('invo-id');
    this.role=localStorage.getItem('role');
    this.uid = localStorage.getItem('invo-id');
    this.data = localStorage.getItem('invo-file');
    this.link = `${serverURL}/finance/invoice/${this.data}`;
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.link);
  }

  fnPay() {
    this.financeService.payFn(this.uid)
    .subscribe(()=>{
      alert('Invoice paid');
      this.router.navigate(['finance/payment'])
    });
  }

  subComment(){
    this.financeService.invoComment(this.invo).subscribe(()=>{
      alert('Commented Successfully');
      this.router.navigate(['/finance/payment'])
    })
  }
}
