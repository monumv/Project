import { Component, OnInit, ViewEncapsulation, ViewChild, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DialogComponent implements OnInit {

  
  myControl = new FormControl();
  options: string[] = ['CP Outlet', 'Geton Infotech Pvt. Ltd.'];
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
  },
  {
    id : '',
  },
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

  constructor(
  @Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<DialogComponent>) { }


  closeDialog(): void {
    this.dialogRef.close({ event: 'close' });
  }

}
