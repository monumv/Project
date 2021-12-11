import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ComposeComponent implements OnInit {

   toppings = new FormControl();

  toppingList: string[] = ['Ankit Raheja', 'Amit Kumar', 'Manish Gupta', 'Naresh', 'Shivam Gupta', 'Vivek Gupta'];


   days = new FormControl();

  daysList: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



 myControl = new FormControl();
  options: string[] = ['Emporiss111', 'MohitDND', ];
  filteredOptions: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

 @ViewChild(MatAccordion) accordion: MatAccordion;

  constructor() { }


}
