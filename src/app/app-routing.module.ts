import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './account/signup/signup.component';
import { LoginComponent } from './account/login/login.component';

import { UserModule } from './user-layout/user.module';
import { UserRoutingModule } from './user-layout/user-routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth/auth.guard';




const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'signup', component: SignupComponent },
{ path: 'login', component: LoginComponent },

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
            UserRoutingModule, UserModule],

  exports: [RouterModule, UserModule, UserRoutingModule]
})
export class AppRoutingModule { }
