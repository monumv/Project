import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface PeriodicElement {
  position: number;
  date: string;
  dem: string;
  vch: string;
  parti: string;
  acname: string;
  status: string;
  tasks: string;
  unit: string;
  self: string;
  check: string;
  approve: string;
  weight: string;
  score: string;
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

{position:1, date:'', dem:'', vch:'', parti:'Opening Bal', acname:'', status:'', tasks:'250',  unit:'', self:'', check:'', approve:'', weight:'', score:'.', icon:''  }, 

{position:1, date:'1-Apr-21', dem:'Production', vch:'pro-01', parti:'Sonipat', acname:'500', status:'250', tasks:'250',  unit:'10', self:'500', check:'0', approve:'0', weight:'130', score:'Ltr.',  icon:''  }, 
{position:2, date:'1-Apr-21', dem:'Production', vch:'pro-01', parti:'Sonipat', acname:'500', status:'250', tasks:'250',  unit:'10', self:'500', check:'0', approve:'0', weight:'130', score:'Ltr.', icon:''  }, 
{position:3, date:'1-Apr-21', dem:'Production', vch:'pro-01', parti:'Sonipat', acname:'500', status:'250', tasks:'250',  unit:'10', self:'500', check:'0', approve:'150', weight:'130', score:'Ltr.', icon:''  }, 
{position:4, date:'1-Apr-21', dem:'Production', vch:'pro-01', parti:'Sonipat', acname:'500', status:'250', tasks:'250',  unit:'10', self:'500', check:'0', approve:'0', weight:'130', score:'Ltr.', icon:'' }, 
{position:5, date:'1-Apr-21', dem:'Production', vch:'pro-01', parti:'Sonipat', acname:'500', status:'250', tasks:'250',  unit:'10', self:'500', check:'120', approve:'0', weight:'130', score:'Ltr.', icon:''  }, 



{position:6, date:'1-Apr-21', dem:'Production', vch:'pro-01', parti:'Sonipat', acname:'500', status:'250', tasks:'250',  unit:'10', self:'500', check:'120', approve:'0', weight:'130', score:'Ltr.', icon:''  }, 
{position:7, date:'1-Apr-21', dem:'Production', vch:'pro-01', parti:'Sonipat', acname:'500', status:'250', tasks:'250',  unit:'10', self:'500', check:'120', approve:'0', weight:'130', score:'Ltr.', icon:''  }, 
{position:8, date:'1-Apr-21', dem:'Production', vch:'pro-01', parti:'Sonipat', acname:'500', status:'250', tasks:'250',  unit:'10', self:'500', check:'120', approve:'0', weight:'130', score:'Ltr.', icon:''  }, 
{position:9, date:'1-Apr-21', dem:'Production', vch:'pro-01', parti:'Sonipat', acname:'500', status:'250', tasks:'250',  unit:'10', self:'500', check:'120', approve:'0', weight:'130', score:'Ltr.', icon:''  }, 
{position:10, date:'1-Apr-21', dem:'Production', vch:'pro-01', parti:'Sonipat', acname:'500', status:'250', tasks:'250',  unit:'10', self:'500', check:'120', approve:'0', weight:'130', score:'Ltr.', icon:''  }, 
{position:11, date:'1-Apr-21', dem:'Production', vch:'pro-01', parti:'Sonipat', acname:'500', status:'250', tasks:'250',  unit:'10', self:'500', check:'120', approve:'0', weight:'130', score:'Ltr.', icon:''  }, 
{position:12, date:'1-Apr-21', dem:'Production', vch:'pro-01', parti:'Sonipat', acname:'500', status:'250', tasks:'250',  unit:'10', self:'500', check:'120', approve:'0', weight:'130', score:'Ltr.',  icon:'' }, 
{position:13, date:'1-Apr-21', dem:'Production', vch:'pro-01', parti:'Sonipat', acname:'500', status:'250', tasks:'250',  unit:'10', self:'500', check:'120', approve:'0', weight:'130', score:'Ltr.', icon:''  }, 
{position:14, date:'1-Apr-21', dem:'Production', vch:'pro-01', parti:'Sonipat', acname:'500', status:'250', tasks:'250',  unit:'10', self:'500', check:'120', approve:'0', weight:'130', score:'Ltr.', icon:''  }, 

 ];
@Component({
  selector: 'app-itemstock',
  templateUrl: './itemstock.component.html',
  styleUrls: ['./itemstock.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemstockComponent implements OnInit {

  displayedColumns: string[] = ['select', 'date', 'dem', 'vch', 'parti', 'acname', 'status', 'tasks', 'unit', 'self', 'check', 'approve', 'weight', 'score', 'icon'];

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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.dem + 1}`;
  }



constructor() {}


 
  ngOnInit(): void {
  }

}
