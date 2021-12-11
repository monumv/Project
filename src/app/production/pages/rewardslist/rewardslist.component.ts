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
  document: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, document: 'Geton Infotech Pvt Ltd', date:'100', vch:'50', bill:'30', qty:'120',  icon:'chevron_right'}, 
{position: 2, document: 'Geton Infotech Pvt Ltd', date:'100', vch:'50', bill:'30', qty:'120',  icon:'chevron_right'}, 
{position: 3, document: 'Geton Infotech Pvt Ltd', date:'100', vch:'50', bill:'30', qty:'120',  icon:'chevron_right'}, 
{position: 4, document: 'Geton Infotech Pvt Ltd', date:'100', vch:'50', bill:'30', qty:'120',  icon:'chevron_right'}, 
{position: 5, document: 'Geton Infotech Pvt Ltd', date:'100', vch:'50', bill:'30', qty:'120',  icon:'chevron_right'}, 
{position: 6, document: 'Geton Infotech Pvt Ltd', date:'100', vch:'50', bill:'30', qty:'120',  icon:'chevron_right'}, 
{position: 7, document: 'Geton Infotech Pvt Ltd', date:'100', vch:'50', bill:'30', qty:'120',  icon:'chevron_right'}, 
{position: 8, document: 'Geton Infotech Pvt Ltd', date:'100', vch:'50', bill:'30', qty:'120',  icon:'chevron_right'}, 
{position: 9, document: 'Geton Infotech Pvt Ltd', date:'100', vch:'50', bill:'30', qty:'120',  icon:'chevron_right'}, 
{position: 10, document: 'Geton Infotech Pvt Ltd', date:'100', vch:'50', bill:'30', qty:'120',  icon:'chevron_right'}, 
{position: 11, document: 'Geton Infotech Pvt Ltd', date:'100', vch:'50', bill:'30', qty:'120',  icon:'chevron_right'}, 
{position: 12, document: 'Geton Infotech Pvt Ltd', date:'100', vch:'50', bill:'30', qty:'120',  icon:'chevron_right'}, 


 ];


@Component({
  selector: 'app-rewardslist',
  templateUrl: './rewardslist.component.html',
  styleUrls: ['./rewardslist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RewardslistComponent implements OnInit {


  displayedColumns: string[] = ['select', 'position', 'document', 'date', 'vch', 'bill', 'qty', 'icon'];
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
