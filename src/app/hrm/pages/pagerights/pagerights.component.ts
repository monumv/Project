import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips'; import { MatSidenav } from '@angular/material/sidenav';

export interface PeriodicElement {
  position: number;
  name: string;
  departmentname: string;
  teamright: string;
  adminright: string;
  icon: string;
  ladmin: string;
  ladmins: string;
  pagesurl: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Sale Management', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 2, name: 'Sale Invoice new', pagesurl: 'https://dialerp.com/finance/vouchers/vouchers-list/2', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },


  { position: 3, name: 'Sale Order', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/sale-order', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },


  { position: 4, name: 'Pending', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/sale-order-mongo/pending?type=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 5, name: 'Accepted', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/sale-order-mongo/accepted?type=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 6, name: 'All Orders', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/sale-order-mongo/all?type=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
 

  { position: 7, name: 'Gate out', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/gate-out', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 8, name: 'Approved', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/sale-order-mongo/approved?type=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 9, name: 'Planned', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/sale-order-mongo/planned?type=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 10, name: 'Dispatched', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/sale-order-mongo/dispatched?type=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 11, name: 'Delivered', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/sale-order-mongo/delivered?type=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 12, name: 'Cancelled', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/sale-order-mongo/cancelled?type=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 13, name: 'Dispatch Slips', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/sale-order-mongo/dispatchslips?type=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 14, name: 'Driver EOT Report', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/gate-out/driver-eot-report', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

   { position: 15, name: 'Sale Ordered (Indirect)', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/sale-order-indirect', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
 
  { position: 16, name: 'Subscription Scheduled', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/subscriptions', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 17, name: 'All Subscription', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/subscriptions-all', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

   { position: 18, name: 'Pending', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/sale-order-mongo/pending?type=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 19, name: 'Accepted', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/sale-order-mongo/accepted?type=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

 { position: 20, name: 'Delivered', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/sale-order-mongo/delivered?type=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 21, name: 'Cancelled', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/sale-order-mongo/cancelled?type=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 22, name: 'Dispatched', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/sale-order-mongo/dispatched?type=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 23, name: 'Delivered', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/sale-order-mongo/delivered?type=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 24, name: 'Cancelled', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/sale-order-mongo/cancelled?type=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

{ position: 25, name: 'All Orders', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/sale-order-mongo/all?type=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 26, name: 'Partner EOT Report', pagesurl: 'https://dialerp.com/finance/vouchers/sale-management/sale-order-indirect/partner-eod-report', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
 

  { position: 27, name: 'Sale Return', pagesurl: 'https://dialerp.com/finance/vouchers/sale-return/19', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 28, name: 'Purchase Management', pagesurl: 'https://dialerp.com/finance/vouchers/purchase-management', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },


  { position: 29, name: 'Purchase Invoice', pagesurl: 'https://dialerp.com/finance/purchase-mongo/8', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 30, name: 'Purchase Planing', pagesurl: 'https://dialerp.com/finance/vouchers/purchase-planing', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 31, name: 'Purchase planning', pagesurl: 'https://dialerp.com/finance/purchase-planing/purchase', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 32, name: 'Purchase Order (Pending)', pagesurl: 'https://dialerp.com/finance/purchase-mongo/15/0/pending', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 33, name: 'Purchase Order (Approved)', pagesurl: 'https://dialerp.com/finance/purchase-mongo/15/0/approved', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 34, name: 'Purchase Order (Received)', pagesurl: 'https://dialerp.com/finance/purchase-mongo/15/0/received', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 35, name: 'Gate In', pagesurl: 'https://dialerp.com/finance/vouchers/gate-In', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 36, name: 'QC Check', pagesurl: 'https://dialerp.com/finance/gate-in-list/pending-qc', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 37, name: 'Raise Invoice', pagesurl: 'https://dialerp.com/finance/gate-in-list/pending-approval', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 38, name: 'Invoice Raised', pagesurl: 'https://dialerp.com/finance/gate-in-list/approved', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 39, name: 'Purchase Order Item Wise', pagesurl: 'https://dialerp.com/finance/purchase-order-item-wise', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },


  { position: 40, name: 'Purchase Return New', pagesurl: 'https://dialerp.com/finance/vouchers/vouchers-list/20', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 41, name: 'Receipt Management', pagesurl: 'https://dialerp.com/finance/vouchers/receipt-management-mongo', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 42, name: 'Receipts', pagesurl: 'https://dialerp.com/finance/vouchers/receipts-mongo/4', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 43, name: 'Proposed Receipt', pagesurl: 'https://dialerp.com/finance/vouchers/proposed-receipts', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 44, name: 'Claimed', pagesurl: 'https://dialerp.com/finance/vouchers/receipt-mongo/27', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 45, name: 'Approved Receipt', pagesurl: 'https://dialerp.com/finance/vouchers/receipt-mongo/Approved', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 46, name: 'Rejected Receipt', pagesurl: 'https://dialerp.com/finance/vouchers/receipt-mongo/Rejected', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 47, name: 'Paid Receipt', pagesurl: 'https://dialerp.com/finance/vouchers/receipt-mongo/Paid', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },



  { position: 48, name: 'Payment Management', pagesurl: 'https://dialerp.com/finance/vouchers/payment-management-mongo', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 49, name: 'Payments', pagesurl: 'https://dialerp.com/finance/vouchers/payments-mongo/5', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 50, name: 'Proposed Payment', pagesurl: 'https://dialerp.com/finance/vouchers/proposed-payments', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 51, name: 'Claimed', pagesurl: 'https://dialerp.com/finance/vouchers/payments-mongo/25', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 52, name: 'Approved Payments', pagesurl: 'https://dialerp.com/finance/vouchers/payments-mongo/Approved', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 53, name: 'Rejected Payments', pagesurl: 'https://dialerp.com/finance/vouchers/payments-mongo/Rejected', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 54, name: 'Paid Payments', pagesurl: 'https://dialerp.com/finance/vouchers/payments-mongo/Paid', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 55, name: 'Journal Vouchers', pagesurl: 'https://dialerp.com/finance/journal-mongo', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },


  { position: 56, name: 'Dr. Note (w/o Items)', pagesurl: 'https://dialerp.com/finance/vouchers/debit-note-mongo/21', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 57, name: 'Cr. Note (w/o Items)', pagesurl: 'https://dialerp.com/finance/vouchers/credit-note-mongo/22', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 58, name: 'Material Issue Management', pagesurl: 'https://dialerp.com/finance/vouchers/material-issue', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 59, name: 'Material Issue (Direct) New', pagesurl: 'https://dialerp.com/finance/vouchers/vouchers-list/14?type=direct', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },


  { position: 60, name: 'Material Issue (Indirect) New', pagesurl: 'https://dialerp.com/finance/vouchers/vouchers-list/14?type=in-direct', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  
  { position: 61, name: 'Material Receive Management', pagesurl: 'https://dialerp.com/finance/vouchers/material-receive', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  
  { position: 62, name: 'Material Receive (Direct)', pagesurl: 'https://dialerp.com/finance/purchase-mongo/13?type=direct', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 63, name: 'Material Receive (Indirect)', pagesurl: 'https://dialerp.com/finance/purchase-mongo/13?type=in-direct', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 64, name: 'Proposals', pagesurl: 'https://dialerp.com/finance/proposal', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 65, name: 'Proforma Invoice New', pagesurl: 'https://dialerp.com/finance/proposals/23', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 66, name: 'Purchase Request', pagesurl: 'https://dialerp.com/finance/purchase-mongo/26', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 67, name: 'Quotation New', pagesurl: 'https://dialerp.com/finance/proposals/24', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },


];


const ELEMENT_DATAA: PeriodicElement[] = [
  { position: 1, name: 'Accounts', pagesurl: 'https:https://dialerp.com/finance/accounts-type', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 2, name: 'Direct Accounts', pagesurl: 'https://dialerp.com/finance/accounts-type/direct', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 3, name: 'Onboarded', pagesurl: 'https://dialerp.com/finance/account-list-new?type=direct&id=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 4, name: 'Lead', pagesurl: 'https://dialerp.com/finance/account-list-new?type=direct&id=0', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 5, name: 'Dropped', pagesurl: 'https://dialerp.com/finance/account-list-new?type=direct&id=2', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },



  { position: 6, name: 'In Direct Account', pagesurl: 'https://dialerp.com/finance/accounts-type/direct', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 7, name: 'Onboarded', pagesurl: 'https://dialerp.com/finance/account-list-new?type=in-direct&id=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 8, name: 'Lead', pagesurl: 'https://dialerp.com/finance/account-list-new?type=in-direct&id=0', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 9, name: 'Dropped', pagesurl: 'https://dialerp.com/finance/account-list-new?type=in-direct&id=2', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },


  { position: 10, name: 'Branch', pagesurl: 'https://dialerp.com/finance/accounts-type/branch', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 11, name: 'Onboarded', pagesurl: 'https://dialerp.com/finance/branch-account?id=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 12, name: 'Lead', pagesurl: 'https://dialerp.com/finance/branch-account?id=0', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 13, name: 'Dropped', pagesurl: 'https://dialerp.com/finance/branch-account?id=2', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 14, name: 'Material Centers', pagesurl: 'https://dialerp.com/finance/material-centers', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 15, name: 'Bank', pagesurl: 'https://dialerp.com/finance/accounts-type/bank', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 16, name: 'Onboarded', pagesurl: 'https://dialerp.com/finance/bank-account?id=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 17, name: 'Lead', pagesurl: 'https://dialerp.com/finance/bank-account?id=0', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 18, name: 'Dropped', pagesurl: 'https://dialerp.com/finance/bank-account?id=2', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  

  { position: 19, name: 'Employee', pagesurl: 'https://dialerp.com/finance/accounts-type/employee', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 20, name: 'Onboarded', pagesurl: 'https://dialerp.com/finance/employee?id=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 21, name: 'Lead', pagesurl: 'https://dialerp.com/finance/employee?id=0', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 22, name: 'Dropped', pagesurl: 'https://dialerp.com/finance/employee?id=2', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  

  { position: 23, name: 'Duties & Taxes', pagesurl: 'https://dialerp.com/finance/accounts-type/duties-taxes', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 24, name: 'Onboarded', pagesurl: 'https://dialerp.com/finance/duties-taxes-account?id=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 25, name: 'Lead', pagesurl: 'https://dialerp.com/finance/duties-taxes-account?id=0', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 26, name: 'Dropped', pagesurl: 'https://dialerp.com/finance/duties-taxes-account?id=2', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  

  { position: 27, name: 'Incomes & Expenses', pagesurl: 'https://dialerp.com/finance/accounts-type/incomes-expenses', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 28, name: 'Onboarded', pagesurl: 'https://dialerp.com/finance/incomes-expenses-account?id=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 29, name: 'Lead', pagesurl: 'https://dialerp.com/finance/incomes-expenses-account?id=0', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 30, name: 'Dropped', pagesurl: 'https://dialerp.com/finance/incomes-expenses-account?id=2', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  

  { position: 31, name: 'Other Accounts', pagesurl: 'https://dialerp.com/finance/accounts-type/incomes-expenses', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 32, name: 'Onboarded', pagesurl: 'https://dialerp.com/finance/others-account?id=1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 33, name: 'Lead', pagesurl: 'https://dialerp.com/finance/others-account?id=0', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 34, name: 'Dropped', pagesurl: 'https://dialerp.com/finance/others-account?id=2', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 35, name: 'All Accounts', pagesurl: 'https://dialerp.com/finance/all-accouts', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  
  { position: 36, name: 'Shipping Addresses', pagesurl: 'https://dialerp.com/finance/account-shipping-addresses', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 37, name: 'Onboarding Management', pagesurl: 'https://dialerp.com/finance/onboarding-management', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 38, name: 'AccountWise Reserve Bal', pagesurl: 'https://dialerp.com/finance/account-wise-reservebal', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 39, name: 'Onboarding Payouts', pagesurl: 'https://dialerp.com/finance/onboarding-payouts-dashboard', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },


  { position: 40, name: 'Unverified', pagesurl: 'https://dialerp.com/finance/onboarding-payouts/unverified', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 41, name: 'Verified', pagesurl: 'https://dialerp.com/finance/onboarding-payouts/verified', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 42, name: 'Rejected', pagesurl: 'https://dialerp.com/finance/onboarding-payouts/rejected', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 43, name: 'Claimed', pagesurl: 'https://dialerp.com/finance/onboarding-payouts/claimed', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 44, name: 'Incentives & Deductions', pagesurl: 'https://dialerp.com/finance/incentives-deductions', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 45, name: 'Credit Limit', pagesurl: 'https://dialerp.com/finance/credit-limit', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 46, name: 'Ledger Balance', pagesurl: 'https://dialerp.com/finance/ledger-balance/ledgerBalance', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 47, name: 'Address Type', pagesurl: 'https://dialerp.com/finance/address-type', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 48, name: 'Direct Addresses', pagesurl: 'https://dialerp.com/finance/addresses/1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 49, name: 'Indirect Addresses', pagesurl: 'https://dialerp.com/finance/addresses/2', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },


  { position: 50, name: 'Account Settings', pagesurl: 'https://dialerp.com/finance/account-settings', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 51, name: 'CheckIn Purpose', pagesurl: 'https://dialerp.com/finance/checkin-purpose', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 52, name: 'Drop Reasons', pagesurl: 'https://dialerp.com/finance/drop-reasons', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 53, name: 'Reminders', pagesurl: 'https://dialerp.com/finance/reminders', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },


  { position: 54, name: 'KYC', pagesurl: 'https://dialerp.com/finance/kyc', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 55, name: 'Bank', pagesurl: 'https://dialerp.com/finance/bank', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 56, name: 'Pending', pagesurl: 'https://dialerp.com/finance/bank/pending/1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 57, name: 'Verified', pagesurl: 'https://dialerp.com/finance/bank/verified/2', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', }
  ,
  { position: 58, name: 'Verified', pagesurl: 'https://dialerp.com/finance/bank/verified/2', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 59, name: 'Rejected', pagesurl: 'https://dialerp.com/finance/bank/rejected/3', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 60, name: 'ICICI Transactions Details', pagesurl: 'https://dialerp.com/finance/bank/transactinslogs/1', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 61, name: 'Paytm Transactions Details', pagesurl: 'https://dialerp.com/finance/bank/transactinslogs/2', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 62, name: 'Pan Card', pagesurl: 'https://dialerp.com/finance/pan', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 63, name: 'Aadhar Card', pagesurl: 'https://dialerp.com/finance/aadhar', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 64, name: 'GST', pagesurl: 'https://dialerp.com/finance/gst', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },




]


const ELEMENT_DATAS: PeriodicElement[] = [
  { position: 1, name: 'Item Management', pagesurl: 'https://dialerp.com/finance/item-management-new-logic', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 2, name: 'Item Masters', pagesurl: 'https://dialerp.com/finance/item-master-new-logic', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 3, name: 'Finished Goods', pagesurl: 'https://dialerp.com/finance/finished-goods', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 4, name: 'Finished Spares', pagesurl: 'https://dialerp.com/finance/finished-spares', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 5, name: 'Semi Finished Goods', pagesurl: 'https://dialerp.com/finance/semi-finished-goods', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 6, name: 'Raw Materials', pagesurl: 'https://dialerp.com/finance/raw-materials', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 7, name: 'Packing Materials', pagesurl: 'https://dialerp.com/finance/packing-materials', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 8, name: 'Finished Variants', pagesurl: 'https://dialerp.com/finance/finished-variants', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 9, name: 'Item Groups', pagesurl: 'https://dialerp.com/finance/item-group-new-logic', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 10, name: 'Brands', pagesurl: 'https://dialerp.com/finance/brands-new-logic', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 11, name: 'Price Settings', pagesurl: 'https://dialerp.com/finance/price-settings-new-logic', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 12, name: 'Price List', pagesurl: 'https://dialerp.com/finance/price-list-new-logic', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 13, name: 'Old Price List', pagesurl: 'https://dialerp.com/finance/old-price-list-new-logic', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 14, name: 'Price Settings', pagesurl: 'https://dialerp.com/finance/price-settings-new-logic', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 15, name: 'Default Charges', pagesurl: 'https://dialerp.com/finance/default-charges-new-logic', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },


  { position: 16, name: 'Unit Settings', pagesurl: 'https://dialerp.com/finance/unit-settings-new-logic', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 17, name: 'Unit Master', pagesurl: 'https://dialerp.com/finance/unit-master', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 18, name: 'Unit Size Master', pagesurl: 'https://dialerp.com/finance/unit-size-master', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 19, name: 'Unit Colour', pagesurl: 'https://dialerp.com/finance/unit-colour', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 20, name: 'Unit Weight', pagesurl: 'https://dialerp.com/finance/unit-weight', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 21, name: 'Unit Volume', pagesurl: 'https://dialerp.com/finance/unit-volume', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 22, name: 'UOM Master', pagesurl: 'https://dialerp.com/finance/uom-master', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 23, name: 'HSN/SAC', pagesurl: 'https://dialerp.com/finance/hsn-list-new-logic', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 24, name: 'Registered Item', pagesurl: 'https://dialerp.com/finance/registered-items-new-logic', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 25, name: 'Registered Item', pagesurl: 'https://dialerp.com/finance/registered-item-list-new-logic/registered', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 26, name: 'Verified', pagesurl: 'https://dialerp.com/finance/registered-item-list-new-logic/verified', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 27, name: 'Deleted', pagesurl: 'https://dialerp.com/finance/registered-item-list-new-logic/deleted', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },




]

const ELEMENT_DATASS: PeriodicElement[] = [
  { position: 1, name: 'Item Party Ledger', pagesurl: 'https://dialerp.com/finance/item-party-ledger', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 2, name: 'One Item All Party', pagesurl: 'https://dialerp.com/finance/one-item-all-party/41/0/04-01-2021/11-15-2021', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },
  { position: 3, name: 'One Party All Item', pagesurl: 'https://dialerp.com/finance/one-party-all-item/18/0/04-01-2021/11-15-2021', departmentname: '', icon: '', teamright: '', adminright: '', ladmin:'',  ladmins:'', },



  ]


const ELEMENT_DATS: PeriodicElement[] = [
  { position: 1, name: 'GL List', pagesurl: 'https://dialerp.com/finance/gl-list', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 2, name: 'Payment Terms', pagesurl: 'https://dialerp.com/finance/pay-terms', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 3, name: 'Delivery Mode', pagesurl: 'https://dialerp.com/finance/delivery-mode', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 4, name: 'Dispatch Mode', pagesurl: 'https://dialerp.com/finance/dispatch-mode', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 5, name: 'Terms and Conditions', pagesurl: 'https://dialerp.com/finance/terms-condition', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 6, name: ' Voucher Setting', pagesurl: 'https://dialerp.com/finance/voucher-setting', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },



  ]




const ELEMENT_DATT: PeriodicElement[] = [
  { position: 1, name: 'Stock in Hand (Item)', pagesurl: 'https://dialerp.com/finance/item/stock-new/0/0/01-Apr-2021/15-Nov-2021/0/0', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 2, name: 'Stock in Hand (Group)', pagesurl: 'https://dialerp.com/finance/item-group/stock-new/0/0/01-Apr-2021/15-Nov-2021', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  ]



const ELEMENT_DATTS: PeriodicElement[] = [
  { position: 1, name: 'Outstanding Collection Report', pagesurl: 'https://dialerp.com/finance/whitebills-reports/outstanding-report/2', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 2, name: 'Outstanding Amt & Counts', pagesurl: 'https://dialerp.com/finance/whitebills-reports/outstanding-report/8', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 3, name: 'Outstanding Collection Pipeline', pagesurl: 'https://dialerp.com/finance/whitebills-reports/outstanding-report/23', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 4, name: 'Outstanding Payment Pipeline', pagesurl: 'https://dialerp.com/finance/whitebills-reports/outstanding-report/26', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  ]
 

const ELEMENT_DATTA: PeriodicElement[] = [
  { position: 1, name: 'Primary Sale', pagesurl: 'https://dialerp.com/finance/mtd-report', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  { position: 2, name: 'Secondary Orders', pagesurl: 'https://dialerp.com/finance/secondary-order-report', departmentname: '', icon: 'settings', teamright: '', adminright: '', ladmin:'',  ladmins:'', },

  ]

@Component({
  selector: 'app-pagerights',
  templateUrl: './pagerights.component.html',
  styleUrls: ['./pagerights.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PagerightsComponent implements OnInit {

 panelOpenState = false;

  events: string[] = [];
  opened: boolean;

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));

  constructor() {
  }




  displayedColumns: string[] = [ 'position', 'name', 'pagesurl', 'departmentname', 'teamright', 'adminright', 'ladmin', 'ladmins', 'icon'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);


  dataSources = new MatTableDataSource<PeriodicElement>(ELEMENT_DATAA);

  dataSourcess = new MatTableDataSource<PeriodicElement>(ELEMENT_DATAS);

  dataSourcee = new MatTableDataSource<PeriodicElement>(ELEMENT_DATASS); 
   dataSourc = new MatTableDataSource<PeriodicElement>(ELEMENT_DATS);

   dataSourcc = new MatTableDataSource<PeriodicElement>(ELEMENT_DATT);

   dataSourcce = new MatTableDataSource<PeriodicElement>(ELEMENT_DATTS);

   dataSourccs = new MatTableDataSource<PeriodicElement>(ELEMENT_DATTA);

  myControl = new FormControl();
  options: string[] = ['Sales CRM', 'Finance', 'Distribution', 'Marketing', 'Production', 'Logistics', 'Ivr', 'Support Crm', 'Email', 'Sms'];
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
}
