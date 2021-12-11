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
  statuss: string;
  partner: string;
  customer: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, date:'25-July-2020 16:38:00', vch:'210428-SOI-0476', document: 'Mangal Kumar (674)',partner:'Ananda GT Partner', demo:'',  status: 'Garima Infotech (653)', customer:'Vivek Test Customer', qty: '100',
 pack: '50,000', statuss:'Accepted', icon: 'chevron_right'}, 
{position: 2, date:'25-July-2020 16:38:00', vch:'210428-SOI-0476', document: 'Mangal Kumar (674)',partner:'Ananda GT Partner', demo:'',  status: 'Garima Infotech (653)', customer:'Vivek Test Customer', qty: '100',
 pack: '50,000', statuss:'Accepted', icon: 'chevron_right'}, 

{position: 3, date:'25-July-2020 16:38:00', vch:'210428-SOI-0476', document: 'Mangal Kumar (674)',partner:'Ananda GT Partner', demo:'',  status: 'Garima Infotech (653)', customer:'Vivek Test Customer', qty: '100',
 pack: '50,000', statuss:'Accepted', icon: 'chevron_right'}, 

{position: 4, date:'25-July-2020 16:38:00', vch:'210428-SOI-0476', document: 'Mangal Kumar (674)',partner:'Ananda GT Partner', demo:'',  status: 'Garima Infotech (653)', customer:'Vivek Test Customer', qty: '100',
 pack: '50,000', statuss:'Accepted', icon: 'chevron_right'}, 

{position: 5, date:'25-July-2020 16:38:00', vch:'210428-SOI-0476', document: 'Mangal Kumar (674)',partner:'Ananda GT Partner', demo:'',  status: 'Garima Infotech (653)', customer:'Vivek Test Customer', qty: '100',
 pack: '50,000', statuss:'Accepted', icon: 'chevron_right'}, 


 ];


@Component({
  selector: 'app-accepted',
  templateUrl: './accepted.component.html',
  styleUrls: ['./accepted.component.css']
})
export class AcceptedComponent implements OnInit {

  
  displayedColumns: string[] = ['select', 'position', 'date', 'vch', 'document', 'demo', 'status', 'qty', 'pack', 'statuss', 'icon'];
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
