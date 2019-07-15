import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import {RoleGuardGuard as RoleGuard} from '../auth/role-guard.guard';

@NgModule({
  declarations: [AdminlayoutComponent, AdmindashboardComponent, OrdersComponent, PaymentComponent,
                 AdminhistoryComponent, UserManagementComponent, ReferralsComponent, FeedsComponent,
                 AddDiscoComponent, SupportComponent, SupportdashboardComponent, RoleGuard],

  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
