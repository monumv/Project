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
  items: string;
  amount: string;
  pendingitems: string;
}

export interface Section {
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {order: 'Small / Blue / Cotton', items: '20 Available', amount:'₹ 200', pendingitems:'30'},
  {order: 'Small / Blue / Cotton', items: '20 Available', amount:'₹ 200', pendingitems:'30'},
  {order: 'Small / Blue / Cotton', items: '20 Available', amount:'₹ 200', pendingitems:'30'},
  {order: 'Small / Blue / Cotton', items: '20 Available', amount:'₹ 200', pendingitems:'30'},
  {order: 'Small / Blue / Cotton', items: '20 Available', amount:'₹ 200', pendingitems:'30'},
  {order: 'Small / Blue / Cotton', items: '20 Available', amount:'₹ 200', pendingitems:'30'},
  {order: 'Small / Blue / Cotton', items: '20 Available', amount:'₹ 200', pendingitems:'30'},
  {order: 'Small / Blue / Cotton', items: '20 Available', amount:'₹ 200', pendingitems:'30'},
  {order: 'Small / Blue / Cotton', items: '20 Available', amount:'₹ 200', pendingitems:'30'},
  {order: 'Small / Blue / Cotton', items: '20 Available', amount:'₹ 200', pendingitems:'30'},
];
@Component({
  selector: 'app-add-collections',
  templateUrl: './add-collections.component.html',
  styleUrls: ['./add-collections.component.css']
})
export class AddCollectionsComponent implements OnInit {


folders: Section[] = [
    {
      name: 'Athletic Accessories',
    },
    {
      name: 'Fitness Trackers',
    },
    {
      name: 'Athletic Accessories',
    },
    {
      name: 'Fitness Trackers',
    },
  ];

  




  @ViewChild(MatAccordion) accordion: MatAccordion;

	displayedColumns: string[] = ['select', 'order', 'items', 'amount'];
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