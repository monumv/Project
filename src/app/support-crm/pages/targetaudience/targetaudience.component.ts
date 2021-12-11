import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';

import {MatDialog} from '@angular/material/dialog';

export interface PeriodicElement {
  position: number;
  status: string;
  ds: string;
  update: string;
  dms: string;
  qus: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, status: 'Distributor (253)',
ds:'', update:'Retailer Feedback (1)', dms:'', qus:'Onboarded', icon: 'EA'},
{position: 2, status: 'Distributor (253)',
ds:'', update:'Retailer Feedback (1)', dms:'', qus:'Onboarded', icon: 'EA'},
{position: 3, status: 'Distributor (253)',
ds:'', update:'Retailer Feedback (1)', dms:'', qus:'Onboarded', icon: 'EA'},
{position: 4, status: 'Distributor (253)',
ds:'', update:'Retailer Feedback (1)', dms:'', qus:'Onboarded', icon: 'EA'},
{position: 5, status: 'Distributor (253)',
ds:'', update:'Retailer Feedback (1)', dms:'', qus:'Onboarded', icon: 'EA'},
{position: 6, status: 'Distributor (253)',
ds:'', update:'Retailer Feedback (1)', dms:'', qus:'Onboarded', icon: 'EA'},
{position: 7, status: 'Distributor (253)',
ds:'', update:'Retailer Feedback (1)', dms:'', qus:'Onboarded', icon: 'EA'},
{position: 8, status: 'Distributor (253)',
ds:'', update:'Retailer Feedback (1)', dms:'', qus:'Onboarded', icon: 'EA'},
{position: 9, status: 'Distributor (253)',
ds:'', update:'Retailer Feedback (1)', dms:'', qus:'Onboarded', icon: 'EA'},
{position: 10, status: 'Distributor (253)',
ds:'', update:'Retailer Feedback (1)', dms:'', qus:'Onboarded', icon: 'EA'},
{position: 11, status: 'Distributor (253)',
ds:'', update:'Retailer Feedback (1)', dms:'', qus:'Onboarded', icon: 'EA'},

 ];

@Component({
  selector: 'app-targetaudience',
  templateUrl: './targetaudience.component.html',
  styleUrls: ['./targetaudience.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TargetaudienceComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'status', 'ds', 'update', 
  'dms', 'qus', 'icon'];

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


  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


 constructor() {}


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
