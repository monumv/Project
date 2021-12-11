import { Component, OnInit, ViewEncapsulation, ViewChild, } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';

import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';


export interface PeriodicElement {
  position: number;
  vacant:string;
  vch:string;
  document: string;
  demo:string;
  qty: string;
  pack: string;
  status: string;
  start: string;
  end: string;
  days: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, demo:'13-May-2021 | 12:56PM', vch:'36433', document: 'Gopalji Dairy',  status: 'Mohit Chauhan', qty: 'Active',
 pack: '50', vacant:'40', start:'13-May-21', end:'20-May-21', days:'6',}, 


{position: 2, demo:'13-May-2021 | 12:56PM', vch:'36433', document: 'Gopalji Dairy',  status: 'Mohit Chauhan', qty: 'Active',
 pack: '50', vacant:'40', start:'13-May-21', end:'20-May-21', days:'6',}, 


{position: 3, demo:'13-May-2021 | 12:56PM', vch:'36433', document: 'Gopalji Dairy',  status: 'Mohit Chauhan', qty: 'Active',
 pack: '50', vacant:'40', start:'13-May-21', end:'20-May-21', days:'6',},



{position: 4, demo:'13-May-2021 | 12:56PM', vch:'36433', document: 'Gopalji Dairy',  status: 'Mohit Chauhan', qty: 'Active',
 pack: '50', vacant:'40', start:'13-May-21', end:'20-May-21', days:'6'}, 


{position: 5, demo:'13-May-2021 | 12:56PM', vch:'36433', document: 'Gopalji Dairy',  status: 'Mohit Chauhan', qty: 'Active',
 pack: '50', vacant:'40', start:'13-May-21', end:'20-May-21', days:'6'}, 

 ];

@Component({
  selector: 'app-susbscriberslist',
  templateUrl: './susbscriberslist.component.html',
  styleUrls: ['./susbscriberslist.component.css'],
  encapsulation: ViewEncapsulation.None 
})
export class SusbscriberslistComponent implements OnInit {

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

   public pieChartLabelss: Label[] = [['User Working'], ['User Licence']];
  public pieChartDatas: SingleDataSet = [85, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];


  displayedColumns: string[] = ['select', 'position', 'demo',  'vch', 'document','status', 'pack', 'vacant', 'qty', 'start', 'end', 'days',];
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


  constructor() { }


}
