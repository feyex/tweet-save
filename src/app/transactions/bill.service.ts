import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BillService {


  constructor(private httpClient: HttpClient) { }
  // backend server instance
  // apiServer = 'http://localhost:4000';
  apiServer ="https://infinitelight-api.herokuapp.com";


  processPayment(bill, state, disco, meter, amount, email, ref,user_id) {
    const billData = {
      bill, state, disco, meter, amount, email, ref, user_id
    };
    return this.httpClient.post(`${this.apiServer}/transaction/transactions`, billData);
  }

  getTransData() {
    return this.httpClient.get(`${this.apiServer}/transaction/latesttransact`);
  }
}
