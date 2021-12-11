import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-compose',
  templateUrl: './compose.component.html',
  styleUrls: ['./compose.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ComposeComponent implements OnInit {
  show = false;
  show2 = false;
  constructor() { }

  ngOnInit(): void {
  }

}
