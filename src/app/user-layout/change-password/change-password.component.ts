import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserAuthService } from '../../auth/user-auth.service';
import {NgForm} from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  changepwd = {
    currentpass: "",
    newpassword: "",
    confirmpassword:""
  }

  currentpass: string;
  newpassword: string;
  confirmpassword:string;
  match :string;
  pwdChange = false;
  newpwdChange = false;
  confpwdChange = false;
  curntpwdChange = true;
  user: Object;
  pwdexist: string;

  constructor( private route: ActivatedRoute,
    private router: Router,
    private auth:  UserAuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    
  }

  public cancel(){
    this.changepwd.currentpass = "";
    this.changepwd.newpassword ="";
    this.changepwd.confirmpassword="";
  }

  checkpwdexist(){
    this.auth.checkpwdexist(this.changepwd.currentpass) 
      .subscribe((res:any) =>{
        this.user = res;
        console.log('user',res);
        if (res.status == true){
          this.pwdexist = "password correct";
          this.newpwdChange = true;
          this.confpwdChange = true;
          this.pwdChange=false;
          this.curntpwdChange=false;

        }
        else{
          this.pwdexist = "incorrect password";
          this.newpwdChange = false;
          this.confpwdChange = false;
          this.pwdChange=false;
        }
      })

  }

  public onChange(){
    const currentpass = this.changepwd.currentpass;
    const newpassword = this.changepwd.newpassword;
    const confirmpassword = this.changepwd.confirmpassword
    if (newpassword!=''&& newpassword == confirmpassword){
      this.match = "Password match ";
        this.pwdChange=true;
      
    }
    else{
      this.match = "Password does not match ";
      this.pwdChange=false;
    }
  }

  passwordChange() {
    const newpassword = this.changepwd.newpassword;
    const confirmpassword = this.changepwd.confirmpassword
      this.auth.updatepwd(newpassword)
        .subscribe((res:any)=>{
          console.log('user',res);
          if(res.status==true){
            this.toastr.success("Password Updated Successfully.", "Profile", {
              timeOut: 4000,
              positionClass: 'toast-top-center'
            });
            this.changepwd.currentpass = "";
            this.changepwd.newpassword =" ";
            this.changepwd.confirmpassword="";
          }
          else{
            this.toastr.error("Password Update Failed.", "Profile", {
              timeOut: 4000,
              positionClass: 'toast-top-center'
            });
          }
        })
      }
   
   
  }


