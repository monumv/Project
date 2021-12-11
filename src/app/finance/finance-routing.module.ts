import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinanceMasterComponent } from './master/finance-master/finance-master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MediaGalleryComponent } from './pages/media-gallery/media-gallery.component';
import { VouchersComponent } from './pages/vouchers/vouchers.component';
import { PaymenManagementComponent } from './pages/paymen-management/paymen-management.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { ProposedPaymentsComponent } from './pages/proposed-payments/proposed-payments.component';
import { SaleComponent } from './pages/sale/sale.component';
import { PurchaselistComponent } from './pages/purchaselist/purchaselist.component';
import { SalesreturncrComponent } from './pages/salesreturncr/salesreturncr.component';
import { PurchasereturndrComponent } from './pages/purchasereturndr/purchasereturndr.component';
import { ReceiptComponent } from './pages/receipt/receipt.component';
import { JournalComponent } from './pages/journal/journal.component';
import { DebitNoteWithoutItemComponent } from './pages/debit-note-without-item/debit-note-without-item.component';
import { CreditNoteWithoutItemComponent } from './pages/credit-note-without-item/credit-note-without-item.component';
import { IssuedtopartyComponent } from './pages/issuedtoparty/issuedtoparty.component';
import { ReceivedfrompartyComponent } from './pages/receivedfromparty/receivedfromparty.component';

import { AccountManagementComponent } from './pages/account-management/account-management.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { CustomeraccountComponent } from './pages/customeraccount/customeraccount.component';
import { SupplieraccountComponent } from './pages/supplieraccount/supplieraccount.component';
import { BranchaccountComponent } from './pages/branchaccount/branchaccount.component';
import { BankaccountComponent } from './pages/bankaccount/bankaccount.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { AccountgroupComponent } from './pages/accountgroup/accountgroup.component';
import { ManualrechargesComponent } from './pages/manualrecharges/manualrecharges.component';

import { ItemmanagementComponent } from './pages/itemmanagement/itemmanagement.component';
import { ItemsComponent } from './pages/items/items.component';
import { ItemvariantsComponent } from './pages/itemvariants/itemvariants.component';
import { ItemgroupsComponent } from './pages/itemgroups/itemgroups.component';
import { UnitComponent } from './pages/unit/unit.component';
import { UnirgroupsComponent } from './pages/unirgroups/unirgroups.component';
import { ItemsizeComponent } from './pages/itemsize/itemsize.component';
import { ItemcolorComponent } from './pages/itemcolor/itemcolor.component';
import { PackmanagementComponent } from './pages/packmanagement/packmanagement.component';
import { PacksComponent } from './pages/packs/packs.component';
import { MasterpackComponent } from './pages/masterpack/masterpack.component';
import { PricesettingsComponent } from './pages/pricesettings/pricesettings.component';
import { PricelistComponent } from './pages/pricelist/pricelist.component';
import { OldpricelistComponent } from './pages/oldpricelist/oldpricelist.component';
import { HsnlistComponent } from './pages/hsnlist/hsnlist.component';
import { BrandsComponent } from './pages/brands/brands.component';
import { RegisteredItemComponent } from './pages/registered-item/registered-item.component';
import { StockinhandComponent } from './pages/stockinhand/stockinhand.component';
import { ItempartyComponent } from './pages/itemparty/itemparty.component';
import { FinancesettingsComponent } from './pages/financesettings/financesettings.component';
import { GlistComponent } from './pages/glist/glist.component';
import { ProposalsComponent } from './pages/proposals/proposals.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { VideoGalleryComponent } from './pages/video-gallery/video-gallery.component';
import { MediaGalleryVideoComponent } from './pages/media-gallery-video/media-gallery-video.component';

import { WhitebillsreportComponent } from './pages/whitebillsreport/whitebillsreport.component';
import { OutstandingcollectionreportComponent } from './pages/outstandingcollectionreport/outstandingcollectionreport.component';

import { SalemanagementComponent } from './pages/salemanagement/salemanagement.component';
import { SaleorderindirectComponent } from './pages/saleorderindirect/saleorderindirect.component';
import { AllsubscriptionComponent } from './pages/allsubscription/allsubscription.component';
import { SubscriptionscheduleComponent } from './pages/subscriptionschedule/subscriptionschedule.component';

import { PurchasemanagementComponent } from './pages/purchasemanagement/purchasemanagement.component';
import { ReceiptmanagementComponent } from './pages/receiptmanagement/receiptmanagement.component';
import { ProposdreceiptComponent } from './pages/proposdreceipt/proposdreceipt.component';
import { ProposedpaymentComponent } from './pages/proposedpayment/proposedpayment.component';

import { AcceptedComponent } from './pages/accepted/accepted.component';
import { SaleinvoiceComponent } from './pages/saleinvoice/saleinvoice.component';
import { MarkdeleveredComponent } from './pages/markdelevered/markdelevered.component';
import { CancelComponent } from './pages/cancel/cancel.component';
import { CreatejournalComponent } from './pages/createjournal/createjournal.component';
import { ViewjournalComponent } from './pages/viewjournal/viewjournal.component';
import { ViewitemstockComponent } from './pages/viewitemstock/viewitemstock.component';
import { ItemstockgroupComponent } from './pages/itemstockgroup/itemstockgroup.component';
import { ItemstockComponent } from './pages/itemstock/itemstock.component';

import { ReportsComponent } from './pages/reports/reports.component';
import { PrimarysaleComponent } from './pages/primarysale/primarysale.component';
import { VisitsComponent } from './pages/visits/visits.component';
import { SecondaryordersComponent } from './pages/secondaryorders/secondaryorders.component';
import { AddsaleorderComponent } from './pages/addsaleorder/addsaleorder.component';

