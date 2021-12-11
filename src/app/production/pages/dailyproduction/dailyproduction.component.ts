import { Component, OnInit, ViewEncapsulation, ViewChild, } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  vch:string;
  date:string;
  bill:string;
  qty: string;
  amt: string;
  document: string;
  icon: string;
  itmqty: string;
  unt: string;
  uqty: string;
  super: string;
  factory: string;
  group: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, date:'26-Aug-2020 (14:00)',  vch:'33-Prd-FY2021-22-HO1', document: 'P001', bill:'Item A', group:'Group A', qty:'5', amt:'Pcs.', itmqty:'2.5Kg', unt:'28-May-22', uqty:'1001', super:'Ram Sharma(67)', factory:'Colston(67)', icon:'chevron_right'},
{position: 2, date:'26-Aug-2020 (14:00)',  vch:'33-Prd-FY2021-22-HO2', document: 'P001', bill:'Item A', group:'Group A', qty:'5', amt:'Pcs.', itmqty:'2.5Kg', unt:'28-May-22', uqty:'1001', super:'Ram Sharma(67)', factory:'Colston(67)', icon:'chevron_right'},
{position: 3, date:'26-Aug-2020 (14:00)',  vch:'33-Prd-FY2021-22-HO3', document: 'P001', bill:'Item A', group:'Group A', qty:'5', amt:'Pcs.', itmqty:'2.5Kg', unt:'28-May-22', uqty:'1001', super:'Ram Sharma(67)', factory:'Colston(67)', icon:'chevron_right'},
{position: 4, date:'26-Aug-2020 (14:00)',  vch:'33-Prd-FY2021-22-HO4', document: 'P001', bill:'Item A', group:'Group A', qty:'5', amt:'Pcs.', itmqty:'2.5Kg', unt:'28-May-22', uqty:'1001', super:'Ram Sharma(67)', factory:'Colston(67)', icon:'chevron_right'},
 ];


@Component({
  selector: 'app-dailyproduction',
  templateUrl: './dailyproduction.component.html',
  styleUrls: ['./dailyproduction.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DailyproductionComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'date', 'vch', 'document', 'bill', 'group', 'qty', 'amt', 'itmqty', 'unt', 'uqty', 'super', 'factory', 'icon'];
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
