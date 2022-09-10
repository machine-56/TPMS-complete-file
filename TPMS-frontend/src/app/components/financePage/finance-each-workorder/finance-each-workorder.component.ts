import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinanceService } from 'src/app/services/finance.service';
const numWords = require('num-words')

@Component({
  selector: 'app-finance-each-workorder',
  templateUrl: './finance-each-workorder.component.html',
  styleUrls: ['./finance-each-workorder.component.css']
})
export class FinanceEachWorkorderComponent implements OnInit {

  public id: any;logo='/assets/images/logo.png';
  workorders:any=[];
  woid=localStorage.getItem("woid");
  role:any;
  amountinwords: any;

  constructor(private financeService: FinanceService, private router: Router) {}

  ngOnInit(): void {
    this.role=localStorage.getItem('role');
    this.financeService.eachWorkOrder(this.woid)
    .subscribe((data)=>{
      this.workorders = JSON.parse(JSON.stringify(data));
      this.amountinwords=numWords(this.workorders.amount);
    });
  }

  fnApv(data: any, pname: any){
    this.financeService.apvFn(data, pname)
    .subscribe(()=>{})
    this.router.navigate(['/finance/workorder'])
  }

  fnDeny(data: any){
    let answer = confirm('Are you sure to DENY Workorder');
    if (answer) {
      this.financeService.deleteFn(data).subscribe(()=>{})
      this.router.navigate(['/finance/workorder'])
    }
  }

}
