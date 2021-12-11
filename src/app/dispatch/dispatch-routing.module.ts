import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispatchModule } from './dispatch.module';
import { DispatchMasterComponent } from './master/dispatch-master/dispatch-master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GateinComponent } from './pages/gatein/gatein.component';
import { DispatchComponent } from './pages/dispatch/dispatch.component';
import { VehiclemanagementComponent } from './pages/vehiclemanagement/vehiclemanagement.component';
import { PendingqcComponent } from './pages/pendingqc/pendingqc.component';
import { PendingapprovalComponent } from './pages/pendingapproval/pendingapproval.component';
import { ApprovedComponent } from './pages/approved/approved.component';
import { VehiclelistComponent } from './pages/vehiclelist/vehiclelist.component';
import { DriversComponent } from './pages/drivers/drivers.component';
import { VehiclecheckinComponent } from './pages/vehiclecheckin/vehiclecheckin.component';
import { BilledComponent } from './pages/billed/billed.component';
import { LoadVehicalComponent } from './pages/load-vehical/load-vehical.component';
import { SelectVehicalComponent } from './pages/select-vehical/select-vehical.component';
import { SelectItemsComponent } from './pages/select-items/select-items.component';
import { IssuePackagingMaterialComponent } from './pages/issue-packaging-material/issue-packaging-material.component';
import { DispatchSummaryComponent } from './pages/dispatch-summary/dispatch-summary.component';
import { CreateprojectedComponent } from './pages/createprojected/createprojected.component';
import { ReportBounceComponent } from './pages/report-bounce/report-bounce.component';
import { DropLocationComponent } from './pages/drop-location/drop-location.component';
import { PreviewLoadedVehicalComponent } from './pages/preview-loaded-vehical/preview-loaded-vehical.component';
import { ItemspendingComponent } from './pages/itemspending/itemspending.component';
import { LoaditemsComponent } from './pages/loaditems/loaditems.component';

const routes: Routes = [
 { path: '', component: DispatchMasterComponent,

 children: [
   { path: '', component: DashboardComponent},
   { path: 'gatein', component: GateinComponent}, 
   { path: 'dispatch', component: DispatchComponent}, 
   { path: 'vehiclemanagement', component: VehiclemanagementComponent}, 
   { path: 'pendingqc', component: PendingqcComponent}, 
   { path: 'pendingapproval', component: PendingapprovalComponent}, 
   { path: 'approved', component: ApprovedComponent},  
   { path: 'vehiclelist', component: VehiclelistComponent},    
   { path: 'drivers', component: DriversComponent},     
   { path: 'vehiclecheckin', component: VehiclecheckinComponent},     
   { path: 'billed', component: BilledComponent},       
   { path: 'load-vehical', component: LoadVehicalComponent},     
   { path: 'select-vehical', component: SelectVehicalComponent}, 
   { path: 'select-items', component: SelectItemsComponent}, 
   { path: 'issue-packaging-material', component: IssuePackagingMaterialComponent}, 
   { path: 'dispatch-summary', component: DispatchSummaryComponent},    
   { path: 'createprojected', component: CreateprojectedComponent},          
   { path: 'report-bounce', component: ReportBounceComponent},       
   { path: 'drop-location', component: DropLocationComponent},            
   { path: 'preview-loaded-vehical', component: PreviewLoadedVehicalComponent},            
   { path: 'itemspending', component: ItemspendingComponent},            
   { path: 'loaditems', component: LoaditemsComponent},                 
 ],
},

 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispatchRoutingModule { }
