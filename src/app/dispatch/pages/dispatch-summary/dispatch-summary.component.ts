import {SelectionModel} from '@angular/cdk/collections';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-dispatch-summary',
  templateUrl: './dispatch-summary.component.html',
  styleUrls: ['./dispatch-summary.component.css']
})
export class DispatchSummaryComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;
  

ngOnInit(): void {
  }

}

