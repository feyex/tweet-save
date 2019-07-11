import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';

import { UserLayoutComponent } from './user-layout/user-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { AuthGuard } from '../auth/auth.guard';
import { ManageWalletComponent } from './manage-wallet/manage-wallet.component';
import { PayBillsComponent } from './pay-bills/pay-bills.component';
import { ProfileComponent } from './profile/profile.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { HelpComponent } from './help/help.component';
import { HistoryComponent } from './history/history.component';
import { UserReferralsComponent } from './user-referrals/user-referrals.component';

@NgModule({
  declarations: [UserLayoutComponent, DashboardComponent, ManageWalletComponent,
                PayBillsComponent, ProfileComponent, ChangePasswordComponent, HelpComponent,
                HistoryComponent, UserReferralsComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
