import { Component, OnInit, ViewEncapsulation, ViewChild, } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  id:string;
  date:string;
  document: string;
  item: string;
  vch:string;
  remark:string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, id:'2748', date:'26-Aug-2020', document: 'Geton Infotech Pvt Ltd',  item:'240', vch:'WO/5/HO1', remark:'Lorem',  icon:'chevron_right'},
{position: 2, id:'2748', date:'26-Aug-2020', document: 'Geton Infotech Pvt Ltd',  item:'240', vch:'WO/5/HO1', remark:'Lorem',  icon:'chevron_right'},
{position: 3, id:'2748', date:'26-Aug-2020', document: 'Geton Infotech Pvt Ltd',  item:'240', vch:'WO/5/HO1', remark:'Lorem',  icon:'chevron_right'},
{position: 4, id:'2748', date:'26-Aug-2020', document: 'Geton Infotech Pvt Ltd',  item:'240', vch:'WO/5/HO1', remark:'Lorem',  icon:'chevron_right'},
{position: 5, id:'2748', date:'26-Aug-2020', document: 'Geton Infotech Pvt Ltd',  item:'240', vch:'WO/5/HO1', remark:'Lorem',  icon:'chevron_right'},
{position: 6, id:'2748', date:'26-Aug-2020', document: 'Geton Infotech Pvt Ltd',  item:'240', vch:'WO/5/HO1', remark:'Lorem',  icon:'chevron_right'},
{position: 7, id:'2748', date:'26-Aug-2020', document: 'Geton Infotech Pvt Ltd',  item:'240', vch:'WO/5/HO1', remark:'Lorem',  icon:'chevron_right'},
{position: 8, id:'2748', date:'26-Aug-2020', document: 'Geton Infotech Pvt Ltd',  item:'240', vch:'WO/5/HO1', remark:'Lorem',  icon:'chevron_right'},
{position: 9, id:'2748', date:'26-Aug-2020', document: 'Geton Infotech Pvt Ltd',  item:'240', vch:'WO/5/HO1', remark:'Lorem',  icon:'chevron_right'},
{position: 10, id:'2748', date:'26-Aug-2020', document: 'Geton Infotech Pvt Ltd',  item:'240', vch:'WO/5/HO1', remark:'Lorem',  icon:'chevron_right'},


 ];

@Component({
  selector: 'app-reedempoints',
  templateUrl: './reedempoints.component.html',
  styleUrls: ['./reedempoints.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReedempointsComponent implements OnInit {

  
  displayedColumns: string[] = ['select', 'position', 'id', 'date',  'document',  'item', 'vch', 'remark', 'icon'];

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
