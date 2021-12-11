import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';

import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import {MatDialog} from '@angular/material/dialog';



export interface PeriodicElement {
  position: number;
  date: string;
  hrs: string;
  id: string;
  dms: string;
  document: string;
  complaint: string;
  customer: string;
  name:string;
  dm:string;
  dsm:string;
  amt: string;
  dr: string;
  vch: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, date:'25-Oct-2020', hrs:'5h', id:'200928-0001', dms:'', document:'Item Name1 (356)',  complaint:'Installation', customer:'Rajat Kumar (546)', dsm:'', name:'GetOn Infotect (347)', dm:'', amt:'Rajesh Kumar (493)', dr:'', vch: '28-Oct-2020',  icon: ''},
{position: 2, date:'25-Oct-2020', hrs:'5h', id:'200928-0001', dms:'', document:'Item Name1 (356)',  complaint:'Installation', customer:'Rajat Kumar (546)', dsm:'', name:'GetOn Infotect (347)', dm:'', amt:'Rajesh Kumar (493)', dr:'', vch: '28-Oct-2020',  icon: ''},
{position: 3, date:'25-Oct-2020', hrs:'5h', id:'200928-0001', dms:'', document:'Item Name1 (356)',  complaint:'Installation', customer:'Rajat Kumar (546)', dsm:'', name:'GetOn Infotect (347)', dm:'', amt:'Rajesh Kumar (493)', dr:'', vch: '28-Oct-2020',  icon: ''},
{position: 4, date:'25-Oct-2020', hrs:'5h', id:'200928-0001', dms:'', document:'Item Name1 (356)',  complaint:'Installation', customer:'Rajat Kumar (546)', dsm:'', name:'GetOn Infotect (347)', dm:'', amt:'Rajesh Kumar (493)', dr:'', vch: '28-Oct-2020',  icon: ''},
{position: 5, date:'25-Oct-2020', hrs:'5h', id:'200928-0001', dms:'', document:'Item Name1 (356)',  complaint:'Installation', customer:'Rajat Kumar (546)', dsm:'', name:'GetOn Infotect (347)', dm:'', amt:'Rajesh Kumar (493)', dr:'', vch: '28-Oct-2020',  icon: ''},
{position: 6, date:'25-Oct-2020', hrs:'5h', id:'200928-0001', dms:'', document:'Item Name1 (356)',  complaint:'Installation', customer:'Rajat Kumar (546)', dsm:'', name:'GetOn Infotect (347)', dm:'', amt:'Rajesh Kumar (493)', dr:'', vch: '28-Oct-2020',  icon: ''},
{position: 7, date:'25-Oct-2020', hrs:'5h', id:'200928-0001', dms:'', document:'Item Name1 (356)',  complaint:'Installation', customer:'Rajat Kumar (546)', dsm:'', name:'GetOn Infotect (347)', dm:'', amt:'Rajesh Kumar (493)', dr:'', vch: '28-Oct-2020',  icon: ''},
{position: 8, date:'25-Oct-2020', hrs:'5h', id:'200928-0001', dms:'', document:'Item Name1 (356)',  complaint:'Installation', customer:'Rajat Kumar (546)', dsm:'', name:'GetOn Infotect (347)', dm:'', amt:'Rajesh Kumar (493)', dr:'', vch: '28-Oct-2020',  icon: ''},
{position: 9, date:'25-Oct-2020', hrs:'5h', id:'200928-0001', dms:'', document:'Item Name1 (356)',  complaint:'Installation', customer:'Rajat Kumar (546)', dsm:'', name:'GetOn Infotect (347)', dm:'', amt:'Rajesh Kumar (493)', dr:'', vch: '28-Oct-2020',  icon: ''},
{position: 10, date:'25-Oct-2020', hrs:'5h', id:'200928-0001', dms:'', document:'Item Name1 (356)',  complaint:'Installation', customer:'Rajat Kumar (546)', dsm:'', name:'GetOn Infotect (347)', dm:'', amt:'Rajesh Kumar (493)', dr:'', vch: '28-Oct-2020',  icon: ''},
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

public pieChartLabels3 = ['24 Hours', '48 Hours', '72 Hours', '72+ Hours'];
  public pieChartData3 = [125, 100, 25, 25];
  public pieChartType3 = 'pie';
  


  
  displayedColumns: string[] = ['select', 'position','date', 'hrs', 'id', 'dms',  'document', 'complaint', 'customer', 'dsm', 'name', 'dm', 'amt', 'dr', 'vch', 'icon'];
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


   
  constructor() {}
  
  

  ngOnInit(): void {
  }

}
