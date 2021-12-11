import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductionModule } from './production.module';
import { ProductionMasterComponent } from './master/production-master/production-master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CouponComponent } from './pages/coupon/coupon.component';
import { ClaimComponent } from './pages/claim/claim.component';
import { CouponClaimComponent } from './pages/coupon-claim/coupon-claim.component';
import { PointsClaimedComponent } from './pages/points-claimed/points-claimed.component';
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
import { AddpurchaseComponent } from './pages/addpurchase/addpurchase.component';
import { CouponbatchlistComponent } from './pages/couponbatchlist/couponbatchlist.component';
import { CouponcodeComponent } from './pages/couponcode/couponcode.component';
import { ReedempointsComponent } from './pages/reedempoints/reedempoints.component';
import { RewardslistComponent } from './pages/rewardslist/rewardslist.component';
import { StockinhandComponent } from './pages/stockinhand/stockinhand.component';
import { StockinhandvocherComponent } from './pages/stockinhandvocher/stockinhandvocher.component';

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

const routes: Routes = [
 { path: '', component: ProductionMasterComponent,
	children: [
    { path: '', component: DashboardComponent},
    { path: 'coupon', component: CouponComponent},
    { path: 'claim', component: ClaimComponent},
    { path: 'rewards', component: RewardsComponent},
    { path: 'manual-points', component: ManualPointsComponent},
    { path: 'inhouse', component: InhouseComponent},
    { path: 'planning', component: PlanningComponent},
    { path: 'workorder', component: WorkorderComponent},
    { path: 'aginstwo', component: AginstwoComponent},
    { path: 'outsourced', component: OutsourcedComponent},
    { path: 'purchase', component: PurchaseComponent},
    { path: 'purchaseorder', component: PurchaseorderComponent},
    { path: 'purchaseagainst', component: PurchaseagainstComponent},
    { path: 'pendingorder', component: PendingorderComponent},
    { path: 'bom', component: BomComponent},
    { path: 'barcode', component: BarcodeComponent},
    { path: 'barcodelist', component: BarcodelistComponent},
    { path: 'production', component: ProductionComponent},
    { path: 'couponbatchlist', component: CouponbatchlistComponent},
    { path: 'couponcode', component: CouponcodeComponent},
    { path: 'reedempoints', component: ReedempointsComponent},
    { path: 'rewardslist', component: RewardslistComponent},
    { path: 'stockinhand', component: StockinhandComponent},
    { path: 'stockinhandvocher', component: StockinhandvocherComponent},
    { path: 'dailyproduction', component: DailyproductionComponent},
    { path: 'sliproduction', component: SliproductionComponent },
    { path: 'dailyconsumption', component: DailyconsumptionComponent},
    { path: 'barcodeprint', component: BarcodeprintComponent},
    { path: 'downloadpdf', component: DownloadpdfComponent},
	],
  
   },	

    { path: 'coupon-claim', component: CouponClaimComponent},
    { path: 'points-claimed', component: PointsClaimedComponent},
    { path: 'addproductionplan', component: AddproductionplanComponent},
    { path: 'productionplanlist', component: ProductionplanlistComponent },
    { path: 'createbom', component: CreatebomComponent },
    { path: 'viewbom', component: ViewbomComponent },
    { path: 'viewproductinplan', component: ViewproductinplanComponent},
    { path: 'productionslip', component: ProductionslipComponent},
    { path: 'viewproductionvoucher', component: ViewproductionvoucherComponent},
    { path: 'viewproductionplan', component: ViewproductionplanComponent},
    { path: 'viewprovoucher', component: ViewprovoucherComponent},
   ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRoutingModule { }
