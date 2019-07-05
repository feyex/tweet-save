import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { UserAuthService } from '../../auth/user-auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminlayout',
  templateUrl: './adminlayout.component.html',
  styleUrls: ['./adminlayout.component.css']
})
export class AdminlayoutComponent implements OnInit {

  constructor(private auth: UserAuthService,
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
  }

  logout(){
    this.auth.logout();
    this.router.navigate([''])
  }

}
