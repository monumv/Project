import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface PeriodicElement {
  position: number;
  endate: string;
  etdate:string;
  acname: string;
  status: string;
  tasks: string;
  weight: string;
  score: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position:1, endate:'10', etdate:'Milk', acname:'500', status:'250', tasks:'260', weight:'130', score:'Ltr.',  icon: 'chevron_right'},
{position:2, endate:'10', etdate:'Milk', acname:'500', status:'250', tasks:'260', weight:'130', score:'Ltr.',  icon: 'chevron_right'},
{position:3, endate:'10', etdate:'Milk', acname:'500', status:'250', tasks:'260', weight:'130', score:'Ltr.',  icon: 'chevron_right'},
{position:4, endate:'10', etdate:'Milk', acname:'500', status:'250', tasks:'260', weight:'130', score:'Ltr.',  icon: 'chevron_right'},
{position:5, endate:'10', etdate:'Milk', acname:'500', status:'250', tasks:'260', weight:'130', score:'Ltr.',  icon: 'chevron_right'}, 
 ];

@Component({
  selector: 'app-itemstockgroup',
  templateUrl: './itemstockgroup.component.html',
  styleUrls: ['./itemstockgroup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemstockgroupComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position','etdate',  'endate',  'acname', 'status', 'tasks', 'weight', 'score',   'icon'];

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



}
