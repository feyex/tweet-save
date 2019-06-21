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

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [{ path: '', component: HomeComponent},
{ path: 'signup', component: SignupComponent},
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent},
{ path: 'manage-wallet', component: ManageWalletComponent },
{ path: 'pay-bills', component: PayBillsComponent },
{ path: 'profile', component: ProfileComponent },
{ path: 'change-password', component: ChangePasswordComponent },
{ path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],





exports: [RouterModule]
})
export class AppRoutingModule { }
