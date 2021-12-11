import { Component, OnInit, ViewEncapsulation, ViewChild, } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatSidenav} from '@angular/material/sidenav';
import {MatTableDataSource} from '@angular/material/table';


export interface PeriodicElement {
  position: number;
  vacant:string;
  dm:string;
  designation: string;
  dems: string;
  name: string;
  dem:string;
  ds:string;
  document: string;
  department: string;
  demo:string;
  demoo:string;
  qty: string;
  pack: string;
  assign: string;
  area: string;
  status: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name:'Manish Kumar', dem:'', vacant:'GetOn Infotech Pvt. Ltd.', dm:'', document: 'App Development Team', dems:'', department: 'IT', demoo:'', 
  designation:'Android App Developer', demo:'',  status: 'L3 Middle Management', ds:'', area:'Lorem Ipsum', qty: '',
   pack: '', assign:'Lorem Ipsum', icon:'chevron_right'}, 
   {position: 2, name:'Manish Kumar', dem:'', vacant:'GetOn Infotech Pvt. Ltd.', dm:'', document: 'App Development Team', dems:'', department: 'IT', demoo:'', 
   designation:'Android App Developer', demo:'',  status: 'L3 Middle Management', ds:'', area:'Lorem Ipsum', qty: '',
    pack: '', assign:'Lorem Ipsum', icon:'chevron_right'}, 
    {position: 3, name:'Manish Kumar', dem:'', vacant:'GetOn Infotech Pvt. Ltd.', dm:'', document: 'App Development Team', dems:'', department: 'IT', demoo:'', 
    designation:'Android App Developer', demo:'',  status: 'L3 Middle Management', ds:'', area:'Lorem Ipsum', qty: '',
     pack: '', assign:'Lorem Ipsum', icon:'chevron_right'}, 
     {position: 4, name:'Manish Kumar', dem:'', vacant:'GetOn Infotech Pvt. Ltd.', dm:'', document: 'App Development Team', dems:'', department: 'IT', demoo:'', 
     designation:'Android App Developer', demo:'',  status: 'L3 Middle Management', ds:'', area:'Lorem Ipsum', qty: '',
      pack: '', assign:'Lorem Ipsum', icon:'chevron_right'}, 
      {position: 5, name:'Manish Kumar', dem:'', vacant:'GetOn Infotech Pvt. Ltd.', dm:'', document: 'App Development Team', dems:'', department: 'IT', demoo:'', 
      designation:'Android App Developer', demo:'',  status: 'L3 Middle Management', ds:'', area:'Lorem Ipsum', qty: '',
       pack: '', assign:'Lorem Ipsum', icon:'chevron_right'}, 
       {position: 6, name:'Manish Kumar', dem:'', vacant:'GetOn Infotech Pvt. Ltd.', dm:'', document: 'App Development Team', dems:'', department: 'IT', demoo:'', 
       designation:'Android App Developer', demo:'',  status: 'L3 Middle Management', ds:'', area:'Lorem Ipsum', qty: '',
        pack: '', assign:'Lorem Ipsum', icon:'chevron_right'}, 
        {position: 7, name:'Manish Kumar', dem:'', vacant:'GetOn Infotech Pvt. Ltd.', dm:'', document: 'App Development Team', dems:'', department: 'IT', demoo:'', 
        designation:'Android App Developer', demo:'',  status: 'L3 Middle Management', ds:'', area:'Lorem Ipsum', qty: '',
         pack: '', assign:'Lorem Ipsum', icon:'chevron_right'}, 
         {position: 8, name:'Manish Kumar', dem:'', vacant:'GetOn Infotech Pvt. Ltd.', dm:'', document: 'App Development Team', dems:'', department: 'IT', demoo:'', 
         designation:'Android App Developer', demo:'',  status: 'L3 Middle Management', ds:'', area:'Lorem Ipsum', qty: '',
          pack: '', assign:'Lorem Ipsum', icon:'chevron_right'}, 
          {position: 9, name:'Manish Kumar', dem:'', vacant:'GetOn Infotech Pvt. Ltd.', dm:'', document: 'App Development Team', dems:'', department: 'IT', demoo:'', 
          designation:'Android App Developer', demo:'',  status: 'L3 Middle Management', ds:'', area:'Lorem Ipsum', qty: '',
           pack: '', assign:'Lorem Ipsum', icon:'chevron_right'}, 
           {position: 10, name:'Manish Kumar', dem:'', vacant:'GetOn Infotech Pvt. Ltd.', dm:'', document: 'App Development Team', dems:'', department: 'IT', demoo:'', 
           designation:'Android App Developer', demo:'',  status: 'L3 Middle Management', ds:'', area:'Lorem Ipsum', qty: '',
            pack: '', assign:'Lorem Ipsum', icon:'chevron_right'}, 

 ];


@Component({
  selector: 'app-areaemployees',
  templateUrl: './areaemployees.component.html',
  styleUrls: ['./areaemployees.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AreaemployeesComponent implements OnInit {

 
 
  displayedColumns: string[] = ['select', 'position', 'name', 'dem','vacant', 
  'dm', 'document', 'dems', 'department', 
  'demoo', 'designation',
  'demo', 'status', 'ds', 'area', 'qty', 'pack', 'assign',  'icon'];
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
