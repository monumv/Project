import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  orderqty: number;
  crt: string;
  projectedqty:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Jali', orderqty: 50, crt:'30*500ml', projectedqty:'10'},
  {position: 2, name: 'Box', orderqty: 50, crt:'30*500ml', projectedqty:'10'},
  {position: 3, name: 'CRT', orderqty: 50, crt:'30*500ml', projectedqty:'10'},
  {position: 4, name: 'CV', orderqty: 50, crt:'30*500ml', projectedqty:'10'},
];
@Component({
  selector: 'app-issue-packaging-material',
  templateUrl: './issue-packaging-material.component.html',
  styleUrls: ['./issue-packaging-material.component.css']
})
export class IssuePackagingMaterialComponent implements OnInit {

 displayedColumns: string[] = ['position', 'name', 'projectedqty', 'orderqty'];
 
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

  constructor() {}

 


  ngOnInit(): void {
  }
}