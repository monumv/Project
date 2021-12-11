import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormControl} from '@angular/forms';
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
  selector: 'app-createsale',
  templateUrl: './createsale.component.html',
  styleUrls: ['./createsale.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ],
  encapsulation: ViewEncapsulation.None,
})
export class CreatesaleComponent implements OnInit {

  myyControl = new FormControl();
  optionn: string[] = ['Web', 'App'];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myyControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.optionn.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
 
  myControl = new FormControl();
  options: string[] = ['GetON Infotech Pvt. Ltd.GetON Infotech Pvt. Ltd.GetON Infotech Pvt. Ltd.', 'CP Outlet'];


  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

 date = new FormControl(moment());



row = [
  {
    id : '',
  },
  {
    id : '',
  }, 
  {
    id : '',
  },
  {
    id : '',
  },
  {
    id : '',
  }
];

row2 = [
  {
    id : '',
  }
];

addTable() {
  const obj = {
    id: '',
  }
  this.row.push(obj)
}


addTable2() {
  const obj = {
    id: '',
  }
  this.row2.push(obj)
}


deleteRow(x){
  var delBtn = confirm(" Do you want to delete ?");
  if ( delBtn == true ) {
    this.row.splice(x, 1 );
  }   
} 

deleteRow2(x){
  var delBtn = confirm(" Do you want to delete ?");
  if ( delBtn == true ) {
    this.row2.splice(x, 1 );
  }   
} 

    

constructor() {}



}
