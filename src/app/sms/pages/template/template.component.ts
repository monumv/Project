import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {MatSidenav} from '@angular/material/sidenav';

import {MatDialog} from '@angular/material/dialog';
import { AddTemplateComponent } from '../add-template/add-template.component';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TemplateComponent implements OnInit {


  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

 
constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddTemplateComponent,{
      panelClass: 'form-dialog'}
      );
    
  }

  ngOnInit(): void {
  }

}
