import {Component, ViewChild, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
import {MatDialog} from '@angular/material/dialog';
import { ComposeComponent } from '../pages/compose/compose.component';

interface Menu {
  name: string;
  children?: Menu[];
}

const TREE_DATA: Menu[] = [
  {
    name: 'Production',
    children: [
      {name: 'Lorem Ipsum'},
      {name: 'Lorem Ipsum'},
    ]
  }, 
];
@Component({
  selector: 'app-email-master',
  templateUrl: './email-master.component.html',
  styleUrls: ['./email-master.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class EmailMasterComponent implements OnInit {
  @ViewChild('drawer') drawer: any;
  public selectedItem : string = '';
   public isHandset$: Observable<boolean> = this.breakpointObserver
     .observe(Breakpoints.Handset)
     .pipe(map((result: BreakpointState) => result.matches));
 
 
   constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog) {}
 
 closeSideNav() {
   if (this.drawer._mode=='over') {
     this.drawer.close();
   }
 }

 ngOnInit(): void {
}
  value = 'Search...';


  openDialog() {
    this.dialog.open(ComposeComponent);
    
  }
}
