import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  date:string;
  dm: string;
  erp: string;
  dms: string;
  status: string;
  dme: string;
  under: string;
  ds: string;
  refund: string;
  dn: string;
  group: string;
  demo: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, date:'08-Sep-2020 23:15', dm:'', erp:'5f5734fe7948b2fbe1c58e18', dms:'', status: 'Retailer Feedback (1)', dme:'', 
under:'	Test 150 (10602)', ds:'', refund:'Deepak test Employee (2522)	', dn:'', group:'2', 
demo:'', icon: 'EA'},
{position: 2, date:'08-Sep-2020 23:15', dm:'', erp:'5f5734fe7948b2fbe1c58e18', dms:'', status: 'Retailer Feedback (1)', dme:'', 
under:'	Test 150 (10602)', ds:'', refund:'Deepak test Employee (2522)	', dn:'', group:'2', 
demo:'', icon: 'EA'},
{position: 3, date:'08-Sep-2020 23:15', dm:'', erp:'5f5734fe7948b2fbe1c58e18', dms:'', status: 'Retailer Feedback (1)', dme:'', 
under:'	Test 150 (10602)', ds:'', refund:'Deepak test Employee (2522)	', dn:'', group:'2', 
demo:'', icon: 'EA'},
{position: 4, date:'08-Sep-2020 23:15', dm:'', erp:'5f5734fe7948b2fbe1c58e18', dms:'', status: 'Retailer Feedback (1)', dme:'', 
under:'	Test 150 (10602)', ds:'', refund:'Deepak test Employee (2522)	', dn:'', group:'2', 
demo:'', icon: 'EA'},
{position: 5, date:'08-Sep-2020 23:15', dm:'', erp:'5f5734fe7948b2fbe1c58e18', dms:'', status: 'Retailer Feedback (1)', dme:'', 
under:'	Test 150 (10602)', ds:'', refund:'Deepak test Employee (2522)	', dn:'', group:'2', 
demo:'', icon: 'EA'},
{position: 6, date:'08-Sep-2020 23:15', dm:'', erp:'5f5734fe7948b2fbe1c58e18', dms:'', status: 'Retailer Feedback (1)', dme:'', 
under:'	Test 150 (10602)', ds:'', refund:'Deepak test Employee (2522)	', dn:'', group:'2', 
demo:'', icon: 'EA'},
{position: 7, date:'08-Sep-2020 23:15', dm:'', erp:'5f5734fe7948b2fbe1c58e18', dms:'', status: 'Retailer Feedback (1)', dme:'', 
under:'	Test 150 (10602)', ds:'', refund:'Deepak test Employee (2522)	', dn:'', group:'2', 
demo:'', icon: 'EA'},
{position: 8, date:'08-Sep-2020 23:15', dm:'', erp:'5f5734fe7948b2fbe1c58e18', dms:'', status: 'Retailer Feedback (1)', dme:'', 
under:'	Test 150 (10602)', ds:'', refund:'Deepak test Employee (2522)	', dn:'', group:'2', 
demo:'', icon: 'EA'},
{position: 9, date:'08-Sep-2020 23:15', dm:'', erp:'5f5734fe7948b2fbe1c58e18', dms:'', status: 'Retailer Feedback (1)', dme:'', 
under:'	Test 150 (10602)', ds:'', refund:'Deepak test Employee (2522)	', dn:'', group:'2', 
demo:'', icon: 'EA'},

 ];
@Component({
  selector: 'app-formresponses',
  templateUrl: './formresponses.component.html',
  styleUrls: ['./formresponses.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormresponsesComponent implements OnInit {

 
  displayedColumns: string[] = ['select', 'position', 'date', 'dm', 'erp', 
  'dms', 'status', 'dme', 'under', 'ds', 
  'refund', 'dn', 'group', 'demo', 'icon'];

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
