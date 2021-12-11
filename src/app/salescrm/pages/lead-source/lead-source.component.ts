import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators'
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';

import {MatSidenav} from '@angular/material/sidenav';




interface Number {
  value: string;
  viewValue: string;
}


export interface PeriodicElement {
  leadsource: string;
  partyname:string;
  action:string;
   position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, leadsource: 'Client Reference', partyname:'Geton Infotech Pvt Ltd', action:''},
  {position: 2, leadsource: 'Facebook', partyname:'Geton Infotech Pvt Ltd', action:''},
  {position: 3, leadsource: 'Google Ad Landing Page', partyname:'Geton Infotech Pvt Ltd', action:''},
  {position: 4, leadsource: 'IndiaMart', partyname:'Geton Infotech Pvt Ltd', action:''},
  {position: 5, leadsource: 'JustDial-CRM', partyname:'Geton Infotech Pvt Ltd', action:''},

    {position: 6, leadsource: 'Client Reference', partyname:'Geton Infotech Pvt Ltd', action:''},
  {position: 7, leadsource: 'Facebook', partyname:'Geton Infotech Pvt Ltd', action:''},
  {position: 8, leadsource: 'Google Ad Landing Page', partyname:'Geton Infotech Pvt Ltd', action:''},
  {position: 9, leadsource: 'IndiaMart', partyname:'Geton Infotech Pvt Ltd', action:''},
  {position: 10, leadsource: 'JustDial-CRM', partyname:'Geton Infotech Pvt Ltd', action:''},

  

];
@Component({
  selector: 'app-lead-source',
  templateUrl: './lead-source.component.html',
  styleUrls: ['./lead-source.component.css']
})
export class LeadSourceComponent implements OnInit {

  events: string[] = [];
  opened: boolean;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  numbers: Number[] = [
    {value: '1', viewValue: '10'},
    {value: '2', viewValue: '20'},
    {value: '3', viewValue: '30'}
  ];

 constructor() {}


  displayedColumns: string[] = ['select', 'position', 'leadsource', 'partyname', 'action'];
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
