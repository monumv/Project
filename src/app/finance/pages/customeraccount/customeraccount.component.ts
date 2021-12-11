import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';

import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface PeriodicElement {
  position: number;
  date:string;
  pack: string;
  status: string;
  alias: string;
  demo: string;
  demos: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, date:'25-July-2020', demo:'', status: 'Mohit Test Customer (653)', demos:'', alias:'Mohit Test', pack: 'Customer', icon: 'chevron_right'}, 
{position: 2, date:'25-July-2020', demo:'', status: 'Mohit Test Customer (653)', demos:'', alias:'Mohit Test', pack: 'Customer', icon: 'chevron_right'}, 
{position: 3, date:'25-July-2020', demo:'', status: 'Mohit Test Customer (653)', demos:'', alias:'Mohit Test', pack: 'Customer', icon: 'chevron_right'}, 
{position: 4, date:'25-July-2020', demo:'', status: 'Mohit Test Customer (653)', demos:'', alias:'Mohit Test', pack: 'Customer', icon: 'chevron_right'}, 
{position: 5, date:'25-July-2020', demo:'', status: 'Mohit Test Customer (653)', demos:'', alias:'Mohit Test', pack: 'Customer', icon: 'chevron_right'}, 
{position: 6, date:'25-July-2020', demo:'', status: 'Mohit Test Customer (653)', demos:'', alias:'Mohit Test', pack: 'Customer', icon: 'chevron_right'}, 
{position: 7, date:'25-July-2020', demo:'', status: 'Mohit Test Customer (653)', demos:'', alias:'Mohit Test', pack: 'Customer', icon: 'chevron_right'}, 
{position: 8, date:'25-July-2020', demo:'', status: 'Mohit Test Customer (653)', demos:'', alias:'Mohit Test', pack: 'Customer', icon: 'chevron_right'}, 
{position: 9, date:'25-July-2020', demo:'', status: 'Mohit Test Customer (653)', demos:'', alias:'Mohit Test', pack: 'Customer', icon: 'chevron_right'}, 
{position: 10, date:'25-July-2020', demo:'', status: 'Mohit Test Customer (653)', demos:'', alias:'Mohit Test', pack: 'Customer', icon: 'chevron_right'}, 
{position: 11, date:'25-July-2020', demo:'', status: 'Mohit Test Customer (653)', demos:'', alias:'Mohit Test', pack: 'Customer', icon: 'chevron_right'}, 
{position: 12, date:'25-July-2020', demo:'', status: 'Mohit Test Customer (653)', demos:'', alias:'Mohit Test', pack: 'Customer', icon: 'chevron_right'}, 
{position: 13, date:'25-July-2020', demo:'', status: 'Mohit Test Customer (653)', demos:'', alias:'Mohit Test', pack: 'Customer', icon: 'chevron_right'}, 
{position: 14, date:'25-July-2020', demo:'', status: 'Mohit Test Customer (653)', demos:'', alias:'Mohit Test', pack: 'Customer', icon: 'chevron_right'}, 
{position: 15, date:'25-July-2020', demo:'', status: 'Mohit Test Customer (653)', demos:'', alias:'Mohit Test', pack: 'Customer', icon: 'chevron_right'}, 
{position: 16, date:'25-July-2020', demo:'', status: 'Mohit Test Customer (653)', demos:'', alias:'Mohit Test', pack: 'Customer', icon: 'chevron_right'}, 
{position: 17, date:'25-July-2020', demo:'', status: 'Mohit Test Customer (653)', demos:'', alias:'Mohit Test', pack: 'Customer', icon: 'chevron_right'}, 


 ];



interface Number {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-customeraccount',
  templateUrl: './customeraccount.component.html',
  styleUrls: ['./customeraccount.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class CustomeraccountComponent implements OnInit {

  
  displayedColumns: string[] = ['select', 'position', 'date', 'demo', 'status', 'demos', 'alias', 'pack', 'icon'];
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


constructor(public dialog: MatDialog) {}

 openDialog(type: string) {
    var width = "";

    const dialogRef = this.dialog.open(DialogComponent, {
      width: width,
      data: {
        dialogObj: {
          dialogType: type
        }
      }
    });}

}
