import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {FormControl} from '@angular/forms';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

import {MatDialog} from '@angular/material/dialog';
import { AddaccountComponent } from '../addaccount/addaccount.component';


export interface PeriodicElement {
  document: string;
  mobile: string;
  pri: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{ document:'', mobile:'', pri:'', action:''}, 
{ document:'', mobile:'', pri:'', action:''}, 
{ document:'', mobile:'', pri:'', action:'add_box'}, 
]
@Component({
  selector: 'app-points-claimed',
  templateUrl: './points-claimed.component.html',
  styleUrls: ['./points-claimed.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PointsClaimedComponent implements OnInit {

 numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  
row2 = [
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



row3 = [
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


    


 constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(AddaccountComponent);
  }
  ngOnInit(): void {
  }


}
