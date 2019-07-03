import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserAuthService } from '../../auth/user-auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public error: string;

  constructor(private lf: FormBuilder,
              private auth: UserAuthService,
              private router: Router,
              private toast:ToastrService) { }

  ngOnInit() {
    
  }

  public submit() {
    console.log(this.email,this.password);
    this.auth.login(this.email, this.password)
      .pipe(first())
      .subscribe(
       
        (result:any) =>{
          if(result.status == true){
            this.router.navigate(['user/dashboard'])
          }
          else{
            this.toast.error("Incorrect Email or Password.", "Signup Error", {
              timeOut: 4000,
              positionClass: 'toast-top-center'
            });
          
          }
          
        } ,
        error => {
          this.error = 'Could not authenticate'
        }
      );
  }

 
    
}
