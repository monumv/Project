import { Component, OnInit, ViewEncapsulation, ViewChild, Directive, HostBinding } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';

Directive({
  selector: 'a[target=_blank]',
})

export interface PeriodicElement {
  position: number;
  id: string;
  status: string;
  demo: string;
  date:string;
  demos: string;
  alias: string;
  pack: string;
  area: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, id:'665', status: 'Mohit Kumar',  demo:'',
 date:'GetOn Infotech', demos:'Sales', alias:'RM', pack:'Level 2',
  area:'sales', icon: 'chevron_right'}, 


 ];

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  encapsulation: ViewEncapsulation.None 

})
export class EmployeeComponent implements OnInit {
  @HostBinding('attr.rel') rel = 'noopener noreferrer';
 
  
  displayedColumns: string[] = ['select', 'position', 'id',
  'status', 'demo', 'date', 'demos', 'alias', 'pack', 'area', 'icon'];
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
