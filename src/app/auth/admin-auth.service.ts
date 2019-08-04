import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  id: any;

   // set backend server url instance
  //  apiServer = 'http://localhost:4000';
  apiServer ="https://infinitelight-api.herokuapp.com";

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

//delete all users
deleteOrder(id) {
  return this.httpClient.delete(`${this.apiServer}/transaction/transactions/${id}`).toPromise();
}

//store disco
disco(state,disco) {
  const obj = {
    state: state,
    disco: disco,
  };
  return this.httpClient.post(`${this.apiServer}/disco/discos`, obj);
      
}

//fetch all disco
getDisco(){
  return this.httpClient.get(`${this.apiServer}/disco/discos`);
}

//delete individual disco
deleteDiisco(id){
  return this.httpClient.delete(`${this.apiServer}/disco/discos/${id}`)
}

//delete individual disco
deleteContact(id){
  return this.httpClient.delete(`${this.apiServer}/contact/contacts/${id}`)
}

}


