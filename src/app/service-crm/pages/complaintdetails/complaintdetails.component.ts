import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'app-complaintdetails',
  templateUrl: './complaintdetails.component.html',
  styleUrls: ['./complaintdetails.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ComplaintdetailsComponent implements OnInit {

constructor(public dialog: MatDialog) {}

 openDialog(type: string) {
    var width = "";

    const dialogRef = this.dialog.open(DialogComponent, {
      width: width,
      data: {
        dialogObj: {
          dialogType: type
        }
      }
    });}
 

  ngOnInit(): void {
  }


}
