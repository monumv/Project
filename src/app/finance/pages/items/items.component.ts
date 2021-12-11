import { Component, OnInit, ViewEncapsulation, ViewChild,  Directive, HostBinding } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';
Directive({
  selector: 'a[target=_blank]',
})

import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface PeriodicElement {
  position: number;
  erp:string;
  status: string;
  code: string;
  alias: string;
  group: string;
  unit: string;
  pack: string;
  mrp: string;  
  tax: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, erp:'17', status: 'Raw Plastic', code:'RP', alias:'Plastic', group:'Stationary (682)', unit:'Nos', pack:'20', mrp:'20', tax:'18%', icon: 'chevron_right'},
{position: 2, erp:'17', status: 'Raw Plastic', code:'RP', alias:'Plastic', group:'Stationary (682)', unit:'Nos', pack:'20', mrp:'20', tax:'18%', icon: 'chevron_right'}, 
{position: 3, erp:'17', status: 'Raw Plastic', code:'RP', alias:'Plastic', group:'Stationary (682)', unit:'Nos', pack:'20', mrp:'20', tax:'18%', icon: 'chevron_right'}, 
{position: 4, erp:'17', status: 'Raw Plastic', code:'RP', alias:'Plastic', group:'Stationary (682)', unit:'Nos', pack:'20', mrp:'20', tax:'18%', icon: 'chevron_right'}, 
{position: 5, erp:'17', status: 'Raw Plastic', code:'RP', alias:'Plastic', group:'Stationary (682)', unit:'Nos', pack:'20', mrp:'20', tax:'18%', icon: 'chevron_right'}, 
{position: 6, erp:'17', status: 'Raw Plastic', code:'RP', alias:'Plastic', group:'Stationary (682)', unit:'Nos', pack:'20', mrp:'20', tax:'18%', icon: 'chevron_right'}, 
{position: 7, erp:'17', status: 'Raw Plastic', code:'RP', alias:'Plastic', group:'Stationary (682)', unit:'Nos', pack:'20', mrp:'20', tax:'18%', icon: 'chevron_right'}, 
{position: 8, erp:'17', status: 'Raw Plastic', code:'RP', alias:'Plastic', group:'Stationary (682)', unit:'Nos', pack:'20', mrp:'20', tax:'18%', icon: 'chevron_right'}, 
{position: 9, erp:'17', status: 'Raw Plastic', code:'RP', alias:'Plastic', group:'Stationary (682)', unit:'Nos', pack:'20', mrp:'20', tax:'18%', icon: 'chevron_right'}, 
{position: 10, erp:'17', status: 'Raw Plastic', code:'RP', alias:'Plastic', group:'Stationary (682)', unit:'Nos', pack:'20', mrp:'20', tax:'18%', icon: 'chevron_right'}, 
{position: 11, erp:'17', status: 'Raw Plastic', code:'RP', alias:'Plastic', group:'Stationary (682)', unit:'Nos', pack:'20', mrp:'20', tax:'18%', icon: 'chevron_right'}, 
{position: 12, erp:'17', status: 'Raw Plastic', code:'RP', alias:'Plastic', group:'Stationary (682)', unit:'Nos', pack:'20', mrp:'20', tax:'18%', icon: 'chevron_right'},  


 ];



interface Number {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class ItemsComponent implements OnInit {
  @HostBinding('attr.rel') rel = 'noopener noreferrer';
 
  displayedColumns: string[] = ['select', 'position', 'erp', 'status',
   'code', 'alias', 'group', 'unit', 'pack', 'mrp', 'tax', 'icon'];

  datass = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.datass.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.datass.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  ngOnInit(): void {
  }

  @ViewChild('sidenav') sidenav: MatSidenav;

  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));


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

}
