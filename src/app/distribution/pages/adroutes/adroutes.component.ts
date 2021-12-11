import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  accounts: string;
  acgroup: string;
  erp:string;
  demo: string;
  name: string;
  demoo: string;
  employee: string;
  demos: string;
  alias: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, accounts:'New Party(21)', acgroup:'Customer 1', erp:'Route 1 (1) ', demo:'', name:'Branch Name 1 (51)', demoo:'', employee:'Manish Kumar', demos:'', alias:'Sales RM', icon: 'EA'},
{position: 2, accounts:'New Party(21)', acgroup:'Customer 1', erp:'Route 1 (1) ', demo:'', name:'Branch Name 1 (51)', demoo:'', employee:'Manish Kumar', demos:'', alias:'Sales RM', icon: 'EA'},
{position: 3, accounts:'New Party(21)', acgroup:'Customer 1', erp:'Route 1 (1) ', demo:'', name:'Branch Name 1 (51)', demoo:'', employee:'Manish Kumar', demos:'', alias:'Sales RM', icon: 'EA'},
{position: 4, accounts:'New Party(21)', acgroup:'Customer 1', erp:'Route 1 (1) ', demo:'', name:'Branch Name 1 (51)', demoo:'', employee:'Manish Kumar', demos:'', alias:'Sales RM', icon: 'EA'},
{position: 5, accounts:'New Party(21)', acgroup:'Customer 1', erp:'Route 1 (1) ', demo:'', name:'Branch Name 1 (51)', demoo:'', employee:'Manish Kumar', demos:'', alias:'Sales RM', icon: 'EA'},
{position: 6, accounts:'New Party(21)', acgroup:'Customer 1', erp:'Route 1 (1) ', demo:'', name:'Branch Name 1 (51)', demoo:'', employee:'Manish Kumar', demos:'', alias:'Sales RM', icon: 'EA'},
{position: 7, accounts:'New Party(21)', acgroup:'Customer 1', erp:'Route 1 (1) ', demo:'', name:'Branch Name 1 (51)', demoo:'', employee:'Manish Kumar', demos:'', alias:'Sales RM', icon: 'EA'},
{position: 8, accounts:'New Party(21)', acgroup:'Customer 1', erp:'Route 1 (1) ', demo:'', name:'Branch Name 1 (51)', demoo:'', employee:'Manish Kumar', demos:'', alias:'Sales RM', icon: 'EA'},
{position: 9, accounts:'New Party(21)', acgroup:'Customer 1', erp:'Route 1 (1) ', demo:'', name:'Branch Name 1 (51)', demoo:'', employee:'Manish Kumar', demos:'', alias:'Sales RM', icon: 'EA'},
{position: 10, accounts:'New Party(21)', acgroup:'Customer 1', erp:'Route 1 (1) ', demo:'', name:'Branch Name 1 (51)', demoo:'', employee:'Manish Kumar', demos:'', alias:'Sales RM', icon: 'EA'},

 ];


@Component({
  selector: 'app-adroutes',
  templateUrl: './adroutes.component.html',
  styleUrls: ['./adroutes.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdroutesComponent implements OnInit {

  
  displayedColumns: string[] = ['select', 'position', 'accounts', 'acgroup', 'erp', 'demo', 'name', 'demoo','employee', 'demos', 'alias', 'icon'];

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
