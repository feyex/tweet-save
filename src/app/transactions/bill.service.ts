import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  isPrinting = false;
  constructor(private httpClient: HttpClient,
              private router: Router) { }
  // backend server instance
  apiServer = 'http://localhost:4000';

  processPayment(user_id,bill, state, disco, meter, amount, email, ref) {
    const billData = {
      user_id ,bill, state, disco, meter, amount, email, ref
    };
    return this.httpClient.post(`${this.apiServer}/transaction/transactions`, billData);
  }

  getTransData() {
    // const id = localStorage.getItem;
    // console.log('id', id);
    return this.httpClient.get(`${this.apiServer}/transaction/latesttransact`);
  }


  // printDocument() {

  //   // this.router.navigate(['/user',
  //   //   { outlets: {
  //   //     receipt: ['receipt']
  //   //   }}]);
  // }

  // onDataReady() {
  //   setTimeout(() => {
  //     window.print();
  //     this.isPrinting = false;
  //     // this.router.navigate([{ outlets: { receipt: null }}]);
  //   });
  // }
}
