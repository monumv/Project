import { Component, ElementRef, ViewChild, OnInit, AfterViewInit  } from '@angular/core';
import { Router } from '@angular/router';
import { MatToolbar } from '@angular/material/toolbar';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';


interface Menu {
  name: string;
  children?: Menu[];
}

const TREE_DATA: Menu[] = [
  {
    name: 'Complaints',
    children: [
      {name: 'Open'},
      {name: 'Closed'},
      {name: 'Cancelled'},
    ]
  }, 

  {
    name: 'Feedbacks'
  }, 
  {
    name: 'Service CRM Settings',
  },  
  {
    name: 'Service Route Planner',
    children: [
      {name: 'Service Routes'},
      {name: 'Assign to Service Centers'},
      {name: 'Service Engineers List'},
    ]
  },
];
@Component({
  selector: 'app-service-master',
  templateUrl: './service-master.component.html',
  styleUrls: ['./service-master.component.css']
})
export class ServiceMasterComponent implements OnInit {

  @ViewChild("toolbar") toolbar: MatToolbar;
  @ViewChild("main") main: ElementRef;


  ngAfterViewInit(){

    //this.main.height = 100 - (this.toolbar.height + this.footer.height)
    console.log( "toolbar" );
  }

  title = 'production';
 

  treeControl = new NestedTreeControl<Menu>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Menu>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: Menu) => !!node.children && node.children.length > 0;



  ngOnInit(): void {
  }

}
