import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deal-details',
  templateUrl: './deal-details.component.html',
  styleUrls: ['./deal-details.component.css']
})
export class DealDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    clientname = 'Pankaj Impex (223)';
 	clientdesignation = 'Operation Head';
 	clientphone = '+91-987654323130';
 	clientemail = 'rishabh@gmail.com';
 	companyname = 'Startup Radisson';
 	companyaddress = 'H133, Sec63, Noida UP - 201301.';

}
