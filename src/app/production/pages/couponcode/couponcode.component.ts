import { Component, OnInit, ViewEncapsulation, ViewChild, } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { CommondialogComponent } from '../commondialog/commondialog.component';


export interface PeriodicElement {
  position: number;
  date: string;
  endate: string;
  code:string;
  order:string;
  item:string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, date:'24-Aug-2020', endate:'74578', code:'398', order:'1,000', item:'Lorem',  icon:''},
{position: 2, date:'24-Aug-2020', endate:'74578', code:'398', order:'1,000', item:'Lorem',  icon:''},
{position: 3, date:'24-Aug-2020', endate:'74578', code:'398', order:'1,000', item:'Lorem',  icon:''},
{position: 4, date:'24-Aug-2020', endate:'74578', code:'398', order:'1,000', item:'Lorem',  icon:''},
{position: 5, date:'24-Aug-2020', endate:'74578', code:'398', order:'1,000', item:'Lorem',  icon:''},
{position: 6, date:'24-Aug-2020', endate:'74578', code:'398', order:'1,000', item:'Lorem',  icon:''},
{position: 7, date:'24-Aug-2020', endate:'74578', code:'398', order:'1,000', item:'Lorem',  icon:''},
{position: 8, date:'24-Aug-2020', endate:'74578', code:'398', order:'1,000', item:'Lorem',  icon:''},
{position: 9, date:'24-Aug-2020', endate:'74578', code:'398', order:'1,000', item:'Lorem',  icon:''},
{position: 10, date:'24-Aug-2020', endate:'74578', code:'398', order:'1,000', item:'Lorem',  icon:''},
 ];
@Component({
  selector: 'app-couponcode',
  templateUrl: './couponcode.component.html',
  styleUrls: ['./couponcode.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CouponcodeComponent implements OnInit {

 
 
  displayedColumns: string[] = ['select', 'position', 'date', 'endate', 'code', 'order', 'item', 'icon'];
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

    const dialogRef = this.dialog.open(CommondialogComponent, {
      width: width,
      data: {
        dialogObj: {
          dialogType: type
        }
      }
    });}

}
