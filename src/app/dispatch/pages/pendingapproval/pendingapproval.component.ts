import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  date:string;
  vchr: string;
  erp:string;
  status: string;
  demo:string;
  by: string;
  qty:string;
  amt: string;
  type:string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, date:'31-Aug-2020', vchr:'Lorem', erp:'645',  status: 'Geeta Infotech', demo:'',
by:'Ram Infotech', qty:'10', amt: '10,000', type:'Lorem',  icon: 'EA'},

 ];



@Component({
  selector: 'app-pendingapproval',
  templateUrl: './pendingapproval.component.html',
  styleUrls: ['./pendingapproval.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PendingapprovalComponent implements OnInit {

  
  displayedColumns: string[] = ['select', 'position', 'date', 'vchr',
  'erp', 'status', 'demo', 'by', 'qty', 'amt', 'type', 'icon'];

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
