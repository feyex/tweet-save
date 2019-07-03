import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../auth/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.css']
})
export class UserLayoutComponent implements OnInit {

  constructor(private auth: UserAuthService,
    private router: Router) { }


  ngOnInit() {
  }

  logout(){
    this.auth.logout();
    this.router.navigate([''])
  }
  

}
