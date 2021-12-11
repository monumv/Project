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
  icon: string;
}

const ELEMENT_DATA: PeriodicElement[] = [

{position:1, date:'1-Apr-21', dem:'Barcode Created', vch:'pro-01', parti:'Branch Name (Material Center Name)', acname:'500', status:'250', tasks:'250',  unit:'10', self:'500', check:'0', approve:'0',  icon:''  },

{position:2, date:'1-Apr-21', dem:'Barcode Created', vch:'pro-01', parti:'Branch Name (Material Center Name)', acname:'500', status:'250', tasks:'250',  unit:'10', self:'500', check:'0', approve:'0',  icon:''  },

{position:3, date:'1-Apr-21', dem:'Barcode Created', vch:'pro-01', parti:'Branch Name (Material Center Name)', acname:'500', status:'250', tasks:'250',  unit:'10', self:'500', check:'0', approve:'0',  icon:''  },

{position:4, date:'1-Apr-21', dem:'Barcode Created', vch:'pro-01', parti:'Branch Name (Material Center Name)', acname:'500', status:'250', tasks:'250',  unit:'10', self:'500', check:'0', approve:'150',  icon:''  },

{position:5, date:'1-Apr-21', dem:'Barcode Created', vch:'pro-01', parti:'Branch Name (Material Center Name)', acname:'500', status:'250', tasks:'250',  unit:'10', self:'500', check:'120', approve:'0',  icon:''  },

{position:6, date:'1-Apr-21', dem:'Barcode Created', vch:'pro-01', parti:'Branch Name (Material Center Name)', acname:'500', status:'250', tasks:'250',  unit:'10', self:'500', check:'0', approve:'0',  icon:''  },






 ];
@Component({
  selector: 'app-stockinhandvocher',
  templateUrl: './stockinhandvocher.component.html',
  styleUrls: ['./stockinhandvocher.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class StockinhandvocherComponent implements OnInit {


 displayedColumns: string[] = ['select', 'date', 'dem', 'vch', 'parti', 'acname', 'status', 'tasks', 'unit', 'self', 'check', 'approve', 'icon'];

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
