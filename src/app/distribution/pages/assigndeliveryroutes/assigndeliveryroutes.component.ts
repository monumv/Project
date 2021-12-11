import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  name: string;
  demo:string;
  alias:string;
  demoo: string;
  status: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, name:'Route 3 (3)', demo:'',  alias:'Manish Kumar(45)', demoo:'', status: 'Web Designer', icon: 'EA'},

{position: 2, name:'Route 3 (3)', demo:'',  alias:'Manish Kumar(45)', demoo:'', status: 'Web Designer', icon: 'EA'},
{position: 3, name:'Route 3 (3)', demo:'',  alias:'Manish Kumar(45)', demoo:'', status: 'Web Designer', icon: 'EA'},
{position: 4, name:'Route 3 (3)', demo:'',  alias:'Manish Kumar(45)', demoo:'', status: 'Web Designer', icon: 'EA'},
{position: 5, name:'Route 3 (3)', demo:'',  alias:'Manish Kumar(45)', demoo:'', status: 'Web Designer', icon: 'EA'},
{position: 6, name:'Route 3 (3)', demo:'',  alias:'Manish Kumar(45)', demoo:'', status: 'Web Designer', icon: 'EA'},
{position: 7, name:'Route 3 (3)', demo:'',  alias:'Manish Kumar(45)', demoo:'', status: 'Web Designer', icon: 'EA'},
{position: 8, name:'Route 3 (3)', demo:'',  alias:'Manish Kumar(45)', demoo:'', status: 'Web Designer', icon: 'EA'},
{position: 9, name:'Route 3 (3)', demo:'',  alias:'Manish Kumar(45)', demoo:'', status: 'Web Designer', icon: 'EA'},
{position: 10, name:'Route 3 (3)', demo:'',  alias:'Manish Kumar(45)', demoo:'', status: 'Web Designer', icon: 'EA'},
 ];

@Component({
  selector: 'app-assigndeliveryroutes',
  templateUrl: './assigndeliveryroutes.component.html',
  styleUrls: ['./assigndeliveryroutes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AssigndeliveryroutesComponent implements OnInit {

  
  displayedColumns: string[] = ['select', 'position', 'name', 'demo', 'alias', 'demoo', 'status', 'icon'];

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
