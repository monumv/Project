import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface PeriodicElement {
  position: number;
  document: string;
  work: string;
  item: string;
  qty: string;
  pack: string;
  status: string;
  by: string;
  on: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, document: '23 July, 2020', item: '5', work: 'WO/5/HO1', status: 'Doctor SBI Card (in association with IMA)', qty: '10',
 pack: '10',  by: '10', on: '10', icon: 'chevron_right'},
{position: 2, document: '23 July, 2020', item: '5', work: 'WO/5/HO1', status: 'Doctor SBI Card (in association with IMA)', qty: '10',
  pack: '10',  by: '10', on: '10', icon: 'chevron_right'},
{position: 3, document: '23 July, 2020', item: '5', work: 'WO/5/HO1', status: 'Doctor SBI Card (in association with IMA)', qty: '10',
 pack: '10',  by: '10', on: '10', icon: 'chevron_right'},
{position: 4, document: '23 July, 2020', item: '5', work: 'WO/5/HO1', status: 'Doctor SBI Card (in association with IMA)', qty: '10',
 pack: '10',  by: '10', on: '10', icon: 'chevron_right'},
{position: 5, document: '23 July, 2020', item: '5', work: 'WO/5/HO1', status: 'Doctor SBI Card (in association with IMA)', qty: '10',
pack: '10',  by: '10', on: '10', icon: 'chevron_right'},
{position: 6, document: '23 July, 2020', item: '5', work: 'WO/5/HO1', status: 'Doctor SBI Card (in association with IMA)', qty: '10',
pack: '10',  by: '10', on: '10', icon: 'chevron_right'},
{position: 7, document: '23 July, 2020', item: '5', work: 'WO/5/HO1', status: 'Doctor SBI Card (in association with IMA)', qty: '10',
pack: '10',  by: '10', on: '10', icon: 'chevron_right'},
{position: 8, document: '23 July, 2020', item: '5', work: 'WO/5/HO1', status: 'Doctor SBI Card (in association with IMA)', qty: '10',
pack: '10',  by: '10', on: '10', icon: 'chevron_right'},
{position: 9, document: '23 July, 2020', item: '5', work: 'WO/5/HO1', status: 'Doctor SBI Card (in association with IMA)', qty: '10',
 pack: '10',  by: '10', on: '10', icon: 'chevron_right'},
{position: 10, document: '23 July, 2020', item: '5', work: 'WO/5/HO1', status: 'Doctor SBI Card (in association with IMA)', qty: '10',
 pack: '10',  by: '10', on: '10', icon: 'chevron_right'},
{position: 11, document: '23 July, 2020', item: '5', work: 'WO/5/HO1', status: 'Doctor SBI Card (in association with IMA)', qty: '10',
 pack: '10',  by: '10', on: '10', icon: 'chevron_right'},
{position: 12, document: '23 July, 2020', item: '5', work: 'WO/5/HO1', status: 'Doctor SBI Card (in association with IMA)', qty: '10',
 pack: '10',  by: '10', on: '10', icon: 'chevron_right'},
 ];



interface Number {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-barcodelist',
  templateUrl: './barcodelist.component.html',
  styleUrls: ['./barcodelist.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BarcodelistComponent implements OnInit {


  displayedColumns: string[] = ['select', 'position', 'document', 'item', 'work','status', 'qty', 'pack',  'by', 'on', 'icon'];
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
