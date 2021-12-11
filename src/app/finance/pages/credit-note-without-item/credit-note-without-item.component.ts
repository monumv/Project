import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  erp:string;
  status: string;
  code: string;
  date: string;
  uom: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, date: '21-Aug-2020',   erp:'177', status: 'Manish Kumar', code:'0.', uom:'0'},
{position: 2, date: '21-Aug-2020',   erp:'177', status: 'Manish Kumar', code:'0.', uom:'0'},
{position: 3, date: '21-Aug-2020',   erp:'177', status: 'Manish Kumar', code:'0.', uom:'0'},
{position: 4, date: '21-Aug-2020',   erp:'177', status: 'Manish Kumar', code:'0.', uom:'0'},
{position: 5, date: '21-Aug-2020',   erp:'177', status: 'Manish Kumar', code:'0.', uom:'0'},
{position: 6, date: '21-Aug-2020',   erp:'177', status: 'Manish Kumar', code:'0.', uom:'0'},
{position: 7, date: '21-Aug-2020',   erp:'177', status: 'Manish Kumar', code:'0.', uom:'0'},
{position: 8, date: '21-Aug-2020',   erp:'177', status: 'Manish Kumar', code:'0.', uom:'0'},
{position: 9, date: '21-Aug-2020',   erp:'177', status: 'Manish Kumar', code:'0.', uom:'0'},
{position: 10, date: '21-Aug-2020',   erp:'177', status: 'Manish Kumar', code:'0.', uom:'0'},

 ];
@Component({
  selector: 'app-credit-note-without-item',
  templateUrl: './credit-note-without-item.component.html',
  styleUrls: ['./credit-note-without-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CreditNoteWithoutItemComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'date', 'erp', 'status',
   'code', 'uom'];

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


