import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';



export interface PeriodicElement {
  position: number;
  vhnumber: string;
  transporter: string;
  driver: string;
  checkin: string;
  branch: string;
  status: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, vhnumber: 'DLAC0214',  transporter: 'Mangal Transporter Service (5342)', driver: 'Mangal Kumar (746)', checkin: '28 June, 2020', branch: 'Pilakhwa (909)', status: 'Checked In', icon: 'chevron_right'},
{position: 2, vhnumber: 'DLAC0214', transporter: 'Mangal Transporter Service (5342)', driver: 'Mangal Kumar (746)', checkin: '28 June, 2020', branch: 'Pilakhwa (909)', status: 'Checked In', icon: 'chevron_right'},
{position: 3, vhnumber: 'DLAC0214', transporter: 'Mangal Transporter Service (5342)', driver: 'Mangal Kumar (746)', checkin: '28 June, 2020', branch: 'Pilakhwa (909)', status: 'Checked In', icon: 'chevron_right'},
{position: 4, vhnumber: 'DLAC0214', transporter: 'Mangal Transporter Service (5342)', driver: 'Mangal Kumar (746)', checkin: '28 June, 2020', branch: 'Pilakhwa (909)', status: 'Checked In', icon: 'chevron_right'},
{position: 5, vhnumber: 'DLAC0214', transporter: 'Mangal Transporter Service (5342)', driver: 'Mangal Kumar (746)', checkin: '28 June, 2020', branch: 'Pilakhwa (909)', status: 'Checked In', icon: 'chevron_right'},
{position: 6, vhnumber: 'DLAC0214', transporter: 'Mangal Transporter Service (5342)', driver: 'Mangal Kumar (746)', checkin: '28 June, 2020', branch: 'Pilakhwa (909)', status: 'Checked In', icon: 'chevron_right'},
{position: 7, vhnumber: 'DLAC0214', transporter: 'Mangal Transporter Service (5342)', driver: 'Mangal Kumar (746)', checkin: '28 June, 2020', branch: 'Pilakhwa (909)', status: 'Checked In', icon: 'chevron_right'},
{position: 8, vhnumber: 'DLAC0214', transporter: 'Mangal Transporter Service (5342)', driver: 'Mangal Kumar (746)', checkin: '28 June, 2020', branch: 'Pilakhwa (909)', status: 'Checked In', icon: 'chevron_right'},
{position: 9, vhnumber: 'DLAC0214', transporter: 'Mangal Transporter Service (5342)', driver: 'Mangal Kumar (746)', checkin: '28 June, 2020', branch: 'Pilakhwa (909)', status: 'Checked In', icon: 'chevron_right'},
{position: 10, vhnumber: 'DLAC0214', transporter: 'Mangal Transporter Service (5342)', driver: 'Mangal Kumar (746)', checkin: '28 June, 2020', branch: 'Pilakhwa (909)', status: 'Checked In', icon: 'chevron_right'},
 
];




interface Number {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-vehiclecheckin',
  templateUrl: './vehiclecheckin.component.html',
  styleUrls: ['./vehiclecheckin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VehiclecheckinComponent implements OnInit {

  
  displayedColumns: string[] = ['select', 'position', 'vhnumber', 'transporter', 'driver', 'checkin', 'branch', 'status', 'icon'];
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
