import { Component, OnInit, ViewEncapsulation, ViewChild, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';



export interface PeriodicElement {
  position: number;
  document: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, document:''}, 
{position: 2, document:''}, 
{position: 3, document:''}, 
{position: 4, document:''}, 
{position: 5, document:''}, 
{position: 6, document:''}, 
{position: 7, document:''}, 
{position: 8, document:''}, 
{position: 9, document:''}, 
{position: 10, document:''}, 
]

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent implements OnInit {

 
  constructor(
  @Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<DialogComponent>) { }


  closeDialog(): void {
    this.dialogRef.close({ event: 'close' });
  }


  displayedColumns: string[] = ['select', 'position', 'document', ];
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

}