import { CreatesaleComponent } from './pages/createsale/createsale.component';
import { PaymentlinkComponent } from './pages/paymentlink/paymentlink.component';
import { SuccessComponent } from './pages/success/success.component';


const routes: Routes = [

  
 { path: '', component: FinanceMasterComponent,

 children: [
   { path: '', component: DashboardComponent}, 
   { path: 'media-gallery', component: MediaGalleryComponent}, 
   { path: 'vouchers', component: VouchersComponent}, 
   { path: 'paymen-management', component: PaymenManagementComponent}, 
   { path: 'payments', component: PaymentsComponent}, 
   { path: 'proposed-payments', component: ProposedPaymentsComponent},  
   { path: 'sale', component: SaleComponent},  
   { path: 'purchaselist', component: PurchaselistComponent},  
   { path: 'salesreturncr', component: SalesreturncrComponent},  
   { path: 'purchasereturndr', component: PurchasereturndrComponent},  
   { path: 'receipt', component: ReceiptComponent},  
   { path: 'journal', component: JournalComponent},  
   { path: 'debit-note-without-item', component: DebitNoteWithoutItemComponent},  
   { path: 'credit-note-without-item', component: CreditNoteWithoutItemComponent},  
   { path: 'issuedtoparty', component: IssuedtopartyComponent},  
   { path: 'receivedfromparty', component: ReceivedfrompartyComponent},  
   { path: 'account-management', component: AccountManagementComponent},   
   { path: 'accounts', component: AccountsComponent},   
   { path: 'customeraccount', component: CustomeraccountComponent},   
   { path: 'supplieraccount', component: SupplieraccountComponent},   
   { path: 'branchaccount', component: BranchaccountComponent},   
   { path: 'bankaccount', component: BankaccountComponent},   
   { path: 'employee', component: EmployeeComponent},   
   { path: 'accountgroup', component: AccountgroupComponent},   
   { path: 'manualrecharges', component: ManualrechargesComponent},  
   { path: 'itemmanagement', component: ItemmanagementComponent}, 
   { path: 'items', component: ItemsComponent}, 
   { path: 'itemvariants', component: ItemvariantsComponent}, 
   { path: 'itemgroups', component: ItemgroupsComponent}, 
   { path: 'unit', component: UnitComponent}, 
   { path: 'unirgroups', component: UnirgroupsComponent}, 
   { path: 'itemsize', component: ItemsizeComponent}, 
   { path: 'itemcolor', component: ItemcolorComponent}, 
   { path: 'packmanagement', component: PackmanagementComponent}, 
   { path: 'packs', component: PacksComponent}, 
   { path: 'masterpack', component: MasterpackComponent}, 
   { path: 'pricesettings', component: PricesettingsComponent}, 
   { path: 'pricelist', component: PricelistComponent}, 
   { path: 'oldpricelist', component: OldpricelistComponent}, 
   { path: 'hsnlist', component: HsnlistComponent}, 
   { path: 'brands', component: BrandsComponent}, 
   { path: 'registered-item', component: RegisteredItemComponent}, 
   { path: 'stockinhand', component: StockinhandComponent}, 
   { path: 'itemparty', component: ItempartyComponent}, 
   { path: 'financesettings', component: FinancesettingsComponent}, 
   { path: 'proposals', component: ProposalsComponent},  
   { path: 'gallery', component: GalleryComponent},  
   { path: 'video-gallery', component: VideoGalleryComponent}, 
   { path: 'media-gallery-video', component: MediaGalleryVideoComponent},   
   { path: 'whitebillsreport', component: WhitebillsreportComponent},    
   { path: 'outstandingcollectionreport', component: OutstandingcollectionreportComponent},   
   { path: 'salemanagement', component: SalemanagementComponent },   
   { path: 'saleorderindirect', component: SaleorderindirectComponent },   
   { path: 'allsubscription', component: AllsubscriptionComponent },   
   { path: 'subscriptionschedule', component: SubscriptionscheduleComponent },     
   { path: 'purchasemanagement', component: PurchasemanagementComponent  },     
   { path: 'receiptmanagement', component: ReceiptmanagementComponent  },     
   { path: 'proposdreceipt', component: ProposdreceiptComponent  },     
   { path: 'proposedpayment', component: ProposedpaymentComponent  },    
   { path: 'accepted', component: AcceptedComponent   },    
   { path: 'saleinvoice', component: SaleinvoiceComponent   },    
   { path: 'markdelevered', component: MarkdeleveredComponent   },    
   { path: 'cancel', component: CancelComponent   },   
   { path: 'createjournal', component: CreatejournalComponent    },   
   { path: 'viewjournal', component: ViewjournalComponent    },
   { path: 'viewitemstock', component: ViewitemstockComponent }, 
   { path: 'itemstockgroup', component: ItemstockgroupComponent }, 
   { path: 'itemstock', component: ItemstockComponent  }, 
   { path: 'reports', component: ReportsComponent}, 
   { path: 'primarysale', component: PrimarysaleComponent  }, 
   { path: 'visits', component: VisitsComponent   }, 
   { path: 'secondaryorders', component: SecondaryordersComponent   },  
 ],
 
  
  }, 

   { path: 'createsale', component: CreatesaleComponent}, 

   { path: 'addsaleorder', component: AddsaleorderComponent},
   { path: 'paymentlink', component: PaymentlinkComponent },
   { path: 'success', component: SuccessComponent   },  
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanceRoutingModule { }
