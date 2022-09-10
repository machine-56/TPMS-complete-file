import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinanceService } from 'src/app/services/finance.service';


@Component({
  selector: 'app-finance-payment',
  templateUrl: './finance-payment.component.html',
  styleUrls: ['./finance-payment.component.css'],
})
export class FinancePaymentComponent implements OnInit {
  payments: any = [];
  role:any;
  
  constructor(private router: Router, private financeService: FinanceService) {}
  
  ngOnInit(): void {
    this.role=localStorage.getItem('role');
    localStorage.removeItem('invo-id');
    localStorage.removeItem('invo-file');
    localStorage.removeItem('invono')
    this.financeService.getPayment().subscribe((data: any) => {
      this.payments = data;
    });
  }

  detailedView(data: any) {
    localStorage.setItem('invono',data.invono.toString());
    localStorage.setItem('invo-id', data._id.toString() );
    localStorage.setItem('invo-file', data.fileName.toString() );
    this.router.navigate(['/finance/payment/'+data.fileName]);
  }

}
