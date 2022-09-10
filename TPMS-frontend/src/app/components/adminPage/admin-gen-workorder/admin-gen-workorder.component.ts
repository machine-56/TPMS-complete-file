import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
@Component({
  selector: 'app-admin-gen-workorder',
  templateUrl: './admin-gen-workorder.component.html',
  styleUrls: ['./admin-gen-workorder.component.css']
})
export class AdminGenWorkorderComponent implements OnInit {

  isSubmitted = false;
  dateRange = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  trainingMode: any = ['Virtual', 'Physical', 'Hybrid'];
  selectedTaxType:string='';
  currentDateTime:Date =new Date();
  role:any;
  
  // workOrder={
  //   pname:'',
  //   pid:'',
  //   tpname:'',
  //   ttopics:'',
  //   tdate_start:'',
  //   tdate_end:'',
  //   tmode:'',
  //   GSTno:'',
  //   tax:'' ,
  //   panno:'',
  //   amount:'',
  //   payterms:'',
  //   issue_date:this.currentDateTime
  // }; 
 
  constructor(private fb:FormBuilder, private router:Router, private adminService:AdminService) { }
  workOrderForm=this.fb.group({
    p_name:['', [Validators.required,Validators.minLength(3),Validators.maxLength(30),Validators.pattern("^([A-Za-z][A-Za-z. ']+[.]*)+$")]],
    p_id:['', [Validators.required]],
    tp_name:['', [Validators.required]],
    t_topics:['', [Validators.required]],
    start:['',[Validators.required]],
    end:['',[Validators.required]],
    t_mode:['', [Validators.required]],
    GST:['',[Validators.minLength(15),Validators.maxLength(15),Validators.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$")]],
    taxControl:['', [Validators.required]] ,
    pan_no:['', [Validators.required,Validators.minLength(10),Validators.pattern("^[A-Z]{5}[0-9]{4}[A-Z]{1}$")]],
    amount:['', [Validators.required,Validators.pattern("^[0-9]*$")]],
    pay_terms:['', [Validators.required]],
    issue_date:[this.currentDateTime] ,
    wo_status:['pending']
  });

  ngOnInit(): void {
    this.role=localStorage.getItem('role');
  }

  get workOrderFormControl() {
    return this.workOrderForm.controls;
  }
  radioChangeHandler(event:any){
    this.selectedTaxType=event.target.value;
  }
  onSubmit(){
    this.isSubmitted = true;
    this.adminService.newWorkorder(this.workOrderForm.value);
    console.log("Called");    
    alert("Workorder Generated Successfully");
    this.router.navigate(['admin/workorder']);
    
  }

}
