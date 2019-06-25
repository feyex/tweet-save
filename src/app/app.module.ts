import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './account/signup/signup.component';
import { LoginComponent } from './account/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ManageWalletComponent } from './dashboard/manage-wallet/manage-wallet.component';
import { PayBillsComponent } from './dashboard/pay-bills/pay-bills.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ChangePasswordComponent } from './dashboard/change-password/change-password.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HelpComponent } from './dashboard/help/help.component';
import { HistoryComponent } from './dashboard/history/history.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    ManageWalletComponent,
    PayBillsComponent,
    ProfileComponent,
    ChangePasswordComponent,
    PagenotfoundComponent,
    HelpComponent,
    HistoryComponent,
  ],
  imports: [
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
