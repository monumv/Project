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
  selector: 'app-approver',
  templateUrl: './approver.component.html',
  styleUrls: ['./approver.component.css'],
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
export class ApproverComponent implements OnInit {

 
 
  myControl = new FormControl();
  options:  string[] = ['Employee Three (57) (three@dialerp.com)', 'test name (56) (test@dialerp.com)', 'Jaibir Singh (55) (jaibir@dialerp.com)', 'Manish (54) (manishjr@dialerp.in)', 'Kavita Upadhyay (53) (info@getoninfotech.com)', 'Sachin Chauhan (43) (sachin@dialerp.com)', 'Vivek Gupta (65) (vivek@dialerp.com)'];
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



  myControlss = new FormControl();
  optionsss: string[] = ['Sales', 'Sales', 'Sales'];


  myControle = new FormControl();
  optionse: string[] = ['Days', 'Count'];



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
