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
import {NgxPaginationModule} from 'ngx-pagination';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminhistoryComponent } from './adminhistory/adminhistory.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { ReferralsComponent } from './referrals/referrals.component';
import { FeedsComponent } from './feeds/feeds.component';
import { AddDiscoComponent } from './add-disco/add-disco.component';
import { SupportComponent } from './support/support.component';
import { SupportdashboardComponent } from './supportdashboard/supportdashboard.component';
import { IssueformComponent } from './issueform/issueform.component';
import {RoleGuardGuard as RoleGuard} from '../auth/role-guard.guard';
import {AdminAuthService} from '../auth/admin-auth.service';
import { SearchPipe } from './admindashboard/search.pipe'

@NgModule({
  declarations: [AdminlayoutComponent, AdmindashboardComponent, OrdersComponent, PaymentComponent,
                 AdminhistoryComponent, UserManagementComponent, ReferralsComponent, FeedsComponent,
                 AddDiscoComponent, SupportComponent, SupportdashboardComponent, IssueformComponent, SearchPipe],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatStepperModule, MatInputModule, MatButtonModule,
    MatFormFieldModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
    AdminRoutingModule
  ],
 
  providers: [RoleGuard, AdminAuthService],
})
export class AdminModule { }
