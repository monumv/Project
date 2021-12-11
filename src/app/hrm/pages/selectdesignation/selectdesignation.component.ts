import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-selectdesignation',
  templateUrl: './selectdesignation.component.html',
  styleUrls: ['./selectdesignation.component.css']
})
export class SelectdesignationComponent implements OnInit {


  myControl = new FormControl();
  options: string[] = ['Sales RM', 'Telesales',];
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


  constructor(public dialogRef: MatDialogRef<SelectdesignationComponent>,) { }


  closeDialog(): void {
    this.dialogRef.close({ event: 'close' });
  }
}
