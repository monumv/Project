import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface PeriodicElement {
  position: number;
  dem: string;
  endate: string;
  acname: string;
  status: string;
  tasks: string;
  unit: string;
  self: string;
  check: string;
  approve: string;
  weight: string;
  score: string;
  stdate: string;
  etdate:string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position:1, dem:'Item A (Item Code)', endate:'10', stdate:'500 ml', etdate:'Milk', acname:'500', status:'250', tasks:'260',  unit:'10', self:'500', check:'0', approve:'0', weight:'130', score:'Ltr.',  icon: 'chevron_right'}, 
{position:2, dem:'Item A (Item Code)', endate:'10', stdate:'500 ml', etdate:'Milk', acname:'500', status:'250', tasks:'260',  unit:'10', self:'500', check:'0', approve:'150', weight:'130', score:'Ltr.',  icon: 'chevron_right'}, 

{position:3, dem:'Item A (Item Code)', endate:'10', stdate:'500 ml', etdate:'Milk', acname:'500', status:'250', tasks:'260',  unit:'10', self:'500', check:'0', approve:'0', weight:'130', score:'Ltr.',  icon: 'chevron_right'}, 

{position:4, dem:'Item A (Item Code)', endate:'10', stdate:'500 ml', etdate:'Milk', acname:'500', status:'250', tasks:'260',  unit:'10', self:'500', check:'120', approve:'0', weight:'130', score:'Ltr.',  icon: 'chevron_right'}, 

{position:5, dem:'Item A (Item Code)', endate:'10', stdate:'500 ml', etdate:'Milk', acname:'500', status:'250', tasks:'260',  unit:'10', self:'500', check:'0', approve:'0', weight:'130', score:'Ltr.',  icon: 'chevron_right'}, 



 ];

@Component({
  selector: 'app-viewitemstock',
  templateUrl: './viewitemstock.component.html',
  styleUrls: ['./viewitemstock.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewitemstockComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position',  'dem', 'stdate', 'etdate', 'endate',  'acname', 'status', 'tasks', 'unit', 'self', 'check', 'approve', 'weight', 'score',   'icon'];

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



constructor() {}


 
  ngOnInit(): void {
  }



}
