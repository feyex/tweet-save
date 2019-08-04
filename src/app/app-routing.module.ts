import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './account/signup/signup.component';
import { LoginComponent } from './account/login/login.component';
import { UserBillComponent } from './account/user-bill/user-bill.component';
import { UserReceiptComponent } from './account/user-receipt/user-receipt.component';

import { UserModule } from './user-layout/user.module';
import { UserRoutingModule } from './user-layout/user-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AdminModule } from './admin/admin.module';


import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth/auth.guard';




const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'login', component: LoginComponent },
{ path: 'user-bill',component: UserBillComponent},
{ path: 'user-receipt',component: UserReceiptComponent},

// lazy-loading applied
{ path: 'user',
loadChildren: () => import('./user-layout/user.module').then(m => m.UserModule),
canActivate: [AuthGuard] },

{ path: 'admin',
loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
// end lazy-loading
{ path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            UserRoutingModule, UserModule,
            AdminModule,AdminRoutingModule],

  exports: [RouterModule, UserModule,
            UserRoutingModule,AdminModule,
            AdminRoutingModule]
})
export class AppRoutingModule { }
