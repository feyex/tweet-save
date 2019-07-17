import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { JwtResponse } from './jwt-response';
import { tap, map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  id: any;

  constructor(private httpClient: HttpClient) { }
  // set backend server url instance
  // apiServer = 'http://localhost:4000';
  apiServer ="https://infinitelight-api.herokuapp.com"

  // assume the API uses Jwtoken to authenticate user access
  authSubject = new BehaviorSubject(false);

  // signup user
  signin(email, firstname, lastname, phoneNumber, password, referral) {
    const obj = {
      firstname,
      lastname,
      password,
      email,
      phoneNumber,
      referral
    };
    return this.httpClient.post(`${this.apiServer}/api/users`, obj);

  }


  // log user in
  login(email, password) {
    const msg = {
      email,
      password
    };
    return this.httpClient.post<any>(`${this.apiServer}/api/login`, msg)
      .pipe(
        map(result => {

          if (result) {
            localStorage.setItem('access_token', result.token );
            localStorage.setItem('userid', result.id );
          }
          return result;
        })
      );
  }

  // log user out
  logout() {
    localStorage.removeItem('access_token');
  }

  // check if user is logged in
  public get loggedIn(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

  // send report message to admin
  contact(fullname, email, phoneNumber, message) {
    const obj = {
      fullname,
      email,
      phoneNumber,
      message,

    };

    return this.httpClient.post(`${this.apiServer}/contact/contacts`, obj);

  }

  // fetch all users
  getUsers() {

    return this.httpClient.get(`${this.apiServer}/api/users`).toPromise();

  }

   // to fetch each Users data by Id
   getUsersId(id) {
    this.id = localStorage.userid;
    return this
            .httpClient
            .get(this.apiServer + `/api/users/` + this.id).toPromise();
    }


    // update user info in db
    updateUser(firstname, lastname, email, phoneNumber) {
      const obj = {
        firstname,
        lastname,
        email,
        phoneNumber,

      };
      this.id = localStorage.userid;
      return this
            .httpClient
            .put(this.apiServer + `/api/users/` + this.id , obj);
    }

     // to fetch each Users data by user_Id
   gettransactionId(id: string) {
    this.id = localStorage.userid;
    console.log(this.id);
    return this
            .httpClient
            .get<any[]>(this.apiServer + `/transaction/transact/` + this.id).pipe(map(data => data));
    }


     // to fetch each Users data by Id
   gettransaction(id: string) {
    this.id = localStorage.userid;
    return this
            .httpClient
            .get(this.apiServer + `/transaction/transactions/` + this.id);
    }



    // confirm password exist in db
    checkpwdexist(password: string) {
      const pwd = {
        password
      };
      this.id = localStorage.userid;
      return this
                .httpClient
                .post(this.apiServer + `/api/password/` + this.id, pwd);
    }

    // update password in db
    updatepwd(password) {
      const pwd = {
        password
      };
      this.id = localStorage.userid;
      return this
                .httpClient
                .put(this.apiServer + `/api/password/` + this.id, pwd);
    }

}
