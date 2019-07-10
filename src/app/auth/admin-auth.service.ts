import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

   // set backend server url instance
   apiServer = 'http://localhost:4000';

   constructor(private httpClient: HttpClient) { }

//fetch all users
getOrders() {
   
  return this.httpClient.get(`${this.apiServer}/transaction/transactions`).toPromise()

}

//fetch all Payments
getPayments() {
   
  return this.httpClient.get(`${this.apiServer}/payment/payments`).toPromise()

}

signin(email,firstname,lastname,password,role) {
  const obj = {
    firstname: firstname,
    lastname: lastname,
    password: password,
    email: email,
    // staffid: staffid,
    role: role,
  };
  return this.httpClient.post(`${this.apiServer}/api/users`, obj);
      
}

//fetch all contacts
getContacts() {
  return this.httpClient.get(`${this.apiServer}/contact/contacts`).toPromise()
}

//fetch all roles
getRole() {
  return this.httpClient.get(`${this.apiServer}/api/admin`).toPromise();
}

}


