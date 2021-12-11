import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

    constructor() {}




  ngOnInit(): void {
  }

    clientname = 'Vivek Gupta';
 	clientdesignation = 'Delhi, India';
 	clientphone = '+91-818222333';
 	clientemail = 'vivek@dialerp.com';
 	companyname = 'Ananda Pvt. Ltd.';
 	companyaddress = 'H133, Sec63, Noida UP - 201301.';

}
