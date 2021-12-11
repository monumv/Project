import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import {MatDialog} from '@angular/material/dialog';



export interface PeriodicElement {
  position: number;
  id: string;
  date: string;
  document: string;
  demoo: string;
  complaint: string;
  demo: string;
  order: string;
  name:string;
  amt: string;
  vch: string;
  status: string;
  qty: string;
  pack: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, id:'465', date:'25-July-2020', document:'Rahul Singh (223)', 
 demoo:'', complaint:'Lucky Store (838)', demo:'',
 order:'566', name:'crocin 500mg	', amt:'52', vch: 'Refund', 
 status: 'Ganga Apartment', qty: '', pack: 'Lucky Singh (536)'},
 {position: 2, id:'465', date:'25-July-2020', document:'Rahul Singh (223)', 
  demoo:'', complaint:'Lucky Store (838)', demo:'',
  order:'566', name:'crocin 500mg	', amt:'52', vch: 'Refund', 
  status: 'Ganga Apartment', qty: '', pack: 'Lucky Singh (536)'},
{position: 3, id:'465', date:'25-July-2020', document:'Rahul Singh (223)', 
 demoo:'', complaint:'Lucky Store (838)', demo:'',
 order:'566', name:'crocin 500mg	', amt:'52', vch: 'Call Back', 
 status: 'Ganga Apartment', qty: '', pack: 'Lucky Singh (536)'},
{position: 4, id:'465', date:'25-July-2020', document:'Rahul Singh (223)', 
 demoo:'', complaint:'Lucky Store (838)', demo:'',
 order:'566', name:'crocin 500mg	', amt:'52', vch: 'Call Back', 
 status: 'Ganga Apartment', qty: '', pack: 'Lucky Singh (536)'},
{position: 5, id:'465', date:'25-July-2020', document:'Rahul Singh (223)', 
 demoo:'', complaint:'Lucky Store (838)', demo:'',
 order:'566', name:'crocin 500mg	', amt:'52', vch: 'Refund', 
 status: 'Ganga Apartment', qty: '', pack: 'Lucky Singh (536)'},
{position: 6, id:'465', date:'25-July-2020', document:'Rahul Singh (223)', 
 demoo:'', complaint:'Lucky Store (838)', demo:'',
 order:'566', name:'crocin 500mg	', amt:'52', vch: 'Refund', 
 status: 'Ganga Apartment', qty: '', pack: 'Lucky Singh (536)'},

 ];
@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styleUrls: ['./open.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OpenComponent implements OnInit {

// Pie
public pieChartOptions: ChartOptions = {
  responsive: true,
};

public pieChartLabels3 = ['24 Hours', '48 Hours', '72 Hours', '72 Hours'];
  public pieChartData3 = [125, 100, 25, 25];
  public pieChartType3 = 'pie';
  

  public pieChartLabels = ['Lucky Store', 'Rahul Store', 'Jay Store'];
  public pieChartData = [125, 100, 50];
  public pieChartType = 'pie';

  public pieChartLabels2 = ['Refund', 'Exchange'];
  public pieChartData2 = [125, 100];
  public pieChartType2 = 'pie';


  
  displayedColumns: string[] = ['select', 'position', 'id', 'date', 'document', 'demoo', 
    'complaint', 'demo', 'order', 'name', 'amt', 'vch', 'status', 'qty', 'pack'];
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



}
