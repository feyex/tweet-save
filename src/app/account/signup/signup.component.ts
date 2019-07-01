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
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]

    });
 
  }

  signup() {
    const email = this.signupForm.value.email;
    const firstname = this.signupForm.value.firstname;
    const lastname = this.signupForm.value.lastname;
    const phone = this.signupForm.value.phone;
    const password= this.signupForm.value.password;
    
    console.log('mmm', email,firstname,phone,password,lastname)
    this.authService.signin( email,firstname,lastname,phone,password).subscribe((res) => {
      var json: any = res;
      if(res){
        return this.router.navigate(['/login']);
      }
      else{
        this.toast.error("Please check details.", "Signup Error", {
          timeOut: 4000,
          positionClass: 'toast-top-center'
        });
      
      }
     
    }
    
    );
  }

}


