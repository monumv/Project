import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  myControls = new FormControl();
  optionss: string[] = ['Abhinandan Prakash(364)', 'Yash Bhatia(49)', 'Jaibir Singh (55)', 'Rukmani Sharma(50)', 'Kavita Upadhyay (53)', 'Sachin Chauhan (43)', 'Vivek Gupta (65)'];


 myControlss = new FormControl();
  optionsss: string[] = ['Sales RM', 'Telesales',];


  
 myControlse = new FormControl();
  optionsse: string[] = ['Sales CRM', 'HRM', 'Finance', 'Distribution', 'Marketing', 'Production', 'Logistics', 'Ivr', 'Support CRM', 'Email', 'Sms'];

 
  myControles = new FormControl();
  optionssss: string[] = ['Medical Leave', 'Casual Leave', 'Special Leave'];
  

  myControless = new FormControl();
  optionsn: string[] = ['0.25', '0.5', '1'];


  myControl = new FormControl();
  options: string[] = ['Abhinandan Prakash(364)', 'Yash Bhatia(49)', 'Jaibir Singh (55)', 'Rukmani Sharma(50)', 'Kavita Upadhyay (53)', 'Sachin Chauhan (43)', 'Vivek Gupta (65)'];
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


  constructor(
  @Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<DialogComponent>) { }


  closeDialog(): void {
    this.dialogRef.close({ event: 'close' });
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

}
