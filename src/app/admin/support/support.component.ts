import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminAuthService } from '../../auth/admin-auth.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent implements OnInit {

  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AdminAuthService,) {
      
     }

  ngOnInit() {
      this.auth.getContacts()
      .then(user => {
        this.user = user;
        this.user = Array.of (this.user);
        this.user = this.user[0].message;
        console.log('this.contact',this.user);


});
 
  }

}


