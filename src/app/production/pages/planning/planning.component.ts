import { Component, OnInit, ViewEncapsulation, ViewChild, } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  item:string;
  code:string;
  sale: string;
  work:string;
  purchase:string;
  require: string;
  pack: string;
  produce: string;
  created: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, item:'18-05-21 03:20Pm',  code:'210518-Pln-001', sale:'Agra Branch (12)', work:'Rahul Singh (55)', purchase:'4', require:'45', pack:'56', produce:'345', created:'Manish Kumar (56)', icon:'chevron_right'},
{position: 2, item:'18-05-21 03:20Pm',  code:'210518-Pln-002', sale:'Agra Branch (12)', work:'Rahul Singh (55)', purchase:'4', require:'45', pack:'56', produce:'345', created:'Manish Kumar (56)', icon:'chevron_right'},
{position: 3, item:'18-05-21 03:20Pm',  code:'210518-Pln-003', sale:'Agra Branch (12)', work:'Rahul Singh (55)', purchase:'4', require:'45', pack:'56', produce:'345', created:'Manish Kumar (56)', icon:'chevron_right'},
{position: 4, item:'18-05-21 03:20Pm',  code:'210518-Pln-004', sale:'Agra Branch (12)', work:'Rahul Singh (55)', purchase:'4', require:'45', pack:'56', produce:'345', created:'Manish Kumar (56)', icon:'chevron_right'},
{position: 5, item:'18-05-21 03:20Pm',  code:'210518-Pln-005', sale:'Agra Branch (12)', work:'Rahul Singh (55)', purchase:'4', require:'45', pack:'56', produce:'345', created:'Manish Kumar (56)', icon:'chevron_right'},
{position: 6, item:'18-05-21 03:20Pm',  code:'210518-Pln-006', sale:'Agra Branch (12)', work:'Rahul Singh (55)', purchase:'4', require:'45', pack:'56', produce:'345', created:'Manish Kumar (56)', icon:'chevron_right'},
{position: 7, item:'18-05-21 03:20Pm',  code:'210518-Pln-007', sale:'Agra Branch (12)', work:'Rahul Singh (55)', purchase:'4', require:'45', pack:'56', produce:'345', created:'Manish Kumar (56)', icon:'chevron_right'},

 ];

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlanningComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'item', 'code',  'created', 'sale', 'work', 'purchase', 'require', 'pack', 'produce', 'icon'];
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
