import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../auth/auth.guard';
import { ManageWalletComponent } from './manage-wallet/manage-wallet.component';
import { PayBillsComponent } from './pay-bills/pay-bills.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HelpComponent } from './help/help.component';
import { HistoryComponent } from './history/history.component';
import { UserReferralsComponent } from './user-referrals/user-referrals.component';

const routes: Routes = [
  {
    path: 'user', component: UserLayoutComponent,
    children: [
          { path: 'dashboard',
            component: DashboardComponent,
            canActivate: [AuthGuard],
            data: {
              expectedRole: 'user'
          }},
          { path: 'manage-wallet',
            component: ManageWalletComponent,
            canActivate: [AuthGuard],
          data: {
            expectedRole: 'user'
          }},
          { path: 'pay-bills',
            component: PayBillsComponent
           },
          { path: 'pay-bills/:id',
            component: PayBillsComponent
          },
          { path: 'profile',
            component: ProfileComponent ,
            canActivate: [AuthGuard],
            data: {
              expectedRole: 'user'
            }},
          { path: 'change-password',
              component: ChangePasswordComponent ,
              canActivate: [AuthGuard],
              data: {
              expectedRole: 'user'
          }},
          { path: 'help',
            component: HelpComponent ,
            canActivate: [AuthGuard],
            data: {
              expectedRole: 'user'
          }},
          { path: 'history',
            component: HistoryComponent ,
            canActivate: [AuthGuard],
            data: {
              expectedRole: 'user'
          }},
          { path: 'referrals',
            component: UserReferralsComponent ,
            canActivate: [AuthGuard],
            data: {
              expectedRole: 'user'
            }},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
