import { Component, OnInit, ViewEncapsulation, ViewChild, } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  vch:string;
  document: string;
  alias: string;
  under: string;
  salary: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, vch:'35', document: 'Holiday', alias:'H', under:'Holiday', salary: '1', icon:'chevron_right'}, 
{position: 1, vch:'35', document: 'Weekly Off', alias:'W', under:'Holiday', salary: '1', icon:'chevron_right'},  
{position: 1, vch:'35', document: 'Casual Leave', alias:'C', under:'Leave', salary: '1', icon:'chevron_right'},  
{position: 1, vch:'35', document: 'Medical Leave', alias:'M', under:'Leave', salary: '1', icon:'chevron_right'},  
{position: 1, vch:'35', document: 'Absent', alias:'A', under:'Absent', salary: '1', icon:'chevron_right'},  
{position: 1, vch:'35', document: 'Halfday', alias:'H', under:'Present', salary: '1', icon:'chevron_right'},  
{position: 1, vch:'35', document: 'Present', alias:'P', under:'Present', salary: '1', icon:'chevron_right'},  



 ];

@Component({
  selector: 'app-attendancestatus',
  templateUrl: './attendancestatus.component.html',
  styleUrls: ['./attendancestatus.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AttendancestatusComponent implements OnInit {

  
 
  displayedColumns: string[] = ['select', 'position', 'vch', 'document', 'alias', 'under', 'salary', 'icon'];
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
