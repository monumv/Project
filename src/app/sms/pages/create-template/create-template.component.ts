import { Component, OnInit } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}
interface Food1 {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-template',
  templateUrl: './create-template.component.html',
  styleUrls: ['./create-template.component.css']
})
export class CreateTemplateComponent implements OnInit {

 foods: Food[] = [
    {value: '11005', viewValue: '11005'},
  ];

   foods1: Food1[] = [
    {value: 'Service-Implicit-0', viewValue: 'Service-Implicit'},
    {value: 'Service-Explicit-1', viewValue: 'Service-Explicit'},
    {value: 'Promotional-2', viewValue: 'Promotional'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
