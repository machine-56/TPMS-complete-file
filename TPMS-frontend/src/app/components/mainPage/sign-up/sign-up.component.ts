import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  positions = ['Partner', 'Finance', 'Admin'];
  signupData = {
    fullname: '',
    uname: '',
    pwd: '',
    email: '',
    post: '',
    compname: '',
    phoneNo: '',
    approve: false,
  };
  constructor(private signupService: SignupService, private router: Router) {}

  ngOnInit(): void {}
  onSignup() {
    console.log(this.signupData);
    this.signupService.signup(this.signupData);
    this.router.navigate(['/']);
  }
}
