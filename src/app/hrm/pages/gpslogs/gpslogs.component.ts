import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

export interface PeriodicElement {
  position: number;
  date: string;
  time: string;
  document: string;
  dem: string;
  endate: string;
  mobile: string;
  acname: string;
  dm: string;
  accuracy: string;
  distance: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, date:'25-Sep-2020', time:'12:20', document:'Vivek Gupta (65)', dem:'1822e9578cf72725',  endate:'xiaomi Mi A2	',  mobile:'Travel Log',  acname:'28.7815171',  dm:'76.3373213', accuracy:'23.6', distance:'0.5', icon: 'chevron_right'}, 

 ];

@Component({
  selector: 'app-gpslogs',
  templateUrl: './gpslogs.component.html',
  styleUrls: ['./gpslogs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GpslogsComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'date', 'time', 'document', 'dem', 'endate', 'mobile', 'acname', 'dm', 'accuracy', 'distance', 'icon'];
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



  public pieChartLabels = ['Travel Log', 'Punch In', 'Punch Out', 'Survey Form', 
  'Order Placed', 'Add Account', 'Edit Account', 'Check In' ];
  public pieChartData = [125, 100, 50, 20, 10, 5, 7, 20];
  public pieChartType = 'pie';

  constructor() {}
  
  
 

  ngOnInit(): void {
  }



}
