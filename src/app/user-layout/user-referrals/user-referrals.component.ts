import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../auth/user-auth.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-user-referrals',
  templateUrl: './user-referrals.component.html',
  styleUrls: ['./user-referrals.component.css']
})
export class UserReferralsComponent implements OnInit {

  user: any = {};
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth:  UserAuthService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.auth.getUsersId(params['id']).then(res => {
        this.user = res;
        console.log('this.user',this.user.message.referral);
  })

});
  }

}
