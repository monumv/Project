import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatDialog} from '@angular/material/dialog';
import { AddRouteManagementComponent } from '../add-route-management/add-route-management.component';

export interface PeriodicElement {
  position: number;
  date:string;
  vch:string;
  document: string;
  demo:string
  icon: string;
  sender:string;
  template:string;
  approval1:string;
  approval2:string;
  Priority1:string;
  Priority2:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, date:'11005', document: '101', vch:'GetOn Infotech', demo:'Promotional', sender: '005', template: '201012', approval1:'Yes', approval2: 'Update', Priority1: '1', Priority2: 'Update',  icon:'chevron_right'}, 
 

 ];

interface Number {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-route-management',
  templateUrl: './route-management.component.html',
  styleUrls: ['./route-management.component.css']
})
export class RouteManagementComponent implements OnInit {
 displayedColumns: string[] = ['position', 'date', 'document', 'vch', 'demo', 'sender', 'template', 'approval1', 'approval2', 'Priority1', 'Priority2', 'icon' ];

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

   toppings = new FormControl();

  toppingList: string[] = ['Ankit Raheja', 'Amit Kumar', 'Manish Gupta', 'Naresh', 'Shivam Gupta', 'Vivek Gupta'];


   channels = new FormControl();

  channelsList: string[] = ['Sms', ];



   communication = new FormControl();

  communicationList: string[] = ['Test', 'Test by Mohit', 'Test Number', 'Test Msg' ];


   network = new FormControl();

  networkList: string[] = ['T-Mobile HR', 'Sunrise', 'Mobitel', 'Beeline' ];


constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddRouteManagementComponent,{
      panelClass: 'form-dialog'}
      );
    
  }

  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

 myControl = new FormControl();
  options: string[] = ['Emporiss111', 'MohitDND', ];
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

 myControls = new FormControl();
  optionss: string[] = ['One', 'Two', 'Three'];

}

