import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';


export interface PeriodicElement {
  position: number;
  date: string;
  contract: string;
  alias: string;
  api: string;
  pipeline: string;
  agent: string;
  lead: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, date: '24-May-2020', contract: 'PXX11.XX11.170727145849.N7S5', alias:'S5', api: 'Pull', pipeline: 'Pipeline', agent: '5', lead: 'Justdial', icon: 'visibility'},
  
  {position: 2, date: '24-May-2020', contract: 'PXX11.XX11.170727145849.N7S5', alias:'S5', api: 'Pull', pipeline: 'Pipeline', agent: '5', lead: 'Justdial', icon: 'visibility'},
  
  {position: 3, date: '24-May-2020', contract: 'PXX11.XX11.170727145849.N7S5', alias:'S5', api: 'Pull', pipeline: 'Pipeline', agent: '5', lead: 'Justdial', icon: 'visibility'},
  
  {position: 4, date: '24-May-2020', contract: 'PXX11.XX11.170727145849.N7S5', alias:'S5', api: 'Pull', pipeline: 'Pipeline', agent: '5', lead: 'Justdial', icon: 'visibility'},
  
  {position: 5, date: '24-May-2020', contract: 'PXX11.XX11.170727145849.N7S5', alias:'S5', api: 'Pull', pipeline: 'Pipeline', agent: '5', lead: 'Justdial', icon: 'visibility'},

];



interface Number {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-justdial',
  templateUrl: './justdial.component.html',
  styleUrls: ['./justdial.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class JustdialComponent implements OnInit {

  constructor() {}

  

  displayedColumns: string[] = ['select', 'position', 'date', 'contract', 'alias', 'api', 'pipeline', 'agent', 'lead', 'icon'];
  datas = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.datas.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.datas.data.forEach(row => this.selection.select(row));
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

