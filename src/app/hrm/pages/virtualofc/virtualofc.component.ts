import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  item: string;
  qty: string;
  pack: string;
  status: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, item: '6546', status: 'Vitual Office', qty: '0',
 pack: '0', icon: 'chevron_right'},
{position: 2, item: '6546', status: 'Vitual Office', qty: '0',
  pack: '0', icon: 'chevron_right'},
{position: 3, item: '6546', status: 'Vitual Office', qty: '0',
   pack: '0', icon: 'chevron_right'},
{position: 4, item: '6546', status: 'Vitual Office', qty: '0',
    pack: '0', icon: 'chevron_right'},
{position: 5, item: '6546', status: 'Vitual Office', qty: '0',
     pack: '0', icon: 'chevron_right'},
{position: 6, item: '6546', status: 'Vitual Office', qty: '0',
      pack: '0', icon: 'chevron_right'},
{position: 7, item: '6546', status: 'Vitual Office', qty: '0',
 pack: '0', icon: 'chevron_right'},
{position: 8, item: '6546', status: 'Vitual Office', qty: '0',
 pack: '0', icon: 'chevron_right'},
{position: 9, item: '6546', status: 'Vitual Office', qty: '0',
 pack: '0', icon: 'chevron_right'},
 {position: 10, item: '6546', status: 'Vitual Office', qty: '0',
  pack: '0', icon: 'chevron_right'},
 

 ];



interface Number {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-virtualofc',
  templateUrl: './virtualofc.component.html',
  styleUrls: ['./virtualofc.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class VirtualofcComponent implements OnInit {

  
  displayedColumns: string[] = ['select', 'position', 'item','status', 'qty', 'pack', 'icon'];
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
