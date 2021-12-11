import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface PeriodicElement {
  position: number;
  dem: string;
  endate: string;
  designation:string;
  mobile:string;
  acname: string;
  type: string;
  types: string;
  status: string;
  tasks: string;
  days: string;
  unit: string;
  self: string;
  check: string;
  stdate: string;
  category: string;
  etdate:string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [


{position:1, dem:'210426-SUB-0003', stdate:'Kanak (888)', type:'Customer', types:'Retailer',  designation:'M: +91-9999999999', etdate:'Kanak (888)',  mobile:'M: +91-9999999999', endate:'Cow Mil 500ML (12)',category:'Milk',  acname:'2', status:'EA', tasks:'20', days:'40', unit:'27-Apr-21', self:'Accepted', check:'210426-SOD-0003',  icon: 'chevron_right'},


 ];

@Component({
  selector: 'app-subscriptionschedule',
  templateUrl: './subscriptionschedule.component.html',
  styleUrls: ['./subscriptionschedule.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SubscriptionscheduleComponent implements OnInit {

  
  displayedColumns: string[] = ['select', 'position','dem', 'stdate', 'etdate',  'endate',  'acname', 'status', 'tasks', 'days', 'unit', 'self', 'check', 'icon'];

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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.dem + 1}`;
  }



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


 
  ngOnInit(): void {
  }


}
