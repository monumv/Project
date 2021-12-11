import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';

import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  star: string;
  to: string;
  label: string;
  subject: string;
  status: string;
  id: string;
  sent: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  {star: 'test', to: 'Varun Singh', label: 'test', subject: 'New assignment: "Attendance 08-Apr-2020', status: 'test', id: '#7588', sent: '12:10 AM',},
  
];
@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class MailsComponent implements OnInit { 
 doSomething(e) {
    e.stopPropagation();
    // do other stuff...
  }
  
value = 'Search...';
displayedColumns: string[] = [ 'star', 'select', 'to', 'label', 'subject', 'status', 'id', 'sent'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.subject + 1}`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
