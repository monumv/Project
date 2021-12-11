import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips'; import { MatSidenav } from '@angular/material/sidenav';


export interface PeriodicElement {
  name: string;
  position: number;
  departmentname: string;
  hod: string;
  totalpositions: string;
  hired: string;
  vacant: string;
  expectedclosure1: string;
  leadsource: string;
  email: string;
  phone: string;
  teamright: string;
  adminright: string;
  view: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'CRM', departmentname: '', view: '', hod: '', totalpositions: '', hired: '', vacant: '', expectedclosure1: '', leadsource: 'Configure', email: 'rishabh@gmail.com', teamright: '', adminright: '', phone: '91 987654323130' },

  { position: 2, name: 'Payroll', departmentname: '', view: '', hod: '', totalpositions: '', hired: '', vacant: '', expectedclosure1: '', leadsource: 'Configure', email: 'rishabh@gmail.com', teamright: '', adminright: '', phone: '91 987654323130' },

  { position: 3, name: 'Sales & Marketing', departmentname: '', view: '', hod: '', totalpositions: '', hired: '', vacant: '', expectedclosure1: '', leadsource: 'Configure', email: 'rishabh@gmail.com', teamright: '', adminright: '', phone: '91 987654323130' },

  { position: 4, name: 'Accounts', departmentname: '', view: '', hod: '', totalpositions: '', hired: '', vacant: '', expectedclosure1: '', leadsource: 'Configure', email: 'rishabh@gmail.com', teamright: '', adminright: '', phone: '91 987654323130' },

  { position: 5, name: 'IVR/Toll Free', departmentname: '', view: '', hod: '', totalpositions: '', hired: '', vacant: '', expectedclosure1: '', leadsource: 'Configure', email: 'rishabh@gmail.com', teamright: '', adminright: '', phone: '91 987654323130' },

  { position: 6, name: 'Inventory', departmentname: '', view: '', hod: '', totalpositions: '', hired: '', vacant: '', expectedclosure1: '', leadsource: 'Configure', email: 'rishabh@gmail.com', teamright: '', adminright: '', phone: '91 987654323130' },

  { position: 7, name: 'API Banking', departmentname: '', view: '', hod: '', totalpositions: '', hired: '', vacant: '', expectedclosure1: '', leadsource: 'Configure', email: 'rishabh@gmail.com', teamright: '', adminright: '', phone: '91 987654323130' },

  { position: 8, name: 'Support', departmentname: '', view: '', hod: '', totalpositions: '', hired: '', vacant: '', expectedclosure1: '', leadsource: 'Configure', email: 'rishabh@gmail.com', teamright: '', adminright: '', phone: '91 987654323130' },

  { position: 9, name: 'Production', departmentname: '', view: '', hod: '', totalpositions: '', hired: '', vacant: '', expectedclosure1: '', leadsource: 'Configure', email: 'rishabh@gmail.com', teamright: '', adminright: '', phone: '91 987654323130' },

  { position: 10, name: 'Logistics', departmentname: '', view: '', hod: '', totalpositions: '', hired: '', vacant: '', expectedclosure1: '', leadsource: 'Configure', email: 'rishabh@gmail.com', teamright: '', adminright: '', phone: '91 987654323130' },

  { position: 11, name: 'Digital Docs', departmentname: '', view: '', hod: '', totalpositions: '', hired: '', vacant: '', expectedclosure1: '', leadsource: 'Configure', email: 'rishabh@gmail.com', teamright: '', adminright: '', phone: '91 987654323130' },

  { position: 12, name: 'POS', departmentname: '', view: '', hod: '', totalpositions: '', hired: '', vacant: '', expectedclosure1: '', leadsource: 'Configure', email: 'rishabh@gmail.com', teamright: '', adminright: '', phone: '91 987654323130' },



];

@Component({
  selector: 'app-modulerights',
  templateUrl: './modulerights.component.html',
  styleUrls: ['./modulerights.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ModulerightsComponent implements OnInit {


  events: string[] = [];
  opened: boolean;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));



  constructor() {


  }

  displayedColumns: string[] = ['position', 'name', 'departmentname', 'teamright', 'adminright', 'view', 'hod', 'totalpositions', 'hired', 'vacant', 'expectedclosure1', 'leadsource'];
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
  options: string[] = ['Sales RM', 'Telesales'];
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
