import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {MatDialog} from '@angular/material/dialog';
import { AddnewaddressComponent } from '../addnewaddress/addnewaddress.component';
import { AddnewproductComponent } from '../addnewproduct/addnewproduct.component';
import { ThankyouComponent } from '../thankyou/thankyou.component';
import { AddrowfieldComponent } from '../addrowfield/addrowfield.component';

import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as _moment from 'moment';
import { default as _rollupMoment } from 'moment';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
  purchased: string;
  status:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 5468, name: 'Bluemount RO 25 Ltr. Water Purifier', weight: 'Water Purifier', symbol: 'Ananda-new Delhi 110018', purchased : '29 Nov 2019 In Warranty', status : 'In Warranty'},
  {position: 65788, name: 'Bluemount RO 50 Ltr. Water Purifier', weight: 'Water Purifier', symbol: 'Ananda-Noida 201301', purchased : '22 Nov 2019 In Warranty', status : 'Out of Warranty'},
];

const ELEMENT_DATAA: PeriodicElement[] = [
  {position: 50, name: 'Mr. Vivek Gupta', weight: '+91-9818222333', symbol: 'C-120, Noida Sec-02, Noida, Uttar Pradesh, 201301', purchased : '22 Nov 2019 In Warranty', status : 'Out of Warranty'},
  {position: 50, name: 'Mr. Vivek Gupta', weight: '+91-9818222333', symbol: 'C-120, Noida Sec-02, Noida, Uttar Pradesh, 201301', purchased : '22 Nov 2019 In Warranty', status : 'Out of Warranty'},
];


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
  selector: 'app-requestservice',
  templateUrl: './requestservice.component.html',
  styleUrls: ['./requestservice.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
  encapsulation: ViewEncapsulation.None
})
export class RequestserviceComponent implements OnInit {


displayedColumns: string[] = ['select', 'position', 'name', 'weight', 'symbol', 'purchased', 'status'];
  dataSource = ELEMENT_DATA;

  displayedColumnss: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSources = ELEMENT_DATAA;

myControls = new FormControl();

 myControl = new FormControl();
  options: string[] = ['Bluemount RO 25 Ltr. Water Purifier', 'Bluemount RO 50 Ltr. Water Purifier', 'Bluemount RO 100 Ltr. Water Purifier'];

  optionss: string[] = ['Item Group1', 'Item Group2'];
  optionss1: string[] = ['Problem 1', 'Problem 2', 'Problem 3', 'Problem 4'];
  optionss11: string[] = ['Rajesh Kumar', 'Vikas Jha', 'Pawan Raj', 'Sumit Sharma'];
option12: string[] = ['CP Outlet (Central Delhi)', 'GetON Onfotech Pvt. Ltd. (Noida)'];

  filteredOptions: Observable<string[]>;

 isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });
     this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

 private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  openDialog() {
    this.dialog.open(AddnewaddressComponent);
  }
   openDialog2() {
    this.dialog.open(AddnewproductComponent);
  }
   openDialog3() {
    this.dialog.open(ThankyouComponent);
  }
   openDialog4() {
    this.dialog.open(AddrowfieldComponent);
  }

  
row2 = [
  {
    id : '',
  }
];



addTable2() {
  const obj = {
    id: '',
  }
  this.row2.push(obj)
}



deleteRow2(x){
  var delBtn = confirm(" Do you want to delete ?");
  if ( delBtn == true ) {
    this.row2.splice(x, 1 );
  }   
} 

}
