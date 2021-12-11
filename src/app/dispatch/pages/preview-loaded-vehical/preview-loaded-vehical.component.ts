import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';


export interface PeriodicElement {
  name: string;
  position: number;
  orderqty: number;
  crt: string;
  pendingqty: string;
  loadedqty: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ananda Milk 500ML', orderqty: 50, loadedqty:'0', crt:'30*500ml', pendingqty:'0'},
  {position: 2, name: 'Ananda Milk 500ML', orderqty: 50, loadedqty:'0', crt:'30*500ml', pendingqty:'0'},
];

@Component({
  selector: 'app-preview-loaded-vehical',
  templateUrl: './preview-loaded-vehical.component.html',
  styleUrls: ['./preview-loaded-vehical.component.css']
})
export class PreviewLoadedVehicalComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'orderqty', 'loadedqty', 'pendingqty'];
 
 dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  


  ngOnInit(): void {
  }
}