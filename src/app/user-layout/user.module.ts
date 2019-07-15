import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
import { Angular4PaystackModule } from 'angular4-paystack';

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
import { AuthGuard } from '../auth/auth.guard';
import { UserAuthService } from '../auth/user-auth.service';
import { BillService } from '../transactions/bill.service';
import { ReceiptComponent } from './receipt/receipt.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';

@NgModule({
  declarations: [UserLayoutComponent, DashboardComponent, ManageWalletComponent,
                PayBillsComponent, ProfileComponent, ChangePasswordComponent, HelpComponent,
                HistoryComponent, UserReferralsComponent, ReceiptComponent, PrintLayoutComponent ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatStepperModule, MatInputModule, MatButtonModule,
    MatFormFieldModule,
    ToastrModule.forRoot(),
    Angular4PaystackModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [AuthGuard, UserAuthService, BillService,
    {provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: false}}],
})
export class UserModule { }
