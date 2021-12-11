import { Component, OnInit, ChangeDetectorRef, OnDestroy, } from '@angular/core';
import { Observable } from 'rxjs';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';


interface Menu {
  name: string;
  children?: Menu[];
}

const TREE_DATA: Menu[] = [
  {
    name: 'Sale',
    children: [
      {name: 'Fetch All Sale List'},
      {name: 'Create Sale'}
    ]
  }, 
   {
    name: 'Purchase',
    children: [
      {name: 'Fetch All Purchase List'},
      {name: 'Create Purchase'},
      
    ]
  }, 
    
   {
    name: 'Receipt',
    children: [
      {name: 'Fetch All Receipt List'},
      {name: 'Create Receipt'},
      
    ]
  }, 
   {
    name: 'Payment',
    children: [
      {name: 'Fetch All Payment List'},
      {name: 'Create Payment'},
      
    ]
  }, 
   {
    name: 'Journal',
    children: [
      {name: 'Fetch All Journal List'},
      {name: 'Create Journal'},
      
    ]
  }, 
   {
    name: 'Dr.Note(w/o items)',
    children: [
      {name: 'Fetch All Dr.Note(w/o items) List'},
      {name: 'Create Dr.Note(w/o items)'},
      
    ]
  }, 
   {
    name: 'Cr.Note(w/o items)',
    children: [
      {name: 'Fetch All Cr.Note(w/o items) List'},
      {name: 'Create Cr.Note(w/o items) '},
      
    ]
  }, 
   {
    name: 'Accounts',
    children: [
      {name: 'Fetch All Accounts List'},
      {name: 'Create Accounts'},
      
    ]
  }, 
];

@Component({
  selector: 'app-apilistsidebar',
  templateUrl: './apilistsidebar.component.html',
  styleUrls: ['./apilistsidebar.component.css']
})
export class ApilistsidebarComponent implements OnInit {

  constructor() {this.dataSource.data = TREE_DATA;}


  treeControl = new NestedTreeControl<Menu>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Menu>();


  hasChild = (_: number, node: Menu) => !!node.children && node.children.length > 0;







  ngOnInit(): void {
  }


}
