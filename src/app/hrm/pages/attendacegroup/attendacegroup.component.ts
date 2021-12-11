import { Component, OnInit, ViewEncapsulation, ViewChild, } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  vch:string;
  document: string;
  alias: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, vch:'35', document: 'Holiday', alias:'H', icon:'chevron_right'}, 
{position: 2, vch:'35', document: 'Leave', alias:'L',  icon:'chevron_right'}, 
{position: 3, vch:'35', document: 'Absent', alias:'A',  icon:'chevron_right'}, 
{position: 4, vch:'35', document: 'Present', alias:'P',  icon:'chevron_right'}, 



 ];

@Component({
  selector: 'app-attendacegroup',
  templateUrl: './attendacegroup.component.html',
  styleUrls: ['./attendacegroup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AttendacegroupComponent implements OnInit {

  
 
  displayedColumns: string[] = ['select', 'position', 'vch', 'document', 'alias',  'icon'];
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
