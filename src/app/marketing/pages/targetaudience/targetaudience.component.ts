import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';



export interface PeriodicElement {
  position: number;
  document: string;
  demo:string;
  account: string;
  active:string;
  icon: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, document:'Onam Festival (9)', demo:'',
account:'Customer (202)', active:'Yes', icon:''},
{position: 2, document:'Onam Festival (9)', demo:'',
account:'Customer (202)', active:'Yes', icon:''}, 
{position: 3, document:'Onam Festival (9)', demo:'',
account:'Customer (202)', active:'Yes', icon:''}, 
{position: 4, document:'Onam Festival (9)', demo:'',
account:'Customer (202)', active:'Yes', icon:''}, 
{position: 5, document:'Onam Festival (9)', demo:'',
account:'Customer (202)', active:'Yes', icon:''}, 
{position: 6, document:'Onam Festival (9)', demo:'',
account:'Customer (202)', active:'Yes', icon:''}, 
{position: 7, document:'Onam Festival (9)', demo:'',
account:'Customer (202)', active:'Yes', icon:''}, 
{position: 8, document:'Onam Festival (9)', demo:'',
account:'Customer (202)', active:'Yes', icon:''}, 
{position: 9, document:'Onam Festival (9)', demo:'',
account:'Customer (202)', active:'Yes', icon:''}, 
{position: 10, document:'Onam Festival (9)', demo:'',
account:'Customer (202)', active:'Yes', icon:''}, 
{position: 11, document:'Onam Festival (9)', demo:'',
account:'Customer (202)', active:'Yes', icon:''} 

];

@Component({
  selector: 'app-targetaudience',
  templateUrl: './targetaudience.component.html',
  styleUrls: ['./targetaudience.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TargetaudienceComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'document', 'demo', 'account',
'active', 'icon'  ];
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
