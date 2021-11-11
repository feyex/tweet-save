import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './account/tweet/tweet.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ListTweetComponent } from './account/list-tweet/list-tweet.component';
import { BibleTweetComponent } from './account/bible-tweet/bible-tweet.component';




const routes: Routes = [
{ path: '', component: SignupComponent },
{ path: 'tweet', component: ListTweetComponent },
{ path: 'bible-tweet', component: BibleTweetComponent },


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
