import { Component, OnInit, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints, BreakpointState} from '@angular/cdk/layout';
@Component({
  selector: 'app-apilist',
  templateUrl: './apilist.component.html',
  styleUrls: ['./apilist.component.css']
})
export class ApilistComponent implements OnInit {
 @ViewChild('drawer') drawer: any;
  public selectedItem : string = '';
   public isHandset$: Observable<boolean> = this.breakpointObserver
     .observe(Breakpoints.Handset)
     .pipe(map((result: BreakpointState) => result.matches));
 
 
   constructor(private breakpointObserver: BreakpointObserver) {}
 
 closeSideNav() {
   if (this.drawer._mode=='over') {
     this.drawer.close();
   }
 }

  ngOnInit(): void {
  }



}
