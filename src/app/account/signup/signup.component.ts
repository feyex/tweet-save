import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../../auth/user';
import { UserAuthService } from '../../auth/user-auth.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private authService: UserAuthService) {
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      fullname: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password_confirmation: ['', [Validators.required, Validators.minLength(8)]]
    });
    console.log('formdetails', this.signupForm);
  }

  signup() {
    const email = this.signupForm.value.email;
    const firstname = this.signupForm.value.fullname;
    const phone = this.signupForm.value.phone;
    const password= this.signupForm.value.password;
    const password_confirmation= this.signupForm.value.password_confirmation;
    console.log('mmm', email,firstname,phone,password,password_confirmation)
    this.authService.signin( email,firstname,phone,password,password_confirmation).subscribe((res) => {
      var json: any = res;
      // this.loading = false;
      console.log('res',res)
      console.log('Signed up!....>>');
      return this.router.navigate(['/login']);
    });
  }

}


