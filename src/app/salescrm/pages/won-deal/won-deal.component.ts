import {SelectionModel} from '@angular/cdk/collections';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators'
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';

import {MatSidenav} from '@angular/material/sidenav';

import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';


interface Number {
  value: string;
  viewValue: string;
}


export interface PeriodicElement {
  name: string;
  email:string;
  phone:string;
  position: number;
  departmentname: string;
  hod: string;
  totalpositions:string;
  percentage:string;
  star:string;
  hired:string;
  vacant: string;
  expectedclosure1: string;
  leadsource:string;
  timeleft:string;
  details: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '101', email:'nativejain@yahoo.co.in', phone:'+91-9707325544', departmentname: '  Pankaj Impex (223)', details:'Retailer', hod: 'Rishabh Jain', totalpositions:'60000', percentage:'1%',  star:'',  hired:'Contact Made', vacant:'Nitul Aggarwal (12)', expectedclosure1:'30-Jun-2020', leadsource:'IndiaMart', timeleft:'1 Days(s)'},

  {position: 2, name: '101', email:'nativejain@yahoo.co.in', phone:'+91-9707325544', departmentname: '  Pankaj Impex (223)', details:'Retailer', hod: 'Rishabh Jain', totalpositions:'60000', percentage:'1%',  star:'',  hired:'Contact Made', vacant:'Nitul Aggarwal (12)', expectedclosure1:'30-Jun-2020', leadsource:'IndiaMart', timeleft:'1 Days(s)'},

  {position: 3, name: '101', email:'nativejain@yahoo.co.in', phone:'+91-9707325544', departmentname: '  Pankaj Impex (223)', details:'Retailer', hod: 'Rishabh Jain', totalpositions:'60000', percentage:'1%',  star:'',  hired:'Contact Made', vacant:'Nitul Aggarwal (12)', expectedclosure1:'30-Jun-2020', leadsource:'IndiaMart', timeleft:'1 Days(s)'},

  {position: 4, name: '101', email:'nativejain@yahoo.co.in', phone:'+91-9707325544', departmentname: '  Pankaj Impex (223)', details:'Retailer', hod: 'Rishabh Jain', totalpositions:'60000', percentage:'1%',  star:'',  hired:'Contact Made', vacant:'Nitul Aggarwal (12)', expectedclosure1:'30-Jun-2020', leadsource:'IndiaMart', timeleft:'1 Days(s)'},

  {position: 5, name: '101', email:'nativejain@yahoo.co.in', phone:'+91-9707325544', departmentname: '  Pankaj Impex (223)', details:'Retailer', hod: 'Rishabh Jain', totalpositions:'60000', percentage:'1%',  star:'',  hired:'Contact Made', vacant:'Nitul Aggarwal (12)', expectedclosure1:'30-Jun-2020', leadsource:'IndiaMart', timeleft:'1 Days(s)'},
  

];
@Component({
  selector: 'app-won-deal',
  templateUrl: './won-deal.component.html',
  styleUrls: ['./won-deal.component.css']
})
export class WonDealComponent implements OnInit {


  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Lead'], ['Deal', 'Stage'], 'Deals'];
  public pieChartData: SingleDataSet = [300, 500, 100];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];


events: string[] = [];
  opened: boolean;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  numbers: Number[] = [
    {value: '1', viewValue: '10'},
    {value: '2', viewValue: '20'},
    {value: '3', viewValue: '30'}
  ];

 constructor() {
 monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();

 }

  displayedColumns: string[] = ['select', 'position', 'name', 'departmentname', 'hod', 'totalpositions', 'hired', 'vacant', 'expectedclosure1', 'leadsource'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

 myControl = new FormControl();
   options: string[] = ['Vivek Gupta', 'Sachin Chauhan', 'Mohit Kwatra', 'Amit Kwatra', 'Vivek Gupta', 'Sachin Chauhan', 'Mohit Kwatra', 'Amit Kwatra', 'Vivek Gupta', 'Sachin Chauhan', 'Mohit Kwatra', 'Amit Kwatra'];
  
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

}
