import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';



export interface PeriodicElement {
  position: number;
  demoo: string;
  document: string;
  demos: string;
  date: string;
  demo: string;
  endate: string;
  vch:string;
  status: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, demoo:'657', document:'	Onam Festival',
 demos:'', date:'Modern Trade', demo:'', endate:'Youtube Url',  
 vch:'', status: '', icon: 'chevron_right'}, 
 {position: 2, demoo:'657', document:'	Onam Festival',
  demos:'', date:'Modern Trade', demo:'', endate:'Youtube Url',  
  vch:'', status: '', icon: 'chevron_right'}, 
  {position: 3, demoo:'657', document:'	Onam Festival',
   demos:'', date:'Modern Trade', demo:'', endate:'Youtube Url',  
   vch:'', status: '', icon: 'chevron_right'}, 
   {position: 4, demoo:'657', document:'	Onam Festival',
    demos:'', date:'Modern Trade', demo:'', endate:'Youtube Url',  
    vch:'', status: '', icon: 'chevron_right'}, 
    {position: 5, demoo:'657', document:'	Onam Festival',
     demos:'', date:'Modern Trade', demo:'', endate:'Youtube Url',  
     vch:'', status: '', icon: 'chevron_right'}, 
     {position: 6, demoo:'657', document:'	Onam Festival',
      demos:'', date:'Modern Trade', demo:'', endate:'Youtube Url',  
      vch:'', status: '', icon: 'chevron_right'}, 
      {position: 7, demoo:'657', document:'	Onam Festival',
       demos:'', date:'Modern Trade', demo:'', endate:'Youtube Url',  
       vch:'', status: '', icon: 'chevron_right'}, 
       {position: 8, demoo:'657', document:'	Onam Festival',
        demos:'', date:'Modern Trade', demo:'', endate:'Youtube Url',  
        vch:'', status: '', icon: 'chevron_right'}, 
        {position: 9, demoo:'657', document:'	Onam Festival',
         demos:'', date:'Modern Trade', demo:'', endate:'Youtube Url',  
         vch:'', status: '', icon: 'chevron_right'}, 


         {position: 10, demoo:'657', document:'	Onam Festival',
         demos:'', date:'Modern Trade', demo:'', endate:'Youtube Url',  
         vch:'', status: '', icon: 'chevron_right'}, 
 ];

@Component({
  selector: 'app-bannergroups',
  templateUrl: './bannergroups.component.html',
  styleUrls: ['./bannergroups.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BannergroupsComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'demoo', 'document', 'demos', 'date', 
  'demo', 'endate', 'vch', 'status', 'icon'];
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
