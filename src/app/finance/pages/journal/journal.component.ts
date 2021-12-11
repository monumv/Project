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
  type: string;
  uom: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, date: '21-Aug-2020', type:'Lorem',  erp:'177', status: 'Manish Kumar', code:'0.', uom:'0', icon: 'EA'},
{position: 2, date: '21-Aug-2020', type:'Lorem',  erp:'177', status: 'Manish Kumar', code:'0.', uom:'0', icon: 'EA'},
{position: 3, date: '21-Aug-2020', type:'Lorem',  erp:'177', status: 'Manish Kumar', code:'0.', uom:'0', icon: 'EA'},
{position: 4, date: '21-Aug-2020', type:'Lorem',  erp:'177', status: 'Manish Kumar', code:'0.', uom:'0', icon: 'EA'},
{position: 5, date: '21-Aug-2020', type:'Lorem',  erp:'177', status: 'Manish Kumar', code:'0.', uom:'0', icon: 'EA'},
{position: 6, date: '21-Aug-2020', type:'Lorem',  erp:'177', status: 'Manish Kumar', code:'0.', uom:'0', icon: 'EA'},
{position: 7, date: '21-Aug-2020', type:'Lorem',  erp:'177', status: 'Manish Kumar', code:'0.', uom:'0', icon: 'EA'},
{position: 8, date: '21-Aug-2020', type:'Lorem',  erp:'177', status: 'Manish Kumar', code:'0.', uom:'0', icon: 'EA'},
{position: 9, date: '21-Aug-2020', type:'Lorem',  erp:'177', status: 'Manish Kumar', code:'0.', uom:'0', icon: 'EA'},
{position: 10, date: '21-Aug-2020', type:'Lorem',  erp:'177', status: 'Manish Kumar', code:'0.', uom:'0', icon: 'EA'},

 ];
@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class JournalComponent implements OnInit {

 
  
  displayedColumns: string[] = ['select', 'position', 'date', 'type', 'erp', 'status',
   'code', 'uom', 'icon'];

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
