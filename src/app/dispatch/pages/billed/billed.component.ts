import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  document: string;
  time: string;
  work: string;
  item: string;
  qty: string;
  pack: string;
  status: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, document: '23-July-2020', time: '05:20', work: '7564', item: 'HR268008',  status: 'Rajat Transporter (653)', qty: '10',
 pack: '50,000', icon: 'chevron_right'}, 
{position: 2, document: '23-July-2020', time: '05:20', work: '7564', item: 'HR268008',  status: 'Rajat Transporter (653)', qty: '10',
pack: '50,000', icon: 'chevron_right'},
{position: 3, document: '23-July-2020', time: '05:20', work: '7564', item: 'HR268008',  status: 'Rajat Transporter (653)', qty: '10',
 pack: '50,000', icon: 'chevron_right'},
{position: 4, document: '23-July-2020', time: '05:20', work: '7564', item: 'HR268008',  status: 'Rajat Transporter (653)', qty: '10',
pack: '50,000', icon: 'chevron_right'},
{position: 5, document: '23-July-2020', time: '05:20', work: '7564', item: 'HR268008',  status: 'Rajat Transporter (653)', qty: '10',
 pack: '50,000', icon: 'chevron_right'}, 
{position: 6, document: '23-July-2020', time: '05:20', work: '7564', item: 'HR268008',  status: 'Rajat Transporter (653)', qty: '10',
pack: '50,000', icon: 'chevron_right'},
{position: 7, document: '23-July-2020', time: '05:20', work: '7564', item: 'HR268008',  status: 'Rajat Transporter (653)', qty: '10',
 pack: '50,000', icon: 'chevron_right'}, 
{position: 8, document: '23-July-2020', time: '05:20', work: '7564', item: 'HR268008',  status: 'Rajat Transporter (653)', qty: '10',
pack: '50,000', icon: 'chevron_right'},
{position: 9, document: '23-July-2020', time: '05:20', work: '7564', item: 'HR268008',  status: 'Rajat Transporter (653)', qty: '10',
 pack: '50,000', icon: 'chevron_right'}, 
{position: 10, document: '23-July-2020', time: '05:20', work: '7564', item: 'HR268008',  status: 'Rajat Transporter (653)', qty: '10',
pack: '50,000', icon: 'chevron_right'},
{position: 11, document: '23-July-2020', time: '05:20', work: '7564', item: 'HR268008',  status: 'Rajat Transporter (653)', qty: '10',
pack: '50,000', icon: 'chevron_right'},
{position: 12, document: '23-July-2020', time: '05:20', work: '7564', item: 'HR268008',  status: 'Rajat Transporter (653)', qty: '10',
 pack: '50,000', icon: 'chevron_right'}, 
{position: 13, document: '23-July-2020', time: '05:20', work: '7564', item: 'HR268008',  status: 'Rajat Transporter (653)', qty: '10',
pack: '50,000', icon: 'chevron_right'},
{position: 14, document: '23-July-2020', time: '05:20', work: '7564', item: 'HR268008',  status: 'Rajat Transporter (653)', qty: '10',
pack: '50,000', icon: 'chevron_right'},
{position: 15, document: '23-July-2020', time: '05:20', work: '7564', item: 'HR268008',  status: 'Rajat Transporter (653)', qty: '10',
 pack: '50,000', icon: 'chevron_right'}, 
{position: 16, document: '23-July-2020', time: '05:20', work: '7564', item: 'HR268008',  status: 'Rajat Transporter (653)', qty: '10',
pack: '50,000', icon: 'chevron_right'},

 ];



interface Number {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-billed',
  templateUrl: './billed.component.html',
  styleUrls: ['./billed.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BilledComponent implements OnInit {

  
  displayedColumns: string[] = ['select', 'position', 'document', 'time', 'work', 'item','status', 'qty', 'pack', 'icon'];
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
