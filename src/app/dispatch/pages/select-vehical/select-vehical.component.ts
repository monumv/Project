import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  order: string;
  items: number;
  amount: string;
  pendingitems: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {order: 'HRCA1236', items: 30, amount:'30', pendingitems:'30'},
  {order: 'HRCA1236', items: 30, amount:'30', pendingitems:'30'},
  {order: 'HRCA1236', items: 30, amount:'30', pendingitems:'30'},
];
 
@Component({
  selector: 'app-select-vehical',
  templateUrl: './select-vehical.component.html',
  styleUrls: ['./select-vehical.component.css']
})
export class SelectVehicalComponent implements OnInit {

 @ViewChild(MatAccordion) accordion: MatAccordion;

	displayedColumns: string[] = ['select', 'order', 'items', 'amount', 'pendingitems'];
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



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

}