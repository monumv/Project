import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ThankyouComponent } from '../thankyou/thankyou.component';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

 constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ThankyouComponent,{
      panelClass: 'form-dialog'}
      );
    
  }

  ngOnInit(): void {
  }

}
