import { Component, OnInit, ViewEncapsulation, ViewChild, } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';

import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface PeriodicElement {
  position: number;
  vch:string;
  document: string;
  code: string;
  planner: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, vch:'26-Jan-2021', document: 'Saturday', code:'North India List', planner:'1',  icon:'chevron_right'}, 

 ];

@Component({
  selector: 'app-weeklyoff-list',
  templateUrl: './weeklyoff-list.component.html',
  styleUrls: ['./weeklyoff-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class WeeklyoffListComponent implements OnInit {

 
  displayedColumns: string[] = ['select', 'position', 'vch', 'document', 'code', 'planner', 'icon'];
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

constructor(public dialog: MatDialog) {}

 openDialog(type: string) {
    var width = "";

    const dialogRef = this.dialog.open(DialogComponent, {
      width: width,
      data: {
        dialogObj: {
          dialogType: type
        }
      }
    });}

}
