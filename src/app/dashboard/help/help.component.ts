import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { UserAuthService } from '../../auth/user-auth.service';


@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  public fullname: string;
  public email: string;
  public phoneNumber: Number;
  public message: string;

  constructor(private lf: FormBuilder,
    private auth: UserAuthService,
    private router: Router) { }

  ngOnInit() {
  }

  public submit() {
    console.log(this.fullname,this.email,this.phoneNumber,this.email);
    this.auth.contact(this.fullname,this.email,this.phoneNumber,this.message)
      .pipe(first())
      .subscribe(
        result => alert('submitted'),
        err => alert('something went wrong')
      );
  }


}
