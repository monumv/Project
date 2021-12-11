import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ProductionRoutingModule } from './production-routing.module';
import { ProductionMasterComponent } from './master/production-master/production-master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CouponComponent } from './pages/coupon/coupon.component';
import { ClaimComponent } from './pages/claim/claim.component';
import { CouponClaimComponent } from './pages/coupon-claim/coupon-claim.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country'; 
import {HttpClientModule} from '@angular/common/http';
import { PointsClaimedComponent } from './pages/points-claimed/points-claimed.component';
import { AddaccountComponent } from './pages/addaccount/addaccount.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RewardsComponent } from './pages/rewards/rewards.component';
import { ManualPointsComponent } from './pages/manual-points/manual-points.component';
import { InhouseComponent } from './pages/inhouse/inhouse.component';
import { PlanningComponent } from './pages/planning/planning.component';
import { WorkorderComponent } from './pages/workorder/workorder.component';
import { AginstwoComponent } from './pages/aginstwo/aginstwo.component';
import { OutsourcedComponent } from './pages/outsourced/outsourced.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { PurchaseorderComponent } from './pages/purchaseorder/purchaseorder.component';
import { PurchaseagainstComponent } from './pages/purchaseagainst/purchaseagainst.component';
import { PendingorderComponent } from './pages/pendingorder/pendingorder.component';
import { BomComponent } from './pages/bom/bom.component';
import { BarcodeComponent } from './pages/barcode/barcode.component';
import { BarcodelistComponent } from './pages/barcodelist/barcodelist.component';
import { ProductionComponent } from './pages/production/production.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { AddpurchaseComponent } from './pages/addpurchase/addpurchase.component';
import { CommondialogComponent } from './pages/commondialog/commondialog.component';
import { CouponbatchlistComponent } from './pages/couponbatchlist/couponbatchlist.component';
import { CouponcodeComponent } from './pages/couponcode/couponcode.component';
import { ReedempointsComponent } from './pages/reedempoints/reedempoints.component';
import { RewardslistComponent } from './pages/rewardslist/rewardslist.component';
import { StockinhandComponent } from './pages/stockinhand/stockinhand.component';
import { StockinhandvocherComponent } from './pages/stockinhandvocher/stockinhandvocher.component';
import {MatChipsModule} from '@angular/material/chips';
import { ProductionplanlistComponent } from './pages/productionplanlist/productionplanlist.component';
import { AddproductionplanComponent } from './pages/addproductionplan/addproductionplan.component';
import { CreatebomComponent } from './pages/createbom/createbom.component';
import { ViewbomComponent } from './pages/viewbom/viewbom.component';
import { ViewproductinplanComponent } from './pages/viewproductinplan/viewproductinplan.component';
import { ProductionslipComponent } from './pages/productionslip/productionslip.component';
import { DailyproductionComponent } from './pages/dailyproduction/dailyproduction.component';
import { ViewproductionvoucherComponent } from './pages/viewproductionvoucher/viewproductionvoucher.component';
import { ViewproductionplanComponent } from './pages/viewproductionplan/viewproductionplan.component';
import { SliproductionComponent } from './pages/sliproduction/sliproduction.component';
import { DailyconsumptionComponent } from './pages/dailyconsumption/dailyconsumption.component';
import { BarcodeprintComponent } from './pages/barcodeprint/barcodeprint.component';
import { ViewprovoucherComponent } from './pages/viewprovoucher/viewprovoucher.component';
import { DownloadpdfComponent } from './pages/downloadpdf/downloadpdf.component';

@NgModule({
  declarations: [ProductionMasterComponent, DashboardComponent, CouponComponent, ClaimComponent, CouponClaimComponent, PointsClaimedComponent, AddaccountComponent, RewardsComponent, ManualPointsComponent, InhouseComponent, PlanningComponent, WorkorderComponent, AginstwoComponent, OutsourcedComponent, PurchaseComponent, PurchaseorderComponent, PurchaseagainstComponent, PendingorderComponent, BomComponent, BarcodeComponent, BarcodelistComponent, ProductionComponent, DialogComponent, AddpurchaseComponent, CommondialogComponent, CouponbatchlistComponent, CouponcodeComponent, ReedempointsComponent, RewardslistComponent, StockinhandComponent, StockinhandvocherComponent, ProductionplanlistComponent, AddproductionplanComponent, CreatebomComponent, ViewbomComponent, ViewproductinplanComponent, ProductionslipComponent, DailyproductionComponent, ViewproductionvoucherComponent, ViewproductionplanComponent, SliproductionComponent, DailyconsumptionComponent, BarcodeprintComponent, ViewprovoucherComponent, DownloadpdfComponent],
  imports: [
    CommonModule,
    ProductionRoutingModule,
    FlexLayoutModule,
     MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatTreeModule,
    MatTableModule,
    MatPaginatorModule,
    MatCheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatAutocompleteModule,
    MatSelectCountryModule,
    HttpClientModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule

  ],
    entryComponents: [ AddaccountComponent, DialogComponent, CommondialogComponent  ]
})
export class ProductionModule { }
