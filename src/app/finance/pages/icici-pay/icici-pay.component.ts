import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ThankyouComponent } from '../thankyou/thankyou.component';

@Component({
  selector: 'app-icici-pay',
  templateUrl: './icici-pay.component.html',
  styleUrls: ['./icici-pay.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IciciPayComponent implements OnInit {

constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ThankyouComponent,{
      panelClass: 'form-dialog'}
      );
    
  }

step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }


  
  ngOnInit(): void {
  }

}
