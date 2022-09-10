import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminApvInvoiceComponent } from './components/adminPage/admin-apv-invoice/admin-apv-invoice.component';
import { AdminApvPartnerComponent } from './components/adminPage/admin-apv-partner/admin-apv-partner.component';
import { AdminDashboardComponent } from './components/adminPage/admin-dashboard/admin-dashboard.component';
import { AdminEachInvoiceComponent } from './components/adminPage/admin-each-invoice/admin-each-invoice.component';
import { AdminEachWorkorderComponent } from './components/adminPage/admin-each-workorder/admin-each-workorder.component';
import { AdminEditWorkorderComponent } from './components/adminPage/admin-edit-workorder/admin-edit-workorder.component';
import { AdminGenWorkorderComponent } from './components/adminPage/admin-gen-workorder/admin-gen-workorder.component';
import { AdminPaymentComponent } from './components/adminPage/admin-payment/admin-payment.component';
import { AdminSidenavComponent } from './components/adminPage/admin-sidenav/admin-sidenav.component';
import { AdminWorkorderComponent } from './components/adminPage/admin-workorder/admin-workorder.component';
import { FinanceApvWorkorderComponent } from './components/financePage/finance-apv-workorder/finance-apv-workorder.component';
import { FinanceDashboardComponent } from './components/financePage/finance-dashboard/finance-dashboard.component';
import { FinanceEachPaymentComponent } from './components/financePage/finance-each-payment/finance-each-payment.component';
import { FinanceEachWorkorderComponent } from './components/financePage/finance-each-workorder/finance-each-workorder.component';
import { FinancePaymentComponent } from './components/financePage/finance-payment/finance-payment.component';
import { FinanceSidenavComponent } from './components/financePage/finance-sidenav/finance-sidenav.component';
import { HomeComponent } from './components/mainPage/home/home.component';
import { SignUpComponent } from './components/mainPage/sign-up/sign-up.component';
import { PartnerDashboardComponent } from './components/partnerPage/partner-dashboard/partner-dashboard.component';
import { PartnerEachWorkorderComponent } from './components/partnerPage/partner-each-workorder/partner-each-workorder.component';
import { PartnerEditProfileComponent } from './components/partnerPage/partner-edit-profile/partner-edit-profile.component';
import { PartnerInvoiceStatusComponent } from './components/partnerPage/partner-invoice-status/partner-invoice-status.component';
import { PartnerInvoiceComponent } from './components/partnerPage/partner-invoice/partner-invoice.component';
import { PartnerProfileComponent } from './components/partnerPage/partner-profile/partner-profile.component';
import { PartnerSidenavComponent } from './components/partnerPage/partner-sidenav/partner-sidenav.component';
import { PartnerWorkorderComponent } from './components/partnerPage/partner-workorder/partner-workorder.component';
import { AdminGuard } from './guard/admin.guard';
import { FinanceGuard } from './guard/finance.guard';
import { PartnerGuard } from './guard/partner.guard';

const routes: Routes = [
  {path:'',redirectTo:'/',pathMatch:'full'},
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignUpComponent },
  {path: 'admin', component:AdminSidenavComponent,
  children:[
  { path: 'dashboard', component: AdminDashboardComponent,canActivate:[AdminGuard]},
  { path: 'generate/workorder', component: AdminGenWorkorderComponent,canActivate:[AdminGuard] },
  { path: 'workorder', component: AdminWorkorderComponent,canActivate:[AdminGuard] },
  { path: 'workorder/:id', component: AdminEachWorkorderComponent,canActivate:[AdminGuard] },
  { path: 'edit', component:AdminEditWorkorderComponent,canActivate:[AdminGuard]},
  { path: 'invoice', component: AdminApvInvoiceComponent,canActivate:[AdminGuard] },
  { path: 'invoice/:id', component: AdminEachInvoiceComponent,canActivate:[AdminGuard] },
  { path: 'payment', component: AdminPaymentComponent,canActivate:[AdminGuard] },
  { path: 'user/approve', component: AdminApvPartnerComponent,canActivate:[AdminGuard] },
  ]},
  { path: 'finance', component:FinanceSidenavComponent,
  children:[
  { path: 'dashboard', component: FinanceDashboardComponent,canActivate:[FinanceGuard] },
  { path: 'payment', component: FinancePaymentComponent,canActivate:[FinanceGuard] },
  { path: 'payment/:id', component: FinanceEachPaymentComponent,canActivate:[FinanceGuard] },
  { path: 'workorder', component: FinanceApvWorkorderComponent ,canActivate:[FinanceGuard]},
  { path: 'workorder/:id', component: FinanceEachWorkorderComponent,canActivate:[FinanceGuard] },
  ]},
  {path: 'partner', component:PartnerSidenavComponent,
  children:[
  { path: 'dashboard', component: PartnerDashboardComponent ,canActivate:[PartnerGuard]},
  { path: 'profile', component: PartnerProfileComponent,canActivate:[PartnerGuard] },
  { path: 'workorder', component: PartnerWorkorderComponent,canActivate:[PartnerGuard] },
  { path: 'workorder/:id', component: PartnerEachWorkorderComponent ,canActivate:[PartnerGuard]},
  { path: 'invoice', component: PartnerInvoiceComponent,canActivate:[PartnerGuard] },
  { path: 'statusinvoice', component:PartnerInvoiceStatusComponent ,canActivate:[PartnerGuard] },
  { path: 'profile/edit', component: PartnerEditProfileComponent,canActivate:[PartnerGuard] },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
