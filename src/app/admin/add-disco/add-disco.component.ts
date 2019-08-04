import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminAuthService } from '../../auth/admin-auth.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-add-disco',
  templateUrl: './add-disco.component.html',
  styleUrls: ['./add-disco.component.css']
})
export class AddDiscoComponent implements OnInit {
  
  user = {
    state: "",
    disco: ""
  }
  regdisco: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth:  AdminAuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    
    // fetch all disco in the system
    this.auth.getDisco()
      .subscribe(res => {
        this.regdisco = res;
        this.regdisco = Array.of (this.regdisco);
        this.regdisco = this.regdisco[0].message;

      })
  }

  discos = [
    {disco:'Abuja disco', name:'Abuja disco'},
    {disco:'Lagos disco', name:'Lagos disco'}
  ]

  states = [
    {state:'Abuja', name:'Abuja'},
    {state:'Lagos', name:'Lagos'}
  ]

  registerdisco() {
    //STORE IN DB
    const disco= this.user.disco;
    const state= this.user.state;
    
    this.auth.disco( state,disco).subscribe((res:any) => {
      
      if(res.status == true){
        this.toastr.success("Disco Registered Successfully.", "Signup", {
          timeOut: 4000,
          positionClass: 'toast-top-center'
        });
        window.location.reload();
      }
      else{
        this.toastr.error("Registration Failed.", "Signup Error", {
          timeOut: 4000,
          positionClass: 'toast-top-center'
        });
      
      }
     
    }
    
    );
  }

  deleteDisco(id){
    this.auth.deleteDiisco(id)
    .subscribe (user => {
      this.regdisco = user;
      alert('disco deleted');
    })
    window.location.reload();
    
  }

}
