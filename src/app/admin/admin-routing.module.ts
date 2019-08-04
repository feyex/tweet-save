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
            canActivate: [RoleGuard],
            data: {
              expectedRole: 'admin'
            }
          },
            { path: 'orders', 
              component: OrdersComponent,
              canActivate: [RoleGuard],
              data: {
                expectedRole: 'admin'
              }
            },
            { path: 'payment', 
              component: PaymentComponent,
              canActivate: [RoleGuard],
              data: {
                expectedRole: 'admin'
              }
            },
            { path: 'history',
              component: AdminhistoryComponent ,
              canActivate: [RoleGuard],
              data: {
                expectedRole: 'admin'
              }
            },
            { path: 'user_management',
              component: UserManagementComponent ,
              canActivate: [RoleGuard],
              data: {
                expectedRole: 'admin'
              }
            },
            { path: 'referrals', 
              component: ReferralsComponent ,
              canActivate: [RoleGuard],
              data: {
                expectedRole: 'admin'
              }
            },
            { path: 'feeds', 
              component: FeedsComponent ,
              canActivate: [RoleGuard],
              data: {
                expectedRole: 'admin'
              }
            },
            { path: 'add_disco', 
              component: AddDiscoComponent ,
              canActivate: [RoleGuard],
              data: {
                expectedRole: 'admin'
              }
            },
            { path: 'support', 
              component: SupportComponent ,
              canActivate: [RoleGuard],
              data: {
                expectedRole: 'admin'
              }
            },
            { path: 'support_dashboard', 
              component: SupportdashboardComponent ,
              canActivate: [RoleGuard],
              data: {
                expectedRole: 'admin'
              }
            }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
