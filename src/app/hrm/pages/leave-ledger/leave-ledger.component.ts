import { Component, OnInit, ViewEncapsulation, ViewChild, } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: string;
  code: string;
  planner: string;
  casual: string;
  extra: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: '1-Apr-2021', code:'Opening', planner:'', casual:'', extra:'03',  icon:''},

 {position: '1-Apr-2021', code:'ML', planner:'02', casual:'', extra:'05',  icon:'chevron_right'},

 {position: '8-May-2021', code:'ML', planner:'03', casual:'', extra:'08',  icon:'chevron_right'},

 {position: '5-Aug-2021', code:'ML', planner:'', casual:'01', extra:'07',  icon:'chevron_right'},

 {position: '10-Dec-2021', code:'ML', planner:'', casual:'01', extra:'06',  icon:'chevron_right'},

 ];
@Component({
  selector: 'app-leave-ledger',
  templateUrl: './leave-ledger.component.html',
  styleUrls: ['./leave-ledger.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LeaveLedgerComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'code', 'planner', 'casual', 'extra', 'icon'];
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

constructor() {}

 

}
