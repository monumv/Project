import { Component, OnInit, ViewEncapsulation, ViewChild, } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  vacant:string;
  vch:string;
  document: string;
  department: string;
  demo:string;
  demoo:string;
  qty: string;
  pack: string;
  status: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, vch:'35', department: 'Accounts', demoo:'', document: 'Customer Care', demo:'',  status: 'Sachin Chauhan', qty: '10',
 pack: '6', vacant:'4', icon:'chevron_right'}, 


 ];

@Component({
  selector: 'app-subdepartment',
  templateUrl: './subdepartment.component.html',
  styleUrls: ['./subdepartment.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SubdepartmentComponent implements OnInit {

  
  displayedColumns: string[] = ['select', 'position', 'vch', 'department', 'demoo', 'document', 'demo', 'status', 'qty', 'pack', 'vacant', 'icon'];
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
