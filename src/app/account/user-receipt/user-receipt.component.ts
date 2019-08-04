import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BillService } from './../../transactions/bill.service';

@Component({
  selector: 'app-user-receipt',
  templateUrl: './user-receipt.component.html',
  styleUrls: ['./user-receipt.component.css']
})
export class UserReceiptComponent implements OnInit {

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
