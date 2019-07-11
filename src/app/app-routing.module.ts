import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './account/signup/signup.component';
import { LoginComponent } from './account/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ManageWalletComponent } from './dashboard/manage-wallet/manage-wallet.component';
import { PayBillsComponent } from './dashboard/pay-bills/pay-bills.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ChangePasswordComponent } from './dashboard/change-password/change-password.component';
import { HelpComponent } from './dashboard/help/help.component';
import { HistoryComponent } from './dashboard/history/history.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

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
import { UserReferralsComponent } from './dashboard/user-referrals/user-referrals.component';
import { SupportdashboardComponent } from './admin/supportdashboard/supportdashboard.component';
import { IssueformComponent } from './admin/issueform/issueform.component';
import { OtpComponent } from './dashboard/otp/otp.component';




const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'login', component: LoginComponent },
{
  path: 'user', component: UserLayoutComponent,
  children: [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'manage_wallet', component: ManageWalletComponent },
    { path: 'pay_bills', component: PayBillsComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'change-password', component: ChangePasswordComponent },
    { path: 'help', component: HelpComponent },
    { path: 'history', component: HistoryComponent },
    { path: 'referrals', component: UserReferralsComponent },
    { path: 'otp', component: OtpComponent },
  ]
},
{
  path: 'admin', component: AdminlayoutComponent,
  children: [
    { path: 'dashboard', component: AdmindashboardComponent },
    { path: 'orders', component: OrdersComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'history', component: AdminhistoryComponent },
    { path: 'user_management', component: UserManagementComponent },
    { path: 'referrals', component: ReferralsComponent },
    { path: 'feeds', component: FeedsComponent },
    { path: 'add_disco', component: AddDiscoComponent },
    { path: 'support', component: SupportComponent },
    { path: 'support_dashboard', component: SupportdashboardComponent },
    { path: 'issue_form', component: IssueformComponent },

  ]
},
{ path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],





  exports: [RouterModule]
})
export class AppRoutingModule { }
