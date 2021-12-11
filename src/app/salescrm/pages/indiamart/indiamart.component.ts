import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';



export interface PeriodicElement {
  position: number;
  id: string;
  demos: string;
  document: string;
  demoo: string;
  complaint: string;
  demo: string;
  name:string;
  lead:string;
  sync:string;
  get:string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, id:'22-Jul-2020', demos:'', document:'MTU2ODg4OTcyNy42NiM3ODc0NTE4MQ==',  demoo:'9818132474', complaint:'pull', demo:'Pipeline 1',
name:'1', lead:'IndiaMart', sync:'10-Oct-2020', get: '', icon:''},
{position: 2, id:'22-Jul-2020', demos:'', document:'MTU2ODg4OTcyNy42NiM3ODc0NTE4MQ==',  demoo:'9818132474', complaint:'pull', demo:'Pipeline 1',
name:'1', lead:'IndiaMart', sync:'10-Oct-2020', get: '', icon:''},
{position: 3, id:'22-Jul-2020', demos:'', document:'MTU2ODg4OTcyNy42NiM3ODc0NTE4MQ==',  demoo:'9818132474', complaint:'pull', demo:'Pipeline 1',
name:'1', lead:'IndiaMart', sync:'10-Oct-2020', get: '', icon:''},
{position: 4, id:'22-Jul-2020', demos:'', document:'MTU2ODg4OTcyNy42NiM3ODc0NTE4MQ==',  demoo:'9818132474', complaint:'pull', demo:'Pipeline 1',
name:'1', lead:'IndiaMart', sync:'10-Oct-2020', get: '', icon:''},
{position: 5, id:'22-Jul-2020', demos:'', document:'MTU2ODg4OTcyNy42NiM3ODc0NTE4MQ==',  demoo:'9818132474', complaint:'pull', demo:'Pipeline 1',
name:'1', lead:'IndiaMart', sync:'10-Oct-2020', get: '', icon:''},
{position: 6, id:'22-Jul-2020', demos:'', document:'MTU2ODg4OTcyNy42NiM3ODc0NTE4MQ==',  demoo:'9818132474', complaint:'pull', demo:'Pipeline 1',
name:'1', lead:'IndiaMart', sync:'10-Oct-2020', get: '', icon:''},
{position: 7, id:'22-Jul-2020', demos:'', document:'MTU2ODg4OTcyNy42NiM3ODc0NTE4MQ==',  demoo:'9818132474', complaint:'pull', demo:'Pipeline 1',
name:'1', lead:'IndiaMart', sync:'10-Oct-2020', get: '', icon:''},
{position: 8, id:'22-Jul-2020', demos:'', document:'MTU2ODg4OTcyNy42NiM3ODc0NTE4MQ==',  demoo:'9818132474', complaint:'pull', demo:'Pipeline 1',
name:'1', lead:'IndiaMart', sync:'10-Oct-2020', get: '', icon:''},
{position: 9, id:'22-Jul-2020', demos:'', document:'MTU2ODg4OTcyNy42NiM3ODc0NTE4MQ==',  demoo:'9818132474', complaint:'pull', demo:'Pipeline 1',
name:'1', lead:'IndiaMart', sync:'10-Oct-2020', get: '', icon:''},


 ];
@Component({
  selector: 'app-indiamart',
  templateUrl: './indiamart.component.html',
  styleUrls: ['./indiamart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndiamartComponent implements OnInit {

 
  displayedColumns: string[] = ['select', 'position', 'id', 'demos', 'document', 'demoo', 'complaint', 'demo', 'name', 'lead', 'sync', 'get', 'icon'];
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
