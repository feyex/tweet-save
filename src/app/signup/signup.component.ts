import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from './../../../auth/user';
import { UserAuthService } from './../../../auth/user-auth.service';
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
      fullName: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
    console.log('formdetails', this.signupForm);
  }

  signup(form) {
    // if (this.signupForm.valid) {
    //   console.log('I am clicked', this.signupForm.value);
    //   // this.signupForm.reset();
    //   return this.router.navigate(['/login']);
    // }
    this.authService.signup(form.value).subscribe((res) => {
      console.log('Signed up!....>>');
      return this.router.navigate(['/login']);
    });
  }

}
