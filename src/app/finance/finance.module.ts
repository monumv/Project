import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceMasterComponent } from './master/finance-master/finance-master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MediaGalleryComponent } from './pages/media-gallery/media-gallery.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {MatRadioModule} from '@angular/material/radio';
import { VouchersComponent } from './pages/vouchers/vouchers.component';
import { PaymenManagementComponent } from './pages/paymen-management/paymen-management.component';
import { PaymentsComponent } from './pages/payments/payments.component';
import { ProposedPaymentsComponent } from './pages/proposed-payments/proposed-payments.component';
import { IciciPayComponent } from './pages/icici-pay/icici-pay.component';
import { OtpComponent } from './pages/otp/otp.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatExpansionModule} from '@angular/material/expansion';
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
import { DialogComponent } from './pages/dialog/dialog.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { VideoGalleryComponent } from './pages/video-gallery/video-gallery.component';
import { MediaGalleryVideoComponent } from './pages/media-gallery-video/media-gallery-video.component';
import { WhitebillsreportComponent } from './pages/whitebillsreport/whitebillsreport.component';
import { OutstandingcollectionreportComponent } from './pages/outstandingcollectionreport/outstandingcollectionreport.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ChartsModule } from 'ng2-charts';
import { SalemanagementComponent } from './pages/salemanagement/salemanagement.component';
import { SaleorderindirectComponent } from './pages/saleorderindirect/saleorderindirect.component';
import { AllsubscriptionComponent } from './pages/allsubscription/allsubscription.component';
import { SubscriptionscheduleComponent } from './pages/subscriptionschedule/subscriptionschedule.component';

import { ReceiptmanagementComponent } from './pages/receiptmanagement/receiptmanagement.component';
import { ProposdreceiptComponent } from './pages/proposdreceipt/proposdreceipt.component';
import { ProposedpaymentComponent } from './pages/proposedpayment/proposedpayment.component';
import { PurchasemanagementComponent } from './pages/purchasemanagement/purchasemanagement.component';
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
import { CreatesaleComponent } from './pages/createsale/createsale.component';
import { AddsaleorderComponent } from './pages/addsaleorder/addsaleorder.component';
import { PaymentlinkComponent } from './pages/paymentlink/paymentlink.component';
import { SuccessComponent } from './pages/success/success.component';


@NgModule({
  declarations: [FinanceMasterComponent, DashboardComponent, MediaGalleryComponent, VouchersComponent, PaymenManagementComponent, PaymentsComponent, ProposedPaymentsComponent, IciciPayComponent, OtpComponent, ThankyouComponent, SaleComponent, PurchaselistComponent, SalesreturncrComponent, PurchasereturndrComponent, ReceiptComponent, JournalComponent, DebitNoteWithoutItemComponent, CreditNoteWithoutItemComponent, IssuedtopartyComponent, ReceivedfrompartyComponent, AccountManagementComponent, AccountsComponent, CustomeraccountComponent, SupplieraccountComponent, BranchaccountComponent, BankaccountComponent, EmployeeComponent, AccountgroupComponent, ManualrechargesComponent, ItemmanagementComponent, ItemsComponent, ItemvariantsComponent, ItemgroupsComponent, UnitComponent, UnirgroupsComponent, ItemsizeComponent, ItemcolorComponent, PackmanagementComponent, PacksComponent, MasterpackComponent, PricesettingsComponent, PricelistComponent, OldpricelistComponent, HsnlistComponent, BrandsComponent, RegisteredItemComponent, StockinhandComponent, ItempartyComponent, FinancesettingsComponent, GlistComponent, ProposalsComponent, DialogComponent, GalleryComponent, VideoGalleryComponent, MediaGalleryVideoComponent, WhitebillsreportComponent, OutstandingcollectionreportComponent, SalemanagementComponent, SaleorderindirectComponent, AllsubscriptionComponent, SubscriptionscheduleComponent,  ReceiptmanagementComponent, ProposdreceiptComponent, ProposedpaymentComponent, PurchasemanagementComponent, AcceptedComponent, SaleinvoiceComponent, MarkdeleveredComponent, CancelComponent, CreatejournalComponent, ViewjournalComponent, ViewitemstockComponent, ItemstockgroupComponent, ItemstockComponent, ReportsComponent, PrimarysaleComponent, VisitsComponent, SecondaryordersComponent, CreatesaleComponent, AddsaleorderComponent, PaymentlinkComponent, SuccessComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    FinanceRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatTreeModule,
    NgxDropzoneModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatChipsModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,ChartsModule,
  ],
   entryComponents: [IciciPayComponent, OtpComponent, ThankyouComponent,DialogComponent ]
})
export class FinanceModule { }
