import { Component, OnInit, ViewEncapsulation, ViewChild, ChangeDetectionStrategy } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';

import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

import { FormControl, FormGroup, Validator, Validators } from '@angular/forms';

export interface PeriodicElement {
  position: number;
  document: string;
  date: string;
  demoo: string;
  demo: string;
  demos: string;
  vch:string;
  endate: string;
  qty: string;
  mobile: string;
  pack: string;
  status: string;
  spillover: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, document:'+91-8804562365',  demoo:'', date:'25-July-2020', demo:'11:32',
mobile:'10:20', endate:'7759375689', demos:'', vch:'Manish Kumar (676)',
status: 'Support', qty: 'Answered', pack: '02:05', spillover:'5', icon: 'chevron_right'},
{position: 2, document:'+91-8804562365',  demoo:'', date:'25-July-2020', demo:'11:32',
mobile:'10:20', endate:'7759375689', demos:'', vch:'Manish Kumar (676)',
status: 'Support', qty: 'Answered', pack: '02:05', spillover:'5', icon: 'chevron_right'},
{position: 3, document:'+91-8804562365',  demoo:'', date:'25-July-2020', demo:'11:32',
mobile:'10:20', endate:'7759375689', demos:'', vch:'Manish Kumar (676)',
status: 'Support', qty: 'Answered', pack: '02:05', spillover:'5', icon: 'chevron_right'},
{position: 4, document:'+91-8804562365',  demoo:'', date:'25-July-2020', demo:'11:32',
mobile:'10:20', endate:'7759375689', demos:'', vch:'Manish Kumar (676)',
status: 'Support', qty: 'Answered', pack: '02:05', spillover:'5', icon: 'chevron_right'},
{position: 5, document:'+91-8804562365',  demoo:'', date:'25-July-2020', demo:'11:32',
mobile:'10:20', endate:'7759375689', demos:'', vch:'Manish Kumar (676)',
status: 'Support', qty: 'Answered', pack: '02:05', spillover:'5', icon: 'chevron_right'},
{position: 6, document:'+91-8804562365',  demoo:'', date:'25-July-2020', demo:'11:32',
mobile:'10:20', endate:'7759375689', demos:'', vch:'Manish Kumar (676)',
status: 'Support', qty: 'Answered', pack: '02:05', spillover:'5', icon: 'chevron_right'},
{position: 7, document:'+91-8804562365',  demoo:'', date:'25-July-2020', demo:'11:32',
mobile:'10:20', endate:'7759375689', demos:'', vch:'Manish Kumar (676)',
status: 'Support', qty: 'Answered', pack: '02:05', spillover:'5', icon: 'chevron_right'},
{position: 8, document:'+91-8804562365',  demoo:'', date:'25-July-2020', demo:'11:32',
mobile:'10:20', endate:'7759375689', demos:'', vch:'Manish Kumar (676)',
status: 'Support', qty: 'Answered', pack: '02:05', spillover:'5', icon: 'chevron_right'},
{position: 9, document:'+91-8804562365',  demoo:'', date:'25-July-2020', demo:'11:32',
mobile:'10:20', endate:'7759375689', demos:'', vch:'Manish Kumar (676)',
status: 'Support', qty: 'Answered', pack: '02:05', spillover:'5', icon: 'chevron_right'},
{position: 10, document:'+91-8804562365',  demoo:'', date:'25-July-2020', demo:'11:32',
mobile:'10:20', endate:'7759375689', demos:'', vch:'Manish Kumar (676)',
status: 'Support', qty: 'Answered', pack: '02:05', spillover:'5', icon: 'chevron_right'},



];
@Component({
  selector: 'app-ivresponses',
  templateUrl: './ivresponses.component.html',
  styleUrls: ['./ivresponses.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IvresponsesComponent implements OnInit {

// Pie
public pieChartOptions: ChartOptions = {
  responsive: true,
};
public pieChartLabels: Label[] = [['Answered'], ['Unanswered']];
public pieChartData: SingleDataSet = [789, 150];
public pieChartType: ChartType = 'pie';
public pieChartLegend = true;
public pieChartPlugins = [];
  
  displayedColumns: string[] = ['select', 'position', 'document', 'demoo', 'date',
    'mobile', 'endate', 'demos', 'vch', 'status', 'demo', 'qty', 'pack', 'spillover', 'icon'];
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
