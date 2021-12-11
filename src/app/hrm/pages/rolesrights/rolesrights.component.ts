import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'app-rolesrights',
  templateUrl: './rolesrights.component.html',
  styleUrls: ['./rolesrights.component.css']
})
export class RolesrightsComponent implements OnInit {

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
