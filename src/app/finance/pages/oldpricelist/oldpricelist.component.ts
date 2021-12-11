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
  id: string;
  dms: string;
  area: string;
  status: string;
  dd: string;
  import: string;
  icon:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
{position: 1, id:'24', name:'Tata Titanium Card (13)', dem:'', vacant:'GetOn Infotech Pvt. Ltd.', dm:'', 
  document: '', dems:'', department: 'Supplier (678)', demoo:'', 
  designation:'Lorem Ipsum', demo:'',  
  status: 'Lorem Ipsum', dms:'', area:'20', qty: '10', ds:'',
   pack: '20-Jul-2020', dd:'', import:'200720142231',
    icon:'chevron_right'},
    
{position: 2, id:'24', name:'Tata Titanium Card (13)', dem:'', vacant:'GetOn Infotech Pvt. Ltd.', dm:'', 
document: '', dems:'', department: 'Supplier (678)', demoo:'', 
designation:'Lorem Ipsum', demo:'',  
status: 'Lorem Ipsum', dms:'', area:'20', qty: '10', ds:'',
 pack: '20-Jul-2020', dd:'', import:'200720142231',
  icon:'chevron_right'}, 

  
{position: 3, id:'24', name:'Tata Titanium Card (13)', dem:'', vacant:'GetOn Infotech Pvt. Ltd.', dm:'', 
document: '', dems:'', department: 'Supplier (678)', demoo:'', 
designation:'Lorem Ipsum', demo:'',  
status: 'Lorem Ipsum', dms:'', area:'20', qty: '10', ds:'',
 pack: '20-Jul-2020', dd:'', import:'200720142231',
  icon:'chevron_right'}, 

  
{position: 4, id:'24', name:'Tata Titanium Card (13)', dem:'', vacant:'GetOn Infotech Pvt. Ltd.', dm:'', 
document: '', dems:'', department: 'Supplier (678)', demoo:'', 
designation:'Lorem Ipsum', demo:'',  
status: 'Lorem Ipsum', dms:'', area:'20', qty: '10', ds:'',
 pack: '20-Jul-2020', dd:'', import:'200720142231',
  icon:'chevron_right'}, 

  
{position: 5, id:'24', name:'Tata Titanium Card (13)', dem:'', vacant:'GetOn Infotech Pvt. Ltd.', dm:'', 
document: '', dems:'', department: 'Supplier (678)', demoo:'', 
designation:'Lorem Ipsum', demo:'',  
status: 'Lorem Ipsum', dms:'', area:'20', qty: '10', ds:'',
 pack: '20-Jul-2020', dd:'', import:'200720142231',
  icon:'chevron_right'}, 

  
{position: 6, id:'24', name:'Tata Titanium Card (13)', dem:'', vacant:'GetOn Infotech Pvt. Ltd.', dm:'', 
document: '', dems:'', department: 'Supplier (678)', demoo:'', 
designation:'Lorem Ipsum', demo:'',  
status: 'Lorem Ipsum', dms:'', area:'20', qty: '10', ds:'',
 pack: '20-Jul-2020', dd:'', import:'200720142231',
  icon:'chevron_right'}, 

  
{position: 7, id:'24', name:'Tata Titanium Card (13)', dem:'', vacant:'GetOn Infotech Pvt. Ltd.', dm:'', 
document: '', dems:'', department: 'Supplier (678)', demoo:'', 
designation:'Lorem Ipsum', demo:'',  
status: 'Lorem Ipsum', dms:'', area:'20', qty: '10', ds:'',
 pack: '20-Jul-2020', dd:'', import:'200720142231',
  icon:'chevron_right'}, 

  
{position: 8, id:'24', name:'Tata Titanium Card (13)', dem:'', vacant:'GetOn Infotech Pvt. Ltd.', dm:'', 
document: '', dems:'', department: 'Supplier (678)', demoo:'', 
designation:'Lorem Ipsum', demo:'',  
status: 'Lorem Ipsum', dms:'', area:'20', qty: '10', ds:'',
 pack: '20-Jul-2020', dd:'', import:'200720142231',
  icon:'chevron_right'}, 

  
{position: 9, id:'24', name:'Tata Titanium Card (13)', dem:'', vacant:'GetOn Infotech Pvt. Ltd.', dm:'', 
document: '', dems:'', department: 'Supplier (678)', demoo:'', 
designation:'Lorem Ipsum', demo:'',  
status: 'Lorem Ipsum', dms:'', area:'20', qty: '10', ds:'',
 pack: '20-Jul-2020', dd:'', import:'200720142231',
  icon:'chevron_right'}, 
  
  {position: 10, id:'24', name:'Tata Titanium Card (13)', dem:'', vacant:'GetOn Infotech Pvt. Ltd.', dm:'', 
  document: '', dems:'', department: 'Supplier (678)', demoo:'', 
  designation:'Lorem Ipsum', demo:'',  
  status: 'Lorem Ipsum', dms:'', area:'20', qty: '10', ds:'',
   pack: '20-Jul-2020', dd:'', import:'200720142231',
    icon:'chevron_right'}, 

 ];

@Component({
  selector: 'app-oldpricelist',
  templateUrl: './oldpricelist.component.html',
  styleUrls: ['./oldpricelist.component.css']
})
export class OldpricelistComponent implements OnInit {

 
  displayedColumns: string[] = ['select', 'position', 'id', 'name', 'dem','vacant', 
  'dm', 'document', 'dems', 'department', 
  'demoo', 'designation', 'demo', 'status', 'area', 'dms', 'qty', 'ds', 'pack', 'dd', 'import',  'icon'];
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
