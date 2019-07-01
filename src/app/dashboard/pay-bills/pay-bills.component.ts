import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAuthService } from '../../auth/user-auth.service';



@Component({
  selector: 'app-pay-bills',
  templateUrl: './pay-bills.component.html',
  styleUrls: ['./pay-bills.component.css']
})
export class PayBillsComponent implements OnInit {
  user: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth:  UserAuthService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.auth.gettransaction(params['id'])
        .subscribe(res =>{
          this.user = res;
          console.log('users',this.user.meter_number)
        })
    })
  }

}

