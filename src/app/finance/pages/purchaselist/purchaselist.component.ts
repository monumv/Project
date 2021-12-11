import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';


export interface PeriodicElement {
  position: number;
  vhnumber: string;
  groups: string;
  transporter: string;
  checkin: string;
  branch: string;
  billfrom:string;
  billto:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, vhnumber: 'DLAC0214', groups: '31-July-2020', transporter: 'Test Supplier Two (84)', checkin: '350', branch: '8260', billfrom: 'Supplier', billto: 'My Company'},

  {position: 2, vhnumber: 'DLAC0214', groups: '31-July-2020', transporter: 'Test Supplier Two (84)', checkin: '350', branch: '8260', billfrom: 'Supplier', billto: 'My Company'},


 
 
];
@Component({
  selector: 'app-purchaselist',
  templateUrl: './purchaselist.component.html',
  styleUrls: ['./purchaselist.component.css']
})
export class PurchaselistComponent implements OnInit {

 displayedColumns: string[] = ['select', 'position', 'vhnumber', 'groups', 'transporter', 'driver', 'checkin', 'branch'];
  datas = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.datas.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.datas.data.forEach(row => this.selection.select(row));
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

}
