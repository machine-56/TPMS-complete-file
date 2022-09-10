import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartnerService } from 'src/app/services/partner.service';

@Component({
  selector: 'app-partner-edit-profile',
  templateUrl: './partner-edit-profile.component.html',
  styleUrls: ['./partner-edit-profile.component.css'],
})
export class PartnerEditProfileComponent implements OnInit {
  visible: boolean = true;
  inputType: boolean = true;

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
  user:any;
  constructor(private router: Router, private partnerService: PartnerService) {}

  ngOnInit(): void {
    this.user = localStorage.getItem("user");
    this.partnerService.getProfile(this.user).subscribe((data: any) => {
      console.log(data);
      this.profile = JSON.parse(JSON.stringify(data));
    });
  }

  // to show password in update page
  viewpass() {
    this.visible = !this.visible;
    this.inputType = !this.inputType;
  }
  update() {
    let answer = confirm('Are you sure you want to update profile');
    if (answer) {
      this.partnerService.updateProfile(this.profile).subscribe(()=>{})
      this.router.navigate(['partner/profile']);
    }
  }
}
