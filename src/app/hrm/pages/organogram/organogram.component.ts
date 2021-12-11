import {NestedTreeControl} from '@angular/cdk/tree';
import {Component} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
 {
    name: 'Ram Kumar(4387) Manager',
    children: [
      {
        name: 'Sumit  Sharma(56) Manager',
        children: [
          {name: 'Sandhya(672) Content Writer'},
          {name: 'Mehul(672) Admin',
        children: [
          {name: 'Jeetu(73) IOS Developer'},
          {name: 'Ankit(633) UI Designer'},
        ]},
        ]
      }, {
        name: 'Suman Rai(748) Manager',
        children: [
          {name: 'Sandhya(672) Content Writer'},
          {name: 'Mehul(672) Admin',
        children: [
           {name: 'Jeetu(73) IOS Developer'},
          {name: 'Ankit(633) UI Designer'},
        ]},
        ]
      },
    ]
  },
];

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'app-organogram',
  templateUrl: './organogram.component.html',
  styleUrls: ['./organogram.component.css']
})
export class OrganogramComponent {

 treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

}
