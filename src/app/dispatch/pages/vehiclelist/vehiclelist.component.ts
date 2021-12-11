import { Component, OnInit, ViewEncapsulation, ViewChild, } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  vch:string;
  id:string;
  document: string;
  code: string;
  group: string;
  count: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, vch:'11-Nov-2020', id:'45', document: 'I', code:'DL9898GH675', group:'Lorem Ipsum', count:'Manish Transporter',  icon:'chevron_right'}, 
{position: 2, vch:'11-Nov-2020', id:'45', document: 'I', code:'DL9898GH675', group:'Lorem Ipsum', count:'Manish Transporter',  icon:'chevron_right'}, 

{position: 3, vch:'11-Nov-2020', id:'45', document: 'I', code:'DL9898GH675', group:'Lorem Ipsum', count:'Manish Transporter',  icon:'chevron_right'}, 

{position: 4, vch:'11-Nov-2020', id:'45', document: 'I', code:'DL9898GH675', group:'Lorem Ipsum', count:'Manish Transporter',  icon:'chevron_right'}, 

{position: 5, vch:'11-Nov-2020', id:'45', document: 'I', code:'DL9898GH675', group:'Lorem Ipsum', count:'Manish Transporter',  icon:'chevron_right'}, 

{position: 6, vch:'11-Nov-2020', id:'45', document: 'I', code:'DL9898GH675', group:'Lorem Ipsum', count:'Manish Transporter',  icon:'chevron_right'}, 
{position: 7, vch:'11-Nov-2020', id:'45', document: 'I', code:'DL9898GH675', group:'Lorem Ipsum', count:'Manish Transporter',  icon:'chevron_right'}, 

{position: 7, vch:'11-Nov-2020', id:'45', document: 'I', code:'DL9898GH675', group:'Lorem Ipsum', count:'Manish Transporter',  icon:'chevron_right'}, 



 ];


@Component({
  selector: 'app-vehiclelist',
  templateUrl: './vehiclelist.component.html',
  styleUrls: ['./vehiclelist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VehiclelistComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'vch', 'id', 'document', 'code', 'group', 'count', 'icon'];
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
