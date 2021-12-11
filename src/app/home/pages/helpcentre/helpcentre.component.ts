import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { ThankyouComponent } from '../thankyou/thankyou.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-helpcentre',
  templateUrl: './helpcentre.component.html',
  styleUrls: ['./helpcentre.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HelpcentreComponent implements OnInit {

constructor(public dialog: MatDialog) {}

 openDialog(type: string) {
    var width = "";

    const dialogRef = this.dialog.open(ThankyouComponent, {
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
