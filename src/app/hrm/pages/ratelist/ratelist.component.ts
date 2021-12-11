import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface PeriodicElement {
  position: number;
  date: string;
  document: string;
  endate: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1,  date:'5f8fc3e49e646c26aadc5af9', document:'Android App Develper(31)',  endate:'7', icon: 'chevron_right'},


 ];
@Component({
  selector: 'app-ratelist',
  templateUrl: './ratelist.component.html',
  styleUrls: ['./ratelist.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RatelistComponent implements OnInit {


  displayedColumns: string[] = ['select', 'position', 'date', 'document', 'endate', 'icon'];
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

  ngOnInit(): void {
  }


}
