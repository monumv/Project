import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DispatchRoutingModule } from './dispatch-routing.module';
import { DispatchMasterComponent } from './master/dispatch-master/dispatch-master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DispatchComponent } from './pages/dispatch/dispatch.component';
import { GateinComponent } from './pages/gatein/gatein.component';
import { PendingqcComponent } from './pages/pendingqc/pendingqc.component';
import { PendingapprovalComponent } from './pages/pendingapproval/pendingapproval.component';
import { ApprovedComponent } from './pages/approved/approved.component';
import { VehiclemanagementComponent } from './pages/vehiclemanagement/vehiclemanagement.component';
import { VehiclelistComponent } from './pages/vehiclelist/vehiclelist.component';
import { DriversComponent } from './pages/drivers/drivers.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatTableModule} from '@angular/material/table';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {OverlayModule} from '@angular/cdk/overlay';
import {MatChipsModule} from '@angular/material/chips';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
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



@NgModule({
  declarations: [DispatchMasterComponent, DashboardComponent, DispatchComponent, GateinComponent, PendingqcComponent, PendingapprovalComponent, ApprovedComponent, VehiclemanagementComponent, VehiclelistComponent, DriversComponent, VehiclecheckinComponent, BilledComponent, LoadVehicalComponent, SelectVehicalComponent, SelectItemsComponent, IssuePackagingMaterialComponent, DispatchSummaryComponent, CreateprojectedComponent, ReportBounceComponent, DropLocationComponent, PreviewLoadedVehicalComponent, ItemspendingComponent, LoaditemsComponent, ],
  imports: [
    CommonModule,
    DispatchRoutingModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatTreeModule,
    MatStepperModule,
    MatSelectModule,
	MatDialogModule,
	MatExpansionModule,
	MatBottomSheetModule,
	MatPaginatorModule,
	MatChipsModule,
	OverlayModule,
	MatRadioModule,
	FormsModule,
	ReactiveFormsModule,
	MatAutocompleteModule,
	MatTableModule,
	MatNativeDateModule,
	MatDatepickerModule,
	MatFormFieldModule,
	MatInputModule,
	MatCheckboxModule,
	MatTabsModule
  ]
})
export class DispatchModule { }
