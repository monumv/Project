import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  merchants: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Delhi Route', weight: 20, merchants:'10 Merchants'},
  {position: 2, name: 'Noida Route', weight: 30, merchants:'10 Merchants'},
  {position: 3, name: 'Ghaziabad Route', weight: 40, merchants:'10 Merchants'},
];

@Component({
  selector: 'app-load-vehical',
  templateUrl: './load-vehical.component.html',
  styleUrls: ['./load-vehical.component.css']
})
export class LoadVehicalComponent implements OnInit {

 


 @ViewChild(MatAccordion) accordion: MatAccordion;

  displayedColumns: string[] = ['select', 'position', 'name', 'weight'];
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
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



 myControl = new FormControl();
  options: string[] = ['DLAC0145', 'DLAC8456', 'DLAC4516', 'DLAC0015'];
  filteredOptions: Observable<string[]>;


firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  isOptional = false;

  constructor(private _formBuilder: FormBuilder, public dialog: MatDialog) {}


  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ''
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ''
    });

    this.fourFormGroup = this._formBuilder.group({
      fourCtrl: ''
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ''
    });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}

