import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    
  }

  passwordChange() {
   
  }

}
