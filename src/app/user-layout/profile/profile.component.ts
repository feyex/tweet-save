import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from '../../auth/user-auth.service';
import {NgForm} from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {};
  id =""
  profile = {
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: ""
  }

    firstname: string;
    lastname:string;
    email: string;
    phoneNumber:string;
    error: string;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth:  UserAuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      this.auth.getUsersId(params['id']).then(res => {
        this.user = res;
        console.log('this.user',this.user.message.firstname);
  })

});

}
cancel(){
  this.user.message.firstname ="";
  this.user.message.lastname =""
  this.user.message.phoneNumber ="";
  this.user.message.email ="";

}

public submit() {
  console.log(this.profile.firstname,this.profile.lastname,this.profile.email,this.profile.phoneNumber);
  if (this.profile.firstname,this.profile.lastname,this.profile.email,this.profile.phoneNumber){
    this.auth.updateUser(this.profile.firstname,this.profile.lastname,this.profile.email,this.profile.phoneNumber)
    .pipe(first())
    .subscribe(
     
      (result:any) =>{
        console.log('result',result);
        if(result.status == true){
          this.toastr.success("Profile Updated Successfully.", "Profile", {
            timeOut: 4000,
            positionClass: 'toast-top-center'
          });
          window.location.reload();
        }
        else{
          this.toastr.error("Update Failed.", "Profile Error", {
            timeOut: 4000,
            positionClass: 'toast-top-center'
          });
        
        }
        
      } ,
      error => {
        this.toastr.error("There seems to be an issue.", "Profile Error", {
          timeOut: 4000,
          positionClass: 'toast-top-center'
        });
      }
    );
  }
 
}

}

