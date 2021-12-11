import { Component, OnInit, ViewEncapsulation, ViewChild, } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  vacant:string;
  designation: string;
  dems: string;
  vch:string;
  document: string;
  department: string;
  demo:string;
  demoo:string;
  qty: string;
  pack: string;
  assign: string;
  area: string;
  dm: string;
  ds: string;
  status: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, vch:'35', designation:'Android App Developer', dems:'', department: 'IT', demoo:'', document: 'App Development Team', demo:'',  status: 'L3 Middle Management', ds:'', assign:'Lorem Ipsum', dm:'', area:'Lorem Ipsum', qty: '10',
 pack: '6', vacant:'4', icon:'chevron_right'}, 
 {position: 2, vch:'35', designation:'Android App Developer', dems:'', department: 'IT', demoo:'', document: 'App Development Team', demo:'',  status: 'L3 Middle Management', ds:'', assign:'Lorem Ipsum', dm:'', area:'Lorem Ipsum', qty: '10',
  pack: '6', vacant:'4', icon:'chevron_right'}, 

  {position: 3, vch:'35', designation:'Android App Developer', dems:'', department: 'IT', demoo:'', document: 'App Development Team', demo:'',  status: 'L3 Middle Management', ds:'', assign:'Lorem Ipsum', dm:'', area:'Lorem Ipsum', qty: '10',
  pack: '6', vacant:'4', icon:'chevron_right'}, 

  {position: 4, vch:'35', designation:'Android App Developer', dems:'', department: 'IT', demoo:'', document: 'App Development Team', demo:'',  status: 'L3 Middle Management', ds:'', assign:'Lorem Ipsum', dm:'', area:'Lorem Ipsum', qty: '10',
  pack: '6', vacant:'4', icon:'chevron_right'}, 

  {position: 5, vch:'35', designation:'Android App Developer', dems:'', department: 'IT', demoo:'', document: 'App Development Team', demo:'',  status: 'L3 Middle Management', ds:'', assign:'Lorem Ipsum', dm:'', area:'Lorem Ipsum', qty: '10',
  pack: '6', vacant:'4', icon:'chevron_right'}, 

  {position: 6, vch:'35', designation:'Android App Developer', dems:'', department: 'IT', demoo:'', document: 'App Development Team', demo:'',  status: 'L3 Middle Management', ds:'', assign:'Lorem Ipsum', dm:'', area:'Lorem Ipsum', qty: '10',
  pack: '6', vacant:'4', icon:'chevron_right'}, 

  {position: 7, vch:'35', designation:'Android App Developer', dems:'', department: 'IT', demoo:'', document: 'App Development Team', demo:'',  status: 'L3 Middle Management', ds:'', assign:'Lorem Ipsum', dm:'', area:'Lorem Ipsum', qty: '10',
  pack: '6', vacant:'4', icon:'chevron_right'}, 

  {position: 8, vch:'35', designation:'Android App Developer', dems:'', department: 'IT', demoo:'', document: 'App Development Team', demo:'',  status: 'L3 Middle Management', ds:'', assign:'Lorem Ipsum', dm:'', area:'Lorem Ipsum', qty: '10',
  pack: '6', vacant:'4', icon:'chevron_right'}, 

  {position: 9, vch:'35', designation:'Android App Developer', dems:'', department: 'IT', demoo:'', document: 'App Development Team', demo:'',  status: 'L3 Middle Management', ds:'', assign:'Lorem Ipsum', dm:'', area:'Lorem Ipsum', qty: '10',
  pack: '6', vacant:'4', icon:'chevron_right'}, 

  {position: 10, vch:'35', designation:'Android App Developer', dems:'', department: 'IT', demoo:'', document: 'App Development Team', demo:'',  status: 'L3 Middle Management', ds:'', assign:'Lorem Ipsum', dm:'', area:'Lorem Ipsum', qty: '10',
  pack: '6', vacant:'4', icon:'chevron_right'}, 

  {position: 11, vch:'35', designation:'Android App Developer', dems:'', department: 'IT', demoo:'', document: 'App Development Team', demo:'',  status: 'L3 Middle Management', ds:'', assign:'Lorem Ipsum', dm:'', area:'Lorem Ipsum', qty: '10',
  pack: '6', vacant:'4', icon:'chevron_right'}, 

  {position: 12, vch:'35', designation:'Android App Developer', dems:'', department: 'IT', demoo:'', document: 'App Development Team', demo:'',  status: 'L3 Middle Management', ds:'', assign:'Lorem Ipsum', dm:'', area:'Lorem Ipsum', qty: '10',
  pack: '6', vacant:'4', icon:'chevron_right'}, 
           

 ];


@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DesignationComponent implements OnInit {
 
  displayedColumns: string[] = ['select', 'position', 'vch', 'designation', 'dems', 'document', 'demoo', 'department', 'demo', 'status', 'dm', 'assign', 'ds', 'area', 'qty', 'pack', 'vacant', 'icon'];
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
