import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  erp:string;
  alias: string;
  demo: string;
  status: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, alias:'Noida Sec 16', demo:'', status: 'Get Infotech Pvt. Ltd', erp:'Distributor',  icon: 'EA'},
{position: 2, alias:'Noida Sec 16', demo:'', status: 'Get Infotech Pvt. Ltd', erp:'Distributor',  icon: 'EA'},
{position: 3, alias:'Noida Sec 16', demo:'', status: 'Get Infotech Pvt. Ltd', erp:'Distributor',  icon: 'EA'},
{position: 4, alias:'Noida Sec 16', demo:'', status: 'Get Infotech Pvt. Ltd', erp:'Distributor',  icon: 'EA'},
{position: 5, alias:'Noida Sec 16', demo:'', status: 'Get Infotech Pvt. Ltd', erp:'Distributor',  icon: 'EA'},
{position: 6, alias:'Noida Sec 16', demo:'', status: 'Get Infotech Pvt. Ltd', erp:'Distributor',  icon: 'EA'},
{position: 7, alias:'Noida Sec 16', demo:'', status: 'Get Infotech Pvt. Ltd', erp:'Distributor',  icon: 'EA'},
{position: 8, alias:'Noida Sec 16', demo:'', status: 'Get Infotech Pvt. Ltd', erp:'Distributor',  icon: 'EA'},
{position: 9, alias:'Noida Sec 16', demo:'', status: 'Get Infotech Pvt. Ltd', erp:'Distributor',  icon: 'EA'},
{position: 10, alias:'Noida Sec 16', demo:'', status: 'Get Infotech Pvt. Ltd', erp:'Distributor',  icon: 'EA'},
{position: 11, alias:'Noida Sec 16', demo:'', status: 'Get Infotech Pvt. Ltd', erp:'Distributor',  icon: 'EA'},


 ];

@Component({
  selector: 'app-accountroute',
  templateUrl: './accountroute.component.html',
  styleUrls: ['./accountroute.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountrouteComponent implements OnInit {

 
 
  
  displayedColumns: string[] = ['select', 'position', 'alias', 'demo', 'status', 'erp', 'icon'];

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
