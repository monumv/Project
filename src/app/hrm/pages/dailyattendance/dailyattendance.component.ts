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
  count: string;
  in: string;
  out: string;
  status: string;
  salary: string;
  source: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

{position: 1, document: 'Amar Singh (44)', vch:'Software Developer (33)', code:'DialERP IT', count:'07-Oct-2021 ', in:'07-Oct 09:28 ', out:'07-Oct 06:28', status:'Present', salary:'1', source:'GPS',  icon:'chevron_right'}, 


{position: 2, document: 'Amar Singh (44)', vch:'Software Developer (33)', code:'DialERP IT', count:'07-Oct-2021 ', in:'07-Oct 09:28 ', out:'07-Oct 06:28', status:'Present', salary:'1', source:'GPS',  icon:'chevron_right'}, 

{position: 3, document: 'Amar Singh (44)', vch:'Software Developer (33)', code:'DialERP IT', count:'07-Oct-2021 ', in:'07-Oct 09:28 ', out:'07-Oct 06:28', status:'Present', salary:'1', source:'GPS',  icon:'chevron_right'}, 

{position: 4, document: 'Amar Singh (44)', vch:'Software Developer (33)', code:'DialERP IT', count:'07-Oct-2021 ', in:'07-Oct 09:28 ', out:'07-Oct 06:28', status:'Present', salary:'1', source:'GPS',  icon:'chevron_right'}, 

{position: 5, document: 'Amar Singh (44)', vch:'Software Developer (33)', code:'DialERP IT', count:'07-Oct-2021 ', in:'07-Oct 09:28 ', out:'07-Oct 06:28', status:'Present', salary:'1', source:'GPS',  icon:'chevron_right'}, 


 ];


@Component({
  selector: 'app-dailyattendance',
  templateUrl: './dailyattendance.component.html',
  styleUrls: ['./dailyattendance.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DailyattendanceComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'document', 'vch', 'code', 'count', 'in', 'out', 'status', 'salary', 'source', 'icon'];
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
