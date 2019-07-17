import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdminAuthService } from '../../auth/admin-auth.service';
import {NgForm} from '@angular/forms';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.css']
})
export class UserManagementComponent implements OnInit {

  user = {
    firstname: "",
    lastname: "",
    email: "",
    staffid: "",
    role:"",
    newpassword:"",
    confirmpassword:""
  }

    firstname:string;
    lastname:string;
    email:string;
    staffid:string;
    role:string;
    newpassword:string;
    confirmpassword:string;
    match: string;
    userform = false;
    result: any;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth:  AdminAuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.auth.getRole()
      .then((res:any)=>{
        this.result = res;
        console.log('role',this.result)
      })
  }

  cancel(){
    this.user.firstname = "";
    this.user.lastname = "";
    this.user.email = "";
    this.user.staffid = "";
    this.user.role = "";
    this.user.newpassword = "";
    this.user.confirmpassword = "";
  }

  public onChange(){
 
    const newpassword = this.user.newpassword;
    const confirmpassword = this.user.confirmpassword;

    if (newpassword!=''&& newpassword == confirmpassword){
      this.match = "Password match ";
        this.userform = true;
      
    }
    else{
      this.match = "Password does not match ";
      this.userform = false;
    }
  }

  signup() {
    const email = this.user.email;
    const firstname = this.user.firstname;
    const lastname = this.user.lastname;
    const staffid = this.user.staffid;
    const newpassword= this.user.newpassword;
    const role= this.user.role;
    
    console.log('user', email,firstname,staffid,newpassword,lastname,role)
    this.auth.signin( email,firstname,lastname,newpassword,role).subscribe((res:any) => {
      console.log(res);
      if(res.status == true){
        this.toastr.success("User Registered Successfully.", "Signup", {
          timeOut: 4000,
          positionClass: 'toast-top-center'
        });
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

roles = [
  {role:'admin', name:'admin'},
  {role:'disco', name:'disco'},
  {role:'maximpact', name:'maximpact'}
]

onselect(){
  console.log(this.user.role)
}
  

}
