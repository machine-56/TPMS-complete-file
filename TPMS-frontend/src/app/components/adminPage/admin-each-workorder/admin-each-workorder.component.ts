import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { PdfService } from 'src/app/services/pdf.service';
const numWords = require('num-words')

@Component({
  selector: 'app-admin-each-workorder',
  templateUrl: './admin-each-workorder.component.html',
  styleUrls: ['./admin-each-workorder.component.css']
})
export class AdminEachWorkorderComponent implements OnInit {
  public id: any;logo='/assets/images/logo.png';
  public workorders:any=[];
  amountinwords:any;
  role:any;
  constructor(private router:Router,private route:ActivatedRoute,private adminService:AdminService, private pdfService: PdfService) { }

  ngOnInit(): void {
    this.role=localStorage.getItem('role');
    this.id = this. route. snapshot. paramMap. get('id');
   
    this.adminService.getWorkorderById(this.id).subscribe((workorder:any) => {
      this.workorders=JSON.parse(JSON.stringify(workorder));
      this.amountinwords=numWords(this.workorders.amount);
		})
  }
  generatePDF(){
    this.pdfService.generatePDF(this.workorders);
    
  }
  edit(data:any){
    localStorage.setItem('woid-edit',data);
    this.router.navigate(['/admin/edit'])
  }
}
