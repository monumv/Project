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
  { name: 'IVR Responses'},
  { name: 'Mobile Logs'},
  { name: 'IVR Numbers'},
  { name: 'Call Reports'},
];

@Component({
  selector: 'app-ivrmaster',
  templateUrl: './ivrmaster.component.html',
  styleUrls: ['./ivrmaster.component.css']
})
export class IvrmasterComponent implements OnInit {

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
