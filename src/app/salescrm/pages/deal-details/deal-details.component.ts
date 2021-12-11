import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-deal-details',
  templateUrl: './deal-details.component.html',
  styleUrls: ['./deal-details.component.css']
})
export class DealDetailsComponent implements OnInit {

  constructor() {}




  ngOnInit(): void {
  }

    clientname = 'Om Prakash Pawar';
 	clientdesignation = 'Operation Head';
 	clientphone = '+91-9911508259';
 	clientemail = 'nishadeveloperspvt@gmail.com';
 	companyname = 'Ananda Pvt. Ltd.';
 	companyaddress = 'H133, Sec63, Noida UP - 201301.';

}
