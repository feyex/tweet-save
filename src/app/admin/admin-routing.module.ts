import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path: 'admin', component: AdminlayoutComponent,
      children: [
            { path: 'dashboard',
            component: AdmindashboardComponent ,
            // canActivate: [RoleGuard],
            // data: {
            //   expectedRole: 'admin'
            // }
          },
            { path: 'orders', component: OrdersComponent },
            { path: 'payment', component: PaymentComponent },
            { path: 'history', component: AdminhistoryComponent },
            { path: 'user_management', component: UserManagementComponent },
            { path: 'referrals', component: ReferralsComponent },
            { path: 'feeds', component: FeedsComponent },
            { path: 'add_disco', component: AddDiscoComponent },
            { path: 'support', component: SupportComponent },
            { path: 'support_dashboard', component: SupportdashboardComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
