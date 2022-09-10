import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-apv-partner',
  templateUrl: './admin-apv-partner.component.html',
  styleUrls: ['./admin-apv-partner.component.css']
})
export class AdminApvPartnerComponent implements OnInit {
  
  regUserLists=[{
    _id:'',
    uname:'',
    company:'',
    email:'',
    post:''
  }];
  role:any;
  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.role=localStorage.getItem('role');
    this.adminService.getUsers().subscribe((data: any)=>{
      this.regUserLists = JSON.parse(JSON.stringify(data));
     console.log(this.regUserLists);
    });
  }
  PartnerApv(id:any){
    this.adminService.apvfn(id)
    .subscribe(()=>{this.regUserLists=this.regUserLists.filter(p=>p !== id);})
  }
  PartnerDeny(id:any){
    this.adminService.deletefn(id)
    .subscribe(()=>{
      this.regUserLists=this.regUserLists.filter(p=>p !== id);
    })
  }
}
