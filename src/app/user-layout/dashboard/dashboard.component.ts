import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../auth/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private auth: UserAuthService,
    private router: Router) { }

  ngOnInit() {
   
  }

logout(){
  this.auth.logout();
  this.router.navigate([''])
}

 //check if user is logged in
 public get loggedIn(): boolean {
  return (localStorage.getItem('access_token') !== null);
}

}
