import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { CommondialogComponent } from '../commondialog/commondialog.component';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.css']
})
export class RewardsComponent implements OnInit {

 
constructor(public dialog: MatDialog) {}

 openDialog(type: string) {
    var width = "";

    const dialogRef = this.dialog.open(CommondialogComponent, {
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
