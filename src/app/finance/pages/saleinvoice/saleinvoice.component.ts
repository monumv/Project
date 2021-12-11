import { Component, OnInit } from '@angular/core';



export interface PeriodicElement {
  name: string;
   position: number;
   code: string;
   qty: string;
   unit: string;
   cost: string;
   mrp: string;
   warranty: string;
   claim: string;
   amt: string;
 
 }
 
 const ELEMENT_DATA: PeriodicElement[] = [
   {position: 1, code:'74854', name: 'Item Name 1', qty: '10 EA', unit: '28', cost: '18%', warranty: '5:00 Ltr.', claim: '1 EA', mrp: '28', amt: '1500'},
   {position: 2, code:'74854', name: 'Item Name 2', qty: '10 EA', unit: '28', cost: '18%', warranty: '5:00 Ltr.', claim: '1 EA', mrp: '28', amt: '1500'},
   {position: 3, code:'74854', name: 'Item Name 3', qty: '10 EA', unit: '28', cost: '18%', warranty: '5:00 Ltr.', claim: '1 EA', mrp: '28', amt: '1500'},
   {position: 4, code:'74854', name: 'Item Name 4', qty: '10 EA', unit: '28', cost: '18%', warranty: '5:00 Ltr.', claim: '1 EA', mrp: '28', amt: '1500'},
   {position: 5, code:'74854', name: 'Item Name 5', qty: '10 EA', unit: '28', cost: '18%', warranty: '5:00 Ltr.', claim: '1 EA', mrp: '28', amt: '1500'},
 ];

@Component({
  selector: 'app-saleinvoice',
  templateUrl: './saleinvoice.component.html',
  styleUrls: ['./saleinvoice.component.css']
})
export class SaleinvoiceComponent implements OnInit {

displayedColumns: string[] = ['position','code', 'name', 'warranty', 'claim', 'mrp', 'qty', 'unit', 'cost', 'amt'];
datas = ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {
  }

}
