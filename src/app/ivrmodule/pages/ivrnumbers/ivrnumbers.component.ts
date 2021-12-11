import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';




export interface PeriodicElement {
  position: number;
  document: string;
  date: string;
  demoo: string;
  demo: string;
  demos: string;
  vch:string;
  endate: string;
  qty: string;
  mobile: string;
  pack: string;
  status: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, document:'+91-8804562365',  demoo:'', mobile:'+91-8804562365', demo:'', date:'25-July-2020', demos:'',
endate:'24-July-2021',  vch:'20', status: '300', qty: '200',
pack: '5', icon: 'chevron_right'}, 
{position: 2, document:'+91-8804562365',  demoo:'', mobile:'+91-8804562365', demo:'', date:'25-July-2020', demos:'',
endate:'24-July-2021',  vch:'20', status: '300', qty: '200',
pack: '5', icon: 'chevron_right'}, 
{position: 3, document:'+91-8804562365',  demoo:'', mobile:'+91-8804562365', demo:'', date:'25-July-2020', demos:'',
endate:'24-July-2021',  vch:'20', status: '300', qty: '200',
pack: '5', icon: 'chevron_right'}, 
{position: 4, document:'+91-8804562365',  demoo:'', mobile:'+91-8804562365', demo:'', date:'25-July-2020', demos:'',
endate:'24-July-2021',  vch:'20', status: '300', qty: '200',
pack: '5', icon: 'chevron_right'}, 
{position: 5, document:'+91-8804562365',  demoo:'', mobile:'+91-8804562365', demo:'', date:'25-July-2020', demos:'',
endate:'24-July-2021',  vch:'20', status: '300', qty: '200',
pack: '5', icon: 'chevron_right'}, 
{position: 6, document:'+91-8804562365',  demoo:'', mobile:'+91-8804562365', demo:'', date:'25-July-2020', demos:'',
endate:'24-July-2021',  vch:'20', status: '300', qty: '200',
pack: '5', icon: 'chevron_right'}, 
{position: 7, document:'+91-8804562365',  demoo:'', mobile:'+91-8804562365', demo:'', date:'25-July-2020', demos:'',
endate:'24-July-2021',  vch:'20', status: '300', qty: '200',
pack: '5', icon: 'chevron_right'}, 
{position: 8, document:'+91-8804562365',  demoo:'', mobile:'+91-8804562365', demo:'', date:'25-July-2020', demos:'',
endate:'24-July-2021',  vch:'20', status: '300', qty: '200',
pack: '5', icon: 'chevron_right'}, 
{position: 9, document:'+91-8804562365',  demoo:'', mobile:'+91-8804562365', demo:'', date:'25-July-2020', demos:'',
endate:'24-July-2021',  vch:'20', status: '300', qty: '200',
pack: '5', icon: 'chevron_right'}, 
{position: 10, document:'+91-8804562365',  demoo:'', mobile:'+91-8804562365', demo:'', date:'25-July-2020', demos:'',
endate:'24-July-2021',  vch:'20', status: '300', qty: '200',
pack: '5', icon: 'chevron_right'}, 
{position: 11, document:'+91-8804562365',  demoo:'', mobile:'+91-8804562365', demo:'', date:'25-July-2020', demos:'',
endate:'24-July-2021',  vch:'20', status: '300', qty: '200',
pack: '5', icon: 'chevron_right'}, 
{position: 12, document:'+91-8804562365',  demoo:'', mobile:'+91-8804562365', demo:'', date:'25-July-2020', demos:'',
endate:'24-July-2021',  vch:'20', status: '300', qty: '200',
pack: '5', icon: 'chevron_right'}, 
 ];


@Component({
  selector: 'app-ivrnumbers',
  templateUrl: './ivrnumbers.component.html',
  styleUrls: ['./ivrnumbers.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IvrnumbersComponent implements OnInit {

 
  
  displayedColumns: string[] = ['select', 'position', 'document', 'demoo', 'mobile', 'demo', 'date', 'demos', 'endate', 'vch', 'status', 'qty', 'pack',  'icon'];
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
