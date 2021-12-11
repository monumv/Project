import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';

import {MatMenuModule} from '@angular/material/menu';



export interface PeriodicElement {
  position: number;
  erp:string;
  status: string;
  demo: string;
  under: string;
  refund: string;
  group: string;
  solution: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, erp:'17', status: 'Aadhar No.	', under:'24', refund:'No', group:'KYC Verified (46), KYC Decline (47)', demo:'', solution:'Employee KYC',  icon: 'EA'},
{position: 2, erp:'17', status: 'Aadhar No.	', under:'24', refund:'No', group:'KYC Verified (46), KYC Decline (47)', demo:'', solution:'Employee KYC',  icon: 'EA'},
{position: 3, erp:'17', status: 'Aadhar No.	', under:'24', refund:'No', group:'KYC Verified (46), KYC Decline (47)', demo:'', solution:'Employee KYC',  icon: 'EA'},
{position: 4, erp:'17', status: 'Aadhar No.	', under:'24', refund:'No', group:'KYC Verified (46), KYC Decline (47)', demo:'', solution:'Employee KYC',  icon: 'EA'},
{position: 5, erp:'17', status: 'Aadhar No.	', under:'24', refund:'No', group:'KYC Verified (46), KYC Decline (47)', demo:'', solution:'Employee KYC',  icon: 'EA'},
{position: 6, erp:'17', status: 'Aadhar No.	', under:'24', refund:'No', group:'KYC Verified (46), KYC Decline (47)', demo:'', solution:'Employee KYC',  icon: 'EA'},
{position: 7, erp:'17', status: 'Aadhar No.	', under:'24', refund:'No', group:'KYC Verified (46), KYC Decline (47)', demo:'', solution:'Employee KYC',  icon: 'EA'},
{position: 8, erp:'17', status: 'Aadhar No.	', under:'24', refund:'No', group:'KYC Verified (46), KYC Decline (47)', demo:'', solution:'Employee KYC',  icon: 'EA'},
{position: 9, erp:'17', status: 'Aadhar No.	', under:'24', refund:'No', group:'KYC Verified (46), KYC Decline (47)', demo:'', solution:'Employee KYC',  icon: 'EA'},
{position: 10, erp:'17', status: 'Aadhar No.	', under:'24', refund:'No', group:'KYC Verified (46), KYC Decline (47)', demo:'', solution:'Employee KYC',  icon: 'EA'},


 ];
@Component({
  selector: 'app-complaintlist',
  templateUrl: './complaintlist.component.html',
  styleUrls: ['./complaintlist.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ComplaintlistComponent implements OnInit {


  displayedColumns: string[] = ['select', 'position', 'erp', 'status', 'under', 'refund', 'group', 'demo', 'solution', 'icon'];

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

  constructor() {}
  
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
