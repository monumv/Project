import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {default as _rollupMoment} from 'moment';



const moment = _rollupMoment || _moment;

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
})
export class AddaccountComponent implements OnInit {

  


  myControl = new FormControl();
  options: string[] = ['Office Admin', 'Android App Developer', 'Branch Office', 'Customer', 'Director', 'Fixed Assets', 'Graphic Designer', 'Head Office', 'GST', 'HR Manager', 'Implementation Manager', 'IOS App Developer', 'Outlet', 'Peon', 'Purchase Accounts', 'Sale Accounts', 'Software Developer', 'Sr Accountant', 'Sr Development Head', 'Sr Sales RM', 'Support Executive', 'Telecaller', 'Web Designer' ];
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
  optionss: string[] = ['CP Outlet (Central Delhi)', 'GetON Onfotech Pvt. Ltd. (Noida)'];


  myControlss = new FormControl();
  optionsss: string[] = ['Lead', 'Onboarded', 'Dropped'];


  myControle = new FormControl();
  optionse: string[] = ['Male', 'Female'];


  myControles = new FormControl();
  optionses: string[] = ['Saving', 'Current'];


  constructor() { }

 numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

 date = new FormControl(moment());



}
