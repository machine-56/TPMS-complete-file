import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatNativeDateModule, MatRippleModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/mainPage/sign-up/sign-up.component';
import { HomeComponent } from './components/mainPage/home/home.component';
import { AdminDashboardComponent } from './components/adminPage/admin-dashboard/admin-dashboard.component';
import { AdminGenWorkorderComponent } from './components/adminPage/admin-gen-workorder/admin-gen-workorder.component';
import { AdminApvInvoiceComponent } from './components/adminPage/admin-apv-invoice/admin-apv-invoice.component';
import { AdminEachInvoiceComponent } from './components/adminPage/admin-each-invoice/admin-each-invoice.component';
import { AdminWorkorderComponent } from './components/adminPage/admin-workorder/admin-workorder.component';
import { AdminEachWorkorderComponent } from './components/adminPage/admin-each-workorder/admin-each-workorder.component';
import { AdminPaymentComponent } from './components/adminPage/admin-payment/admin-payment.component';
import { FinanceDashboardComponent } from './components/financePage/finance-dashboard/finance-dashboard.component';
import { FinancePaymentComponent } from './components/financePage/finance-payment/finance-payment.component';
import { FinanceEachPaymentComponent } from './components/financePage/finance-each-payment/finance-each-payment.component';
import { FinanceApvWorkorderComponent } from './components/financePage/finance-apv-workorder/finance-apv-workorder.component';
import { FinanceEachWorkorderComponent } from './components/financePage/finance-each-workorder/finance-each-workorder.component';
import { PartnerDashboardComponent } from './components/partnerPage/partner-dashboard/partner-dashboard.component';
import { PartnerProfileComponent } from './components/partnerPage/partner-profile/partner-profile.component';
import { PartnerWorkorderComponent } from './components/partnerPage/partner-workorder/partner-workorder.component';
import { PartnerInvoiceComponent } from './components/partnerPage/partner-invoice/partner-invoice.component';
import { PartnerEachWorkorderComponent } from './components/partnerPage/partner-each-workorder/partner-each-workorder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PartnerEditProfileComponent } from './components/partnerPage/partner-edit-profile/partner-edit-profile.component';
import { AdminApvPartnerComponent } from './components/adminPage/admin-apv-partner/admin-apv-partner.component';
import {TokenInterceptorService} from './services/token-interceptor.service'
import { AdminService } from './services/admin.service';
import { FinanceService } from './services/finance.service';
import { PartnerService } from './services/partner.service';
import { LoginService } from './services/login.service';
import { SignupService } from './services/signup.service';
import { AdminEditWorkorderComponent } from './components/adminPage/admin-edit-workorder/admin-edit-workorder.component';
import { AdminSidenavComponent } from './components/adminPage/admin-sidenav/admin-sidenav.component';
import { FinanceSidenavComponent } from './components/financePage/finance-sidenav/finance-sidenav.component';
import { PartnerSidenavComponent } from './components/partnerPage/partner-sidenav/partner-sidenav.component';
import { PartnerInvoiceStatusComponent } from './components/partnerPage/partner-invoice-status/partner-invoice-status.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    AdminDashboardComponent,
    AdminGenWorkorderComponent,
    AdminApvInvoiceComponent,
    AdminEachInvoiceComponent,
    AdminWorkorderComponent,
    AdminEachWorkorderComponent,
    AdminPaymentComponent,
    FinanceDashboardComponent,
    FinancePaymentComponent,
    FinanceEachPaymentComponent,
    FinanceApvWorkorderComponent,
    FinanceEachWorkorderComponent,
    PartnerDashboardComponent,
    PartnerProfileComponent,
    PartnerWorkorderComponent,
    PartnerInvoiceComponent,
    PartnerEachWorkorderComponent,
    PartnerEditProfileComponent,
    AdminApvPartnerComponent,
    AdminEditWorkorderComponent,
    AdminSidenavComponent,
    FinanceSidenavComponent,
    PartnerSidenavComponent,
    PartnerInvoiceStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatRippleModule,
    MatDividerModule,
    HttpClientModule,
  ],
  providers: [AdminService,FinanceService,PartnerService,LoginService,SignupService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  },
  {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
],
  bootstrap: [AppComponent],
})
export class AppModule {}
