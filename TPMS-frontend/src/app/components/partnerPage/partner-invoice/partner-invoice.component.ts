import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-partner-invoice',
  templateUrl: './partner-invoice.component.html',
  styleUrls: ['./partner-invoice.component.css'],
})
export class PartnerInvoiceComponent implements OnInit {
  invoice: any = {};
  user:any;

  displayMultipleInvoices!: Boolean;
  @ViewChild('multipleInput', { static: false }) multipleInput!: ElementRef;

  multipleInvoices = [];
  constructor(private router: Router, private partnerService: PartnerService) {
    this.displayMultipleInvoices = false;
  }

  ngOnInit(): void {
    this.user=localStorage.getItem('user');
    this.invoice.woid=localStorage.getItem('invo-woid');
  }

  selectMultipleInvoice(event: any) {
    if (event.target.files.length > 0) {
      this.multipleInvoices = event.target.files;
    }
  }
  invoiceSubmit() {
    const formdata = new FormData();

    for (let img of this.multipleInvoices) {
      formdata.append('files', img);
    }

    //do the form upload call on successfull completion of fileupload
    this.partnerService.invoiceFileUpload(formdata).subscribe((res) => {
      this.multipleInput.nativeElement.value = '';
      this.invoiceFormUpload(res.path[0]);
      this.displayMultipleInvoices = true;
    });
  }

  invoiceFormUpload(invoiceFileName: any) {
    this.invoice.fileName = invoiceFileName;
    this.invoice.partner_name = this.user;
    this.invoice.invoice_status = 'Pending';
    this.invoice.paystatus = 'Pending'
    console.log(this.invoice);
    this.partnerService.invoiceFormUpload(this.invoice).subscribe({
      next: (succ: any) => {
        if (succ.success) {
          // message
          console.log('success invoice uploaded');
          alert('Uploaded Successfully');
          this.router.navigate(['/partner/workorder'])
        }
      },
      error: (err) => {
        console.log('Error', err);
      },
    });
  }
}
