import { Component, OnInit, ViewEncapsulation, ViewChild, } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  item:string;
  code:string;
  itgroup: string;
  sale: string;
  work:string;
  purchase:string;
  require: string;
  pack: string;
  produce: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, item:'Raw Plastic',  code:'RP', itgroup: 'Stationary', 
sale:'-1000', work:'0', purchase:'0', require:'0', pack:'-1000', produce:'', icon:'chevron_right'},
{position: 2, item:'Raw Plastic',  code:'RP', itgroup: 'Stationary', 
sale:'-1000', work:'0', purchase:'0', require:'0', pack:'-1000', produce:'', icon:'chevron_right'},
{position: 3, item:'Raw Plastic',  code:'RP', itgroup: 'Stationary', 
sale:'-1000', work:'0', purchase:'0', require:'0', pack:'-1000', produce:'', icon:'chevron_right'},
{position: 4, item:'Raw Plastic',  code:'RP', itgroup: 'Stationary', 
sale:'-1000', work:'0', purchase:'0', require:'0', pack:'-1000', produce:'', icon:'chevron_right'},
{position: 5, item:'Raw Plastic',  code:'RP', itgroup: 'Stationary', 
sale:'-1000', work:'0', purchase:'0', require:'0', pack:'-1000', produce:'', icon:'chevron_right'},
{position: 6, item:'Raw Plastic',  code:'RP', itgroup: 'Stationary', 
sale:'-1000', work:'0', purchase:'0', require:'0', pack:'-1000', produce:'', icon:'chevron_right'},
{position: 7, item:'Raw Plastic',  code:'RP', itgroup: 'Stationary', 
sale:'-1000', work:'0', purchase:'0', require:'0', pack:'-1000', produce:'', icon:'chevron_right'},
{position: 8, item:'Raw Plastic',  code:'RP', itgroup: 'Stationary', 
sale:'-1000', work:'0', purchase:'0', require:'0', pack:'-1000', produce:'', icon:'chevron_right'},
{position: 9, item:'Raw Plastic',  code:'RP', itgroup: 'Stationary', 
sale:'-1000', work:'0', purchase:'0', require:'0', pack:'-1000', produce:'', icon:'chevron_right'},
{position: 10, item:'Raw Plastic',  code:'RP', itgroup: 'Stationary', 
sale:'-1000', work:'0', purchase:'0', require:'0', pack:'-1000', produce:'', icon:'chevron_right'},


 ];
@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PurchaseComponent implements OnInit {

 
  displayedColumns: string[] = ['select', 'position', 'item', 'code', 'itgroup',
   'sale', 'work', 'purchase', 'require', 'pack', 'produce', 'icon'];
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
