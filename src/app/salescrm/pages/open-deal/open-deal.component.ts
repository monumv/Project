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

import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { DialogComponent } from '../dialog/dialog.component';

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
  createdate: string;
  createtime: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: '101', email:'nativejain@yahoo.co.in', phone:'+91-9707325544', departmentname: '  Pankaj Impex (223)', details:'Retailer', hod: 'Rishabh Jain', totalpositions:'60000', percentage:'1%',  star:'',  hired:'Contact Made', vacant:'Nitul Aggarwal (12)', expectedclosure1:'30-Jun-2020', leadsource:'IndiaMart', timeleft:'1 Days(s)', createdate: '06-Aug-2020', createtime: '10:15 AM'},

  {position: 2, name: '101', email:'nativejain@yahoo.co.in', phone:'+91-9707325544', departmentname: '  Pankaj Impex (223)', details:'Retailer', hod: 'Rishabh Jain', totalpositions:'60000', percentage:'1%',  star:'',  hired:'Contact Made', vacant:'Nitul Aggarwal (12)', expectedclosure1:'30-Jun-2020', leadsource:'IndiaMart', timeleft:'1 Days(s)', createdate: '06-Aug-2020', createtime: '10:15 AM'},

  {position: 3, name: '101', email:'nativejain@yahoo.co.in', phone:'+91-9707325544', departmentname: '  Pankaj Impex (223)', details:'Retailer', hod: 'Rishabh Jain', totalpositions:'60000', percentage:'1%',  star:'',  hired:'Contact Made', vacant:'Nitul Aggarwal (12)', expectedclosure1:'30-Jun-2020', leadsource:'IndiaMart', timeleft:'1 Days(s)', createdate: '06-Aug-2020', createtime: '10:15 AM'},

  {position: 4, name: '101', email:'nativejain@yahoo.co.in', phone:'+91-9707325544', departmentname: '  Pankaj Impex (223)', details:'Retailer', hod: 'Rishabh Jain', totalpositions:'60000', percentage:'1%',  star:'',  hired:'Contact Made', vacant:'Nitul Aggarwal (12)', expectedclosure1:'30-Jun-2020', leadsource:'IndiaMart', timeleft:'1 Days(s)', createdate: '06-Aug-2020', createtime: '10:15 AM'},

  {position: 5, name: '101', email:'nativejain@yahoo.co.in', phone:'+91-9707325544', departmentname: '  Pankaj Impex (223)', details:'Retailer', hod: 'Rishabh Jain', totalpositions:'60000', percentage:'1%',  star:'',  hired:'Contact Made', vacant:'Nitul Aggarwal (12)', expectedclosure1:'30-Jun-2020', leadsource:'IndiaMart', timeleft:'1 Days(s)', createdate: '06-Aug-2020', createtime: '10:15 AM'},

];

@Component({
  selector: 'app-open-deal',
  templateUrl: './open-deal.component.html',
  styleUrls: ['./open-deal.component.css']
})
export class OpenDealComponent implements OnInit {


 public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartType: ChartType = 'horizontalBar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], label: '14 Expected Win', stack: 'a' },
    { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], label: '30 Proposal', stack: 'a' },
    { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], label: '77 Meeting', stack: 'a' },
    { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], label: '373 Contact Made', stack: 'a' },
    { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], label: '408 Not Contacted', stack: 'a' },
    { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], label: '2 Not Rated', stack: 'a' },
  ];
  public barChartLabels: string[] = ['IndiaMart', 'JustDial-Web', 'Signup Lead', 'Personal Reference', 'JustDial-CRM', 'JustDial-ERP ','IndiaMart', 'JustDial-Web', 'Signup Lead', 'Personal Reference', 'JustDial-CRM', 'JustDial-ERP '];


 // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Achieve Amount'], ['Pending Amount']];
  public pieChartData: SingleDataSet = [800000, 200000];

   public pieChartLabelss: Label[] = [['Indiamart'], ['ContactUs'], ['Justdial']];
  public pieChartDatas: SingleDataSet = [8, 6, 1];
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

  

 

 constructor(public dialog: MatDialog) {

  monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
 }


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


  displayedColumns: string[] = ['select', 'position', 'createdate', 'name', 'departmentname', 'hod', 'totalpositions', 'hired', 'vacant', 'expectedclosure1', 'leadsource'];
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

   
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}
