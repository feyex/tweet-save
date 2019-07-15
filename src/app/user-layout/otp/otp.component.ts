import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  //   function getCodeBoxElement(index) {
  //     return document.getElementById('codeBox' + index);
  //   }
  //   function onKeyUpEvent(index, event) {
  //     const eventCode = event.which || event.keyCode;
  //     if (getCodeBoxElement(index).value.length === 1) {
  //       if (index !== 6) {
  //         getCodeBoxElement(index + 1).focus();
  //       } else {
  //         getCodeBoxElement(index).blur();
          
  //         console.log('submit code ');
  //       }
  //     }
  //     if (eventCode === 8 && index !== 1) {
  //       getCodeBoxElement(index - 1).focus();
  //     }
  //   }
  //   function onFocusEvent(index) {
  //     for (item = 1; item < index; item++) {
  //       const currentElement = getCodeBoxElement(item);
  //       if (!currentElement.value) {
  //         currentElement.focus();
  //         break;
  //       }
  //     }
  //   }
  }

}
