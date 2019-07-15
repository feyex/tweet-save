import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './account/signup/signup.component';
import { LoginComponent } from './account/login/login.component';

import { UserModule } from './user-layout/user.module';
import { UserRoutingModule } from './user-layout/user-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth/auth.guard';
import { AdmindashboardComponent } from './admin/admindashboard/admindashboard.component';
import { AdminlayoutComponent } from './admin/adminlayout/adminlayout.component';
import { OrdersComponent } from './admin/orders/orders.component';
import { PaymentComponent } from './admin/payment/payment.component';
import { AdminhistoryComponent } from './admin/adminhistory/adminhistory.component';
import { UserManagementComponent } from './admin/user-management/user-management.component';
import { ReferralsComponent } from './admin/referrals/referrals.component';
import { FeedsComponent } from './admin/feeds/feeds.component';
import { AddDiscoComponent } from './admin/add-disco/add-disco.component';
import { SupportComponent } from './admin/support/support.component';
import { UserLayoutComponent } from './dashboard/user-layout/user-layout.component';
import { SupportdashboardComponent } from './admin/supportdashboard/supportdashboard.component';
import { IssueformComponent } from './admin/issueform/issueform.component';
import { OtpComponent } from './dashboard/otp/otp.component';




const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'login', component: LoginComponent },

// lazy-loading applied
{ path: 'user',
loadChildren: () => import('./user-layout/user.module').then(m => m.UserModule),
canActivate: [AuthGuard] },

{ path: 'admin',
loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
// end lazy-loading
{ path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            UserRoutingModule, UserModule],

  exports: [RouterModule, UserModule, UserRoutingModule]
})
export class AppRoutingModule { }
