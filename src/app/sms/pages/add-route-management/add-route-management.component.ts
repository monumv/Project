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
  selector: 'app-add-route-management',
  templateUrl: './add-route-management.component.html',
  styleUrls: ['./add-route-management.component.css']
})
export class AddRouteManagementComponent implements OnInit {
foods: Food[] = [
    {value: 'Yes', viewValue: 'Yes'},
    {value: 'No', viewValue: 'No'},
  ];

   foods1: Food1[] = [
    {value: 'Yes', viewValue: 'Yes'},
    {value: 'No', viewValue: 'No'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

