import { Component, OnInit, ViewChild, ViewChildren, ViewEncapsulation,  QueryList, ChangeDetectorRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table'
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-complaintgroup',
  templateUrl: './complaintgroup.component.html',
  styleUrls: ['./complaintgroup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ComplaintgroupComponent implements OnInit {
 
 
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
