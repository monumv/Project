import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-select-items',
  templateUrl: './select-items.component.html',
  styleUrls: ['./select-items.component.css']
})
export class SelectItemsComponent implements OnInit {


 @ViewChild(MatAccordion) accordion: MatAccordion;
  

  constructor() {

  }

ngOnInit(): void {
  }
  
  }

