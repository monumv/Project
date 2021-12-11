import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  erp:string;
  status: string;
  target: string;
  ach: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, erp:'Rahul Kumar (64)', status: '2,00,000', target:'3,00,000', ach:'66.6%',  icon: 'EA'},
{position: 2, erp:'Rahul Kumar (64)', status: '2,00,000', target:'3,00,000', ach:'66.6%',  icon: 'EA'},
{position: 3, erp:'Rahul Kumar (64)', status: '2,00,000', target:'3,00,000', ach:'66.6%',  icon: 'EA'},
{position: 4, erp:'Rahul Kumar (64)', status: '2,00,000', target:'3,00,000', ach:'66.6%',  icon: 'EA'},
{position: 5, erp:'Rahul Kumar (64)', status: '2,00,000', target:'3,00,000', ach:'66.6%',  icon: 'EA'},
{position: 6, erp:'Rahul Kumar (64)', status: '2,00,000', target:'3,00,000', ach:'66.6%',  icon: 'EA'},

 ];



@Component({
  selector: 'app-primarysale',
  templateUrl: './primarysale.component.html',
  styleUrls: ['./primarysale.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class PrimarysaleComponent implements OnInit {

 
  
  displayedColumns: string[] = ['select', 'position', 'erp', 'status', 'target', 'ach', 'icon'];

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