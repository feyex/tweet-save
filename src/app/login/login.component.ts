import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserAuthService } from '../../../auth/user-auth.service';
import { User } from './../../../auth/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private lf: FormBuilder,
              private authService: UserAuthService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.lf.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(form) {
    console.log('I process login form', this.loginForm);
    this.authService.login(form.value).subscribe((res) => {
      console.log('Logged in! ...yaay!!!');
      this.router.navigate(['/']);
    });
  }
}
