import { Component, OnInit, ViewEncapsulation, ViewChild, } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  vch:string;
  date:string;
  bill:string;
  qty: string;
  amt: string;
  document: string;
  icon: string;
  itmqty: string;
  unt: string;
  uqty: string;
  rm: string;
  rmq: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, date:'26-Aug-2020',  vch:'BOM11', document: 'Cow Milk 500Ml', bill:'1', qty:'1', amt:'80', itmqty:'100 ', unt:'Ltr.', uqty:'70 Ltr', rm:'60', rmq:'80', icon:'chevron_right'},
{position: 2, date:'26-Aug-2020',  vch:'BOM12', document: 'Cow Milk 500Ml', bill:'1', qty:'1', amt:'80', itmqty:'100 ', unt:'Ltr.', uqty:'70 Ltr', rm:'60', rmq:'80', icon:'chevron_right'},
{position: 3, date:'26-Aug-2020',  vch:'BOM13', document: 'Cow Milk 500Ml', bill:'1', qty:'1', amt:'80', itmqty:'100 ', unt:'Ltr.', uqty:'70 Ltr', rm:'60', rmq:'80', icon:'chevron_right'},
{position: 4, date:'26-Aug-2020',  vch:'BOM14', document: 'Cow Milk 500Ml', bill:'1', qty:'1', amt:'80', itmqty:'100 ', unt:'Ltr.', uqty:'70 Ltr', rm:'60', rmq:'80', icon:'chevron_right'},
{position: 5, date:'26-Aug-2020',  vch:'BOM15', document: 'Cow Milk 500Ml', bill:'1', qty:'1', amt:'80', itmqty:'100 ', unt:'Ltr.', uqty:'70 Ltr', rm:'60', rmq:'80', icon:'chevron_right'},

 ];

@Component({
  selector: 'app-bom',
  templateUrl: './bom.component.html',
  styleUrls: ['./bom.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BomComponent implements OnInit {


  displayedColumns: string[] = ['select', 'position', 'date', 'vch', 'document', 'bill', 'qty', 'amt', 'itmqty', 'unt', 'uqty', 'rm', 'rmq', 'icon'];
  datass = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.datass.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.datass.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  ngOnInit(): void {
  }

  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

}
