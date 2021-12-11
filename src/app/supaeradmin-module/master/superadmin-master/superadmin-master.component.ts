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
    name: 'Accounts Management ',
    children: [
      {name: 'Accounts'},
      {name: 'Account Groups'},
    ]
  }, 

  {
    name: 'IVR Management',
    children: [
      {name: 'IVR Numbers'},
      {name: 'IVR Responses'},
    ]
  }, 
  {
    name: 'Default Settings',
  }, 
];
@Component({
  selector: 'app-superadmin-master',
  templateUrl: './superadmin-master.component.html',
  styleUrls: ['./superadmin-master.component.css']
})
export class SuperadminMasterComponent implements OnInit {

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

