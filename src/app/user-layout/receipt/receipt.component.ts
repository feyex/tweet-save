import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from './../../transactions/bill.service';
import { PayBillsComponent } from '../pay-bills/pay-bills.component';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  user: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private billservice: BillService) { }

  ngOnInit() {
      this.billservice.getTransData()
      .subscribe((res: any) => {
        if (res) {
          this.user = res;
          console.log('this.transaction', this.user);
        }
  });
  }

}
