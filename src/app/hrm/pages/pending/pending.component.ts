import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface PeriodicElement {
  dem: string;
  endate: string;
  designation:string;
  acname: string;
  status: string;
  tasks: string;
  days: string;
  unit: string;
  self: string;
  check: string;
  approve: string;
  kra: string;
  weight: string;
  score: string;
  stdate: string;
  etdate:string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{ dem:'210424-0001', endate:'Arun Rawat (547)', stdate:'1-Apr', etdate:'21-Apr', designation:'Team Lead', acname:'Complete PMS module in hrm for ananda.', kra:'KRA: Sales', status:'Complete', tasks:'1/1', days:'5/9', unit:'Tasks Days', self:'100', check:'100', approve:'100', weight:'30%', score:'30.00',  icon: 'chevron_right'}, 

{ dem:'210424-0001', endate:'Arun Rawat (547)', stdate:'1-Apr', etdate:'21-Apr', designation:'Team Lead', acname:'Complete PMS module in hrm for ananda.', kra:'KRA: Sales', status:'Complete', tasks:'1/1', days:'5/9', unit:'Tasks Days', self:'100', check:'100', approve:'100', weight:'30%', score:'30.00',  icon: 'chevron_right'},

{ dem:'210424-0001', endate:'Arun Rawat (547)', stdate:'1-Apr', etdate:'21-Apr', designation:'Team Lead', acname:'Complete PMS module in hrm for ananda.', kra:'KRA: Sales', status:'In Progress', tasks:'0/1', days:'0/9', unit:'Task Count', self:'--', check:'--', approve:'--', weight:'30%', score:'--',  icon: 'chevron_right'},


 ];

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PendingComponent implements OnInit {

  
  displayedColumns: string[] = ['select', 'stdate', 'etdate', 'dem',  'endate',  'acname', 'status', 'tasks', 'days', 'unit', 'self', 'check', 'approve', 'weight', 'score',   'icon'];

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
