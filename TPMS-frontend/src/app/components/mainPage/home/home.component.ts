import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  errormsg='';
  showError: boolean = false;
  loginData = {
    uname: '',
    pwd: '',
  };
  test = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {
    this.loginService.loginFn(this.loginData).subscribe((res) => {
      console.log(res.post);
      localStorage.setItem('token',res.token);
      localStorage.setItem('role',res.post);
      if (res.post === 'Admin') {this.router.navigate([`/admin/dashboard`]);}
      else if(res.post === 'superadmin'){this.router.navigate([`/admin/dashboard`]);}
      else if(res.post=='Partner'){
        localStorage.setItem("user",res.username)
        this.router.navigate([`/partner/dashboard`]);
      }
      else if(res.post=='Finance'){ this.router.navigate([`/finance/dashboard`]);}
    },(err) => {
      console.log(err.error.message);
      this.errormsg=err.error.message;
      this.showError=true;
    });
  }

}
