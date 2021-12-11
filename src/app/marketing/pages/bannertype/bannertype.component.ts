import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';



export interface PeriodicElement {
  position: number;
  document: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, document:'In App U'},
{position: 2, document:'Browser Url'},
{position: 3, document:'Youtube Url'},
{position: 4, document:'Image (.jpg,.jpeg,.png)'},
{position: 5, document:'In App U'},
{position: 6, document:'In App U'},
{position: 7, document:'Browser Url'},
{position: 8, document:'In App U'},
{position: 9, document:'Item List'},
{position: 10, document:'In App U'},
 ];

@Component({
  selector: 'app-bannertype',
  templateUrl: './bannertype.component.html',
  styleUrls: ['./bannertype.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BannertypeComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'document' ];
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


  
  constructor() {}
 


  ngOnInit(): void {
  }

}
