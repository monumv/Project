import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  date:string;
  vch:string;
  document: string;
  demo:string;
  qty: string;
  pack: string;
  status: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, date:'25-July-2020', vch:'873576', document: 'Mangal Kumar (674)', demo:'',  status: 'Garima Infotech (653)', qty: '100',
 pack: '50,000', icon: 'chevron_right'}, 
 {position: 1, date:'25-July-2020', vch:'873576', document: 'Mangal Kumar (674)', demo:'',  status: 'Garima Infotech (653)', qty: '100',
  pack: '50,000', icon: 'chevron_right'}, 

  {position: 1, date:'25-July-2020', vch:'873576', document: 'Mangal Kumar (674)', demo:'',  status: 'Garima Infotech (653)', qty: '100',
  pack: '50,000', icon: 'chevron_right'}, 

  {position: 1, date:'25-July-2020', vch:'873576', document: 'Mangal Kumar (674)', demo:'',  status: 'Garima Infotech (653)', qty: '100',
  pack: '50,000', icon: 'chevron_right'}, 

  {position: 1, date:'25-July-2020', vch:'873576', document: 'Mangal Kumar (674)', demo:'',  status: 'Garima Infotech (653)', qty: '100',
  pack: '50,000', icon: 'chevron_right'}, 

  {position: 1, date:'25-July-2020', vch:'873576', document: 'Mangal Kumar (674)', demo:'',  status: 'Garima Infotech (653)', qty: '100',
  pack: '50,000', icon: 'chevron_right'}, 

  {position: 1, date:'25-July-2020', vch:'873576', document: 'Mangal Kumar (674)', demo:'',  status: 'Garima Infotech (653)', qty: '100',
  pack: '50,000', icon: 'chevron_right'}, 

  {position: 1, date:'25-July-2020', vch:'873576', document: 'Mangal Kumar (674)', demo:'',  status: 'Garima Infotech (653)', qty: '100',
  pack: '50,000', icon: 'chevron_right'}, 

  {position: 1, date:'25-July-2020', vch:'873576', document: 'Mangal Kumar (674)', demo:'',  status: 'Garima Infotech (653)', qty: '100',
  pack: '50,000', icon: 'chevron_right'}, 

  {position: 1, date:'25-July-2020', vch:'873576', document: 'Mangal Kumar (674)', demo:'',  status: 'Garima Infotech (653)', qty: '100',
  pack: '50,000', icon: 'chevron_right'}, 

  {position: 1, date:'25-July-2020', vch:'873576', document: 'Mangal Kumar (674)', demo:'',  status: 'Garima Infotech (653)', qty: '100',
  pack: '50,000', icon: 'chevron_right'}, 

  {position: 1, date:'25-July-2020', vch:'873576', document: 'Mangal Kumar (674)', demo:'',  status: 'Garima Infotech (653)', qty: '100',
  pack: '50,000', icon: 'chevron_right'}, 
           


 ];

@Component({
  selector: 'app-purchasereturndr',
  templateUrl: './purchasereturndr.component.html',
  styleUrls: ['./purchasereturndr.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PurchasereturndrComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'date', 'vch', 'document', 'demo', 'status', 'qty', 'pack', 'icon'];
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
