import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-partner-profile',
  templateUrl: './partner-profile.component.html',
  styleUrls: ['./partner-profile.component.css'],
})
export class PartnerProfileComponent implements OnInit {
  passw: boolean = true;
  user:any;

  profile = {
    image: '',
    name: '',
    uname: '',
    pwd: '',
    post: '',
    partner_id: '',
    pan: '',
    email: '',
    phoneNo: '',
    company: '',
  };
  constructor(private partnerService: PartnerService, private router: Router) {}

  // uid = '630cd9f83c17e58710676441';

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    this.partnerService.getProfile(this.user).subscribe((data: any) => {
      this.profile = JSON.parse(JSON.stringify(data));
    });
  }

  editProfView() {
    this.router.navigate(['/partner/profile/edit']);
  }

  // to show password in profile view
  pass(event: any): void {
    if (event.target.checked) {
      this.passw = !this.passw;
    } else {
      this.passw = true;
    }
  }
}
