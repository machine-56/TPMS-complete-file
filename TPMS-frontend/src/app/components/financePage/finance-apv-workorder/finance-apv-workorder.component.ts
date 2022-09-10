import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinanceService } from 'src/app/services/finance.service';

@Component({
  selector: 'app-finance-apv-workorder',
  templateUrl: './finance-apv-workorder.component.html',
  styleUrls: ['./finance-apv-workorder.component.css'],
})
export class FinanceApvWorkorderComponent implements OnInit {
  workorder = [
    {
      _id: '',
      woid: '',
      partner_name: '',
      program_name: '',
      date_start: '',
      date_end: '',
      amount:'',
      wo_status:'',
    },
  ];
  role:any;
  invono:any;

  constructor(private router: Router, private financeService: FinanceService) {}

  ngOnInit(): void {
    this.role=localStorage.getItem('role');
    this.invono=localStorage.getItem('invono')
    localStorage.removeItem('woid');
    this.financeService.getWorkOrder().subscribe((data)=>{
      this.workorder = JSON.parse(JSON.stringify(data));
    });
  }

  detailedView(woid: any) {
    localStorage.setItem('woid', woid.toString());
    this.router.navigate(['/finance/workorder/', woid]);
  }

}
