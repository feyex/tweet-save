import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './account/tweet/tweet.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';




const routes: Routes = [
// { path: '', component: HomeComponent },
{ path: '', component: SignupComponent },

// end lazy-loading
{ path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            ],

  exports: [RouterModule,
            ]
})
export class AppRoutingModule { }
