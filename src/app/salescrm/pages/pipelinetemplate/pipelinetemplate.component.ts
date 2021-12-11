import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators'
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';

import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';



interface Number {
  value: string;
  viewValue: string;
}


export interface PeriodicElement {
  leadsource: string;
  partyname:string;
  action:string;
  position: number;
  apiview: string;
  drop: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, leadsource: '13', partyname:'Field Name 1', action:'Dropdown', apiview:'Pipeline 1', drop:'Add Values',},
  

];
@Component({
  selector: 'app-pipelinetemplate',
  templateUrl: './pipelinetemplate.component.html',
  styleUrls: ['./pipelinetemplate.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PipelinetemplateComponent implements OnInit {

  events: string[] = [];
  opened: boolean;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  numbers: Number[] = [
    {value: '1', viewValue: '10'},
    {value: '2', viewValue: '20'},
    {value: '3', viewValue: '30'}
  ];

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



  displayedColumns: string[] = ['position', 'leadsource', 'partyname', 'action', 'apiview', 'drop'];
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



 myControl = new FormControl();
   options: string[] = ['Vivek Gupta', 'Sachin Chauhan', 'Mohit Kwatra', 'Amit Kwatra', 'Vivek Gupta', 'Sachin Chauhan', 'Mohit Kwatra', 'Amit Kwatra', 'Vivek Gupta', 'Sachin Chauhan', 'Mohit Kwatra', 'Amit Kwatra'];
  
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
