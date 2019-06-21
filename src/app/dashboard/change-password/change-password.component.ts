import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
pwdChange: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.pwdChange = this.fb.group({
      currentPasswd: [''],
      newPasswd: ['']
    });
  }

  passwordChange() {
    console.log('I process change password', this.pwdChange);
  }

}
