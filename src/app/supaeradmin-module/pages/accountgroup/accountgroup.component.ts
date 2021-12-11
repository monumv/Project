import { Component, OnInit, ViewChild, ViewChildren, ViewEncapsulation,  QueryList, ChangeDetectorRef } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTable } from '@angular/material/table'
@Component({
  selector: 'app-accountgroup',
  templateUrl: './accountgroup.component.html',
  styleUrls: ['./accountgroup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountgroupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
