import { Component, OnInit, ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-proforma-invoice',
  templateUrl: './proforma-invoice.component.html',
  styleUrls: ['./proforma-invoice.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProformaInvoiceComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

printComponent(cmpName) {
   let printContents = document.getElementById(cmpName).innerHTML;
   let originalContents = document.body.innerHTML;

   document.body.innerHTML = printContents;

  window.print();

  document.body.innerHTML = originalContents;
}

sendDataToEmail(divName){
let printContents = document.getElementById(divName).innerHTML;
 }

}
