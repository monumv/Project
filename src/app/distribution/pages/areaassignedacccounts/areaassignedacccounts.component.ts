import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  name: string;
  demo: string;
  erp:string;
  status: string;
  demoo: string;
  alias: string;
  demos: string;
  account: string;
  under: string;
  child: string;
  count: string;
  empc: string;
  cusc: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, name:'Manish Kumar(85)', demo:'', erp:'Director(47)',  demos:'',status:'Sales Division (47)', demoo:'', alias:'North India (37)',  account:'Zone', under:'India', child:'1', count:'0', empc:'1', cusc:'0', icon: 'EA'},
{position: 2, name:'Manish Kumar(85)', demo:'', erp:'Director(47)',  demos:'',status:'Sales Division (47)', demoo:'', alias:'North India (37)',  account:'Zone', under:'India', child:'1', count:'0', empc:'1', cusc:'0', icon: 'EA'},
{position: 3, name:'Manish Kumar(85)', demo:'', erp:'Director(47)',  demos:'',status:'Sales Division (47)', demoo:'', alias:'North India (37)',  account:'Zone', under:'India', child:'1', count:'0', empc:'1', cusc:'0', icon: 'EA'},
{position: 4, name:'Manish Kumar(85)', demo:'', erp:'Director(47)',  demos:'',status:'Sales Division (47)', demoo:'', alias:'North India (37)',  account:'Zone', under:'India', child:'1', count:'0', empc:'1', cusc:'0', icon: 'EA'},
{position: 5, name:'Manish Kumar(85)', demo:'', erp:'Director(47)',  demos:'',status:'Sales Division (47)', demoo:'', alias:'North India (37)',  account:'Zone', under:'India', child:'1', count:'0', empc:'1', cusc:'0', icon: 'EA'},
{position: 6, name:'Manish Kumar(85)', demo:'', erp:'Director(47)',  demos:'',status:'Sales Division (47)', demoo:'', alias:'North India (37)',  account:'Zone', under:'India', child:'1', count:'0', empc:'1', cusc:'0', icon: 'EA'},
{position: 7, name:'Manish Kumar(85)', demo:'', erp:'Director(47)',  demos:'',status:'Sales Division (47)', demoo:'', alias:'North India (37)',  account:'Zone', under:'India', child:'1', count:'0', empc:'1', cusc:'0', icon: 'EA'},
{position: 8, name:'Manish Kumar(85)', demo:'', erp:'Director(47)',  demos:'',status:'Sales Division (47)', demoo:'', alias:'North India (37)',  account:'Zone', under:'India', child:'1', count:'0', empc:'1', cusc:'0', icon: 'EA'},
{position: 9, name:'Manish Kumar(85)', demo:'', erp:'Director(47)',  demos:'',status:'Sales Division (47)', demoo:'', alias:'North India (37)',  account:'Zone', under:'India', child:'1', count:'0', empc:'1', cusc:'0', icon: 'EA'},
 ];


@Component({
  selector: 'app-areaassignedacccounts',
  templateUrl: './areaassignedacccounts.component.html',
  styleUrls: ['./areaassignedacccounts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AreaassignedacccountsComponent implements OnInit {

  
  displayedColumns: string[] = ['select', 'position', 'name', 'demo',  'erp', 'demos',  'status', 'demoo', 'alias',  'account', 'under', 'child', 'count', 'empc', 'cusc', 'icon'];

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
