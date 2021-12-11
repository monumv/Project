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
  cv: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  {order: '10', items: 20, amount:'50', cv:'70'},
];

@Component({
  selector: 'app-createprojected',
  templateUrl: './createprojected.component.html',
  styleUrls: ['./createprojected.component.css']
})
export class CreateprojectedComponent implements OnInit {


	  displayedColumns: string[] = ['order', 'items', 'amount', 'cv'];
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

  constructor() { }

  ngOnInit(): void {
  }

}
