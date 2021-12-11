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
    name: 'Deals',
    children: [
      {name: 'Add Deal'},
      {name: 'Open Deal'},
      {name: 'Won Deal'},
      {name: 'Dropped Deal'},
    ]
  }, 
   {
    name: 'CRM Settings',
    children: [
      {name: 'CRM Templates'},
      {name: 'Lead Source'},
      {
      name: 'Lead Plugins',
      children: [
      {name: 'Justdial'},
      {name: 'Indiamart'},
      {name: 'Facebook'},
    ]

      },
    ]
  }, 
   {
    name: 'CRM Reports',
    children: [
      {name: 'Reports'},
    ]
  }, 
];
@Component({
  selector: 'app-salescrm-master',
  templateUrl: './salescrm-master.component.html',
  styleUrls: ['./salescrm-master.component.css']
})
export class SalescrmMasterComponent implements OnInit {

  
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

