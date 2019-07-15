import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from './../../transactions/bill.service';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  user: any;
  isPrinting: boolean;

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

  onPrint() {
    console.log('hey I print your receipt ===');
    window.print();
   }

}
