import { Component, OnInit, ViewEncapsulation, ViewChild, } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  item:string;
  code:string;
  itgroup: string;
  test: string;
  test2: string;
  sale: string;
  work:string;
  purchase:string;
  require: string;
  pack: string;
  produce: string;
  subn:string;
  subd: string;
  schedule: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, subn:'476', subd:'27-Aug-2020',  item:'GetOn Infotech Pvt. Ltd.', test:'',  code:'Ram infotech', test2:'', itgroup: 'Lorem Ipsum', 
sale:'10', work:'10,000', purchase:'Lorem', require:'535', pack:'test', produce:'Returned', 
schedule:'31-Aug-2020', icon:'chevron_right'},
{position: 2, subn:'476', subd:'27-Aug-2020',  item:'GetOn Infotech Pvt. Ltd.', test:'',  code:'Ram infotech', test2:'', itgroup: 'Lorem Ipsum', 
sale:'10', work:'10,000', purchase:'Lorem', require:'535', pack:'test', produce:'Returned', 
schedule:'31-Aug-2020', icon:'chevron_right'},
{position: 3, subn:'476', subd:'27-Aug-2020',  item:'GetOn Infotech Pvt. Ltd.', test:'',  code:'Ram infotech', test2:'', itgroup: 'Lorem Ipsum', 
sale:'10', work:'10,000', purchase:'Lorem', require:'535', pack:'test', produce:'Returned', 
schedule:'31-Aug-2020', icon:'chevron_right'},
{position: 4, subn:'476', subd:'27-Aug-2020',  item:'GetOn Infotech Pvt. Ltd.', test:'',  code:'Ram infotech', test2:'', itgroup: 'Lorem Ipsum', 
sale:'10', work:'10,000', purchase:'Lorem', require:'535', pack:'test', produce:'Returned', 
schedule:'31-Aug-2020', icon:'chevron_right'},
{position: 5, subn:'476', subd:'27-Aug-2020',  item:'GetOn Infotech Pvt. Ltd.', test:'',  code:'Ram infotech', test2:'', itgroup: 'Lorem Ipsum', 
sale:'10', work:'10,000', purchase:'Lorem', require:'535', pack:'test', produce:'Returned', 
schedule:'31-Aug-2020', icon:'chevron_right'},
{position: 6, subn:'476', subd:'27-Aug-2020',  item:'GetOn Infotech Pvt. Ltd.', test:'',  code:'Ram infotech', test2:'', itgroup: 'Lorem Ipsum', 
sale:'10', work:'10,000', purchase:'Lorem', require:'535', pack:'test', produce:'Returned', 
schedule:'31-Aug-2020', icon:'chevron_right'},
{position: 7, subn:'476', subd:'27-Aug-2020',  item:'GetOn Infotech Pvt. Ltd.', test:'',  code:'Ram infotech', test2:'', itgroup: 'Lorem Ipsum', 
sale:'10', work:'10,000', purchase:'Lorem', require:'535', pack:'test', produce:'Returned', 
schedule:'31-Aug-2020', icon:'chevron_right'},
{position: 8, subn:'476', subd:'27-Aug-2020',  item:'GetOn Infotech Pvt. Ltd.', test:'',  code:'Ram infotech', test2:'', itgroup: 'Lorem Ipsum', 
sale:'10', work:'10,000', purchase:'Lorem', require:'535', pack:'test', produce:'Returned', 
schedule:'31-Aug-2020', icon:'chevron_right'},
{position: 9, subn:'476', subd:'27-Aug-2020',  item:'GetOn Infotech Pvt. Ltd.', test:'',  code:'Ram infotech', test2:'', itgroup: 'Lorem Ipsum', 
sale:'10', work:'10,000', purchase:'Lorem', require:'535', pack:'test', produce:'Returned', 
schedule:'31-Aug-2020', icon:'chevron_right'},
{position: 10, subn:'476', subd:'27-Aug-2020',  item:'GetOn Infotech Pvt. Ltd.', test:'',  code:'Ram infotech', test2:'', itgroup: 'Lorem Ipsum', 
sale:'10', work:'10,000', purchase:'Lorem', require:'535', pack:'test', produce:'Returned', 
schedule:'31-Aug-2020', icon:'chevron_right'},

 ];

@Component({
  selector: 'app-returned',
  templateUrl: './returned.component.html',
  styleUrls: ['./returned.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ReturnedComponent implements OnInit {

  
  
  displayedColumns: string[] = ['select', 'position', 'subn', 'subd', 'item', 'test', 'code', 'test2', 'itgroup',
   'sale', 'work', 'purchase', 'require', 'pack', 'produce', 'schedule', 'icon'];
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


}
