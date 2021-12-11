import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';



export interface PeriodicElement {
  position: number;
  id: string;
  date: string;
  document: string;
  demoo: string;
  complaint: string;
  demo: string;
  name:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, id:'5f8191f80b1678bd90bfcf4b', date:'2564', document:'Rahul Singh (223)',  demoo:'callback', complaint:'10-Oct-2020', demo:'18:20',
name:'call bck for demo'},
{position: 2, id:'5f8191f80b1678bd90bfcf4b', date:'2564', document:'Rahul Singh (223)',  demoo:'callback', complaint:'10-Oct-2020', demo:'18:20',
name:'call bck for demo'},
{position: 3, id:'5f8191f80b1678bd90bfcf4b', date:'2564', document:'Rahul Singh (223)',  demoo:'callback', complaint:'10-Oct-2020', demo:'18:20',
name:'call bck for demo'},
{position: 4, id:'5f8191f80b1678bd90bfcf4b', date:'2564', document:'Rahul Singh (223)',  demoo:'callback', complaint:'10-Oct-2020', demo:'18:20',
name:'call bck for demo'},
{position: 5, id:'5f8191f80b1678bd90bfcf4b', date:'2564', document:'Rahul Singh (223)',  demoo:'callback', complaint:'10-Oct-2020', demo:'18:20',
name:'call bck for demo'},
{position: 6, id:'5f8191f80b1678bd90bfcf4b', date:'2564', document:'Rahul Singh (223)',  demoo:'callback', complaint:'10-Oct-2020', demo:'18:20',
name:'call bck for demo'},
{position: 7, id:'5f8191f80b1678bd90bfcf4b', date:'2564', document:'Rahul Singh (223)',  demoo:'callback', complaint:'10-Oct-2020', demo:'18:20',
name:'call bck for demo'},
{position: 8, id:'5f8191f80b1678bd90bfcf4b', date:'2564', document:'Rahul Singh (223)',  demoo:'callback', complaint:'10-Oct-2020', demo:'18:20',
name:'call bck for demo'},
{position: 9, id:'5f8191f80b1678bd90bfcf4b', date:'2564', document:'Rahul Singh (223)',  demoo:'callback', complaint:'10-Oct-2020', demo:'18:20',
name:'call bck for demo'},
{position: 10, id:'5f8191f80b1678bd90bfcf4b', date:'2564', document:'Rahul Singh (223)',  demoo:'callback', complaint:'10-Oct-2020', demo:'18:20',
name:'call bck for demo'},
 ];
@Component({
  selector: 'app-crmreminders',
  templateUrl: './crmreminders.component.html',
  styleUrls: ['./crmreminders.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CrmremindersComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'id', 'date', 'document', 'demoo', 'complaint', 'demo', 'name'];
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


}
