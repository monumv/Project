import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-selectmodule',
  templateUrl: './selectmodule.component.html',
  styleUrls: ['./selectmodule.component.css']
})
export class SelectmoduleComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SelectmoduleComponent>, ) { }

  myControl = new FormControl();
  options: string[] = ['Sales CRM', 'HRM', 'Finance', 'Distribution', 'Marketing', 'Production', 'Logistics', 'Ivr', 'Support CRM', 'Email', 'Sms'];
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


  closeDialog(): void {
    this.dialogRef.close({ event: 'close' });
  }

}
