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
import {AuthGuard} from './auth/auth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [{ path: '', component: HomeComponent},
{ path: 'signup', component: SignupComponent},
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
{ path: 'manage-wallet', component: ManageWalletComponent,canActivate:[AuthGuard] },
{ path: 'pay-bills', component: PayBillsComponent },
{ path: 'pay-bills/:id', component: PayBillsComponent },
{ path: 'profile', component: ProfileComponent,canActivate:[AuthGuard] },
{ path: 'change-password', component: ChangePasswordComponent,canActivate:[AuthGuard] },
{ path: 'help', component: HelpComponent,canActivate:[AuthGuard] },
{ path: 'history', component: HistoryComponent,canActivate:[AuthGuard] },
{ path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],





exports: [RouterModule]
})
export class AppRoutingModule { }
