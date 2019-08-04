import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UserAuthService } from '../../auth/user-auth.service';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.css']
})
export class AdminlayoutComponent implements OnInit {
  user: any = {};
  constructor(private auth: UserAuthService,
              private route: ActivatedRoute,
              private router: Router) { }

  
  ngOnInit() {
    $(document).ready(function () {

      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $('#content').toggleClass('active');
          $('#adNav').toggleClass('active');
          $(this).toggleClass('active');
      });

  });

  //to get the user details of who is logged in
  this.route.params.subscribe(params => {
    this.auth.getUsersId(params['id']).then(res => {
      this.user = res;
})

});
  }

  logout(){
    this.auth.logout();
    this.router.navigate([''])
  }

}
