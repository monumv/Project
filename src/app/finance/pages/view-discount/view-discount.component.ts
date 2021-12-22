import { Component, OnInit } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  date1:string;
  date2:string;
  active:string;
  usage:string;
  usage1:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'G14CM82RC85J', weight: '21-12-2021 11:10AM', symbol: 'geton@gmail.com', date1: '21-12-2021', date2: '25-12-2021',active : 'Active', usage: '0/200', usage1: 'Customer'},
  {position: 2, name: 'G14CM82RC85J', weight: '21-12-2021 11:10AM', symbol: 'geton@gmail.com', date1: '21-12-2021', date2: '25-12-2021',active : 'Scheduled', usage: '0/200', usage1: 'Retailer'},
  {position: 3, name: 'G14CM82RC85J', weight: '21-12-2021 11:10AM', symbol: 'geton@gmail.com', date1: '21-12-2021', date2: '25-12-2021',active : 'Expired', usage: '0/200', usage1: 'Distributor'},

  {position: 4, name: 'G14CM82RC85J', weight: '21-12-2021 11:10AM', symbol: 'geton@gmail.com', date1: '21-12-2021', date2: '25-12-2021',active : 'Active', usage: '0/200', usage1: 'Customer'},
  {position: 5, name: 'G14CM82RC85J', weight: '21-12-2021 11:10AM', symbol: 'geton@gmail.com', date1: '21-12-2021', date2: '25-12-2021',active : 'Expired', usage: '0/200', usage1: 'Distributor'},
];

@Component({
  selector: 'app-view-discount',
  templateUrl: './view-discount.component.html',
  styleUrls: ['./view-discount.component.css']
})
export class ViewDiscountComponent implements OnInit {


displayedColumns: string[] = ['select', 'position', 'name', 'weight','date1', 'date2', 'active', 'usage', 'usage1'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
