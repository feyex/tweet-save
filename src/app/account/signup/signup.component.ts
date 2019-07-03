import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../../auth/user';
import { UserAuthService } from '../../auth/user-auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: UserAuthService,
              private toast:ToastrService) {
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstname:  ['', Validators.required],
      lastname: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]

    });
 
  }

  signup() {
    const email = this.signupForm.value.email;
    const firstname = this.signupForm.value.firstname;
    const lastname = this.signupForm.value.lastname;
    const phoneNumber = this.signupForm.value.phoneNumber;
    const password= this.signupForm.value.password;
    
    console.log('mmm', email,firstname,phoneNumber,password,lastname)
    this.authService.signin( email,firstname,lastname,phoneNumber,password).subscribe((res:any) => {
    
      if(res.status == true){
        this.toast.success("User Registered Successfully.", "Signup", {
          timeOut: 4000,
          positionClass: 'toast-top-center'
        });
        this.router.navigate(['/login']);
      }
      else{
        this.toast.error("Registration Failed.", "Signup Error", {
          timeOut: 4000,
          positionClass: 'toast-top-center'
        });
      
      }
     
    }
    
    );
  }

}


