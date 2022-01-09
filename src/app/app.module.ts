import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatInputModule, MatButtonModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ToastrModule } from 'ngx-toastr';
import { Angular4PaystackModule } from 'angular4-paystack';
import { NgxPrintModule } from 'ngx-print';
import { HighchartsChartModule } from 'highcharts-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './account/tweet/tweet.component';
import {AuthGuard} from './auth/auth.guard';
import {UserAuthService} from './auth/user-auth.service';
import { BillService } from './transactions/bill.service';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListTweetComponent } from './account/list-tweet/list-tweet.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { BibleTweetComponent } from './account/bible-tweet/bible-tweet.component';
import { CalcSentimentComponent } from './account/calc-sentiment/calc-sentiment.component';
import { ViewSentimentComponent } from './account/view-sentiment/view-sentiment.component';


export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    PagenotfoundComponent,
    ListTweetComponent,
    BibleTweetComponent,
    CalcSentimentComponent,
    ViewSentimentComponent,

  ],
  imports: [
  HighchartsChartModule,
  BrowserModule,
  AppRoutingModule,
  FormsModule,
  ReactiveFormsModule,
  HttpClientModule,
  BrowserAnimationsModule,
  MatStepperModule, MatInputModule, MatButtonModule,
  MatFormFieldModule,
  ToastrModule.forRoot(),
  Angular4PaystackModule,
  NgxPrintModule,
  NgxPaginationModule,
  JwtModule.forRoot ({
    config: {
      tokenGetter,
      whitelistedDomains: ['localhost:4000/dashboard'],
      blacklistedRoutes: ['localhost:4000/api/login']
    }
  })
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [AuthGuard, UserAuthService, BillService,
    {provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
