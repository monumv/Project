import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DistributionRoutingModule } from './distribution-routing.module';
import { DistributionMasterComponent } from './master/distribution-master/distribution-master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DistributionmastersComponent } from './pages/distributionmasters/distributionmasters.component';
import { DeliveryrouteComponent } from './pages/deliveryroute/deliveryroute.component';
import { AccountrouteComponent } from './pages/accountroute/accountroute.component';
import { EmployeerouteComponent } from './pages/employeeroute/employeeroute.component';
import { TransportersComponent } from './pages/transporters/transporters.component';
import { MaterialComponent } from './pages/material/material.component';
import { MaterialgroupComponent } from './pages/materialgroup/materialgroup.component';
import { SaleorderComponent } from './pages/saleorder/saleorder.component';
import { IndirectorderComponent } from './pages/indirectorder/indirectorder.component';
import { DirectorderComponent } from './pages/directorder/directorder.component';
import { BranchtobranchComponent } from './pages/branchtobranch/branchtobranch.component';
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
import { SubscriptionComponent } from './pages/subscription/subscription.component';
import { PendingordersComponent } from './pages/pendingorders/pendingorders.component';
import { AcceptedordersComponent } from './pages/acceptedorders/acceptedorders.component';
import { ReadytopackComponent } from './pages/readytopack/readytopack.component';
import { ReadytobillComponent } from './pages/readytobill/readytobill.component';
import { DispatchedordersComponent } from './pages/dispatchedorders/dispatchedorders.component';
import { DeliveredordersComponent } from './pages/deliveredorders/deliveredorders.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { ApprovedComponent } from './pages/approved/approved.component';
import { ReturnedComponent } from './pages/returned/returned.component';
import { AllordersComponent } from './pages/allorders/allorders.component';
import { AgeingreportComponent } from './pages/ageingreport/ageingreport.component';
import { DistributionsettingsComponent } from './pages/distributionsettings/distributionsettings.component';
import { CutofftimeComponent } from './pages/cutofftime/cutofftime.component';
import { UndereviewComponent } from './pages/undereview/undereview.component';
import { VisitmanagementComponent } from './pages/visitmanagement/visitmanagement.component';
import { VisitplanComponent } from './pages/visitplan/visitplan.component';
import { VisitscheduleComponent } from './pages/visitschedule/visitschedule.component';
import { SaleareaplaneerComponent } from './pages/saleareaplaneer/saleareaplaneer.component';
import { AreaassignedacccountsComponent } from './pages/areaassignedacccounts/areaassignedacccounts.component';
import { AreassignedemployeeComponent } from './pages/areassignedemployee/areassignedemployee.component';
import { DeliveryrouteplannerComponent } from './pages/deliveryrouteplanner/deliveryrouteplanner.component';
import { AdroutesComponent } from './pages/adroutes/adroutes.component';
import { AssigndeliveryroutesComponent } from './pages/assigndeliveryroutes/assigndeliveryroutes.component';
import { CountryplannerComponent } from './pages/countryplanner/countryplanner.component';


@NgModule({
  declarations: [DistributionMasterComponent, DashboardComponent, DistributionmastersComponent, DeliveryrouteComponent, AccountrouteComponent, EmployeerouteComponent, TransportersComponent, MaterialComponent, MaterialgroupComponent, SaleorderComponent, IndirectorderComponent, DirectorderComponent, BranchtobranchComponent, SubscriptionComponent, PendingordersComponent, AcceptedordersComponent, ReadytopackComponent, ReadytobillComponent, DispatchedordersComponent, DeliveredordersComponent, ComplaintComponent, ApprovedComponent, ReturnedComponent, AllordersComponent, AgeingreportComponent, DistributionsettingsComponent, CutofftimeComponent, UndereviewComponent, VisitmanagementComponent, VisitplanComponent, VisitscheduleComponent, SaleareaplaneerComponent, AreaassignedacccountsComponent, AreassignedemployeeComponent, DeliveryrouteplannerComponent, AdroutesComponent, AssigndeliveryroutesComponent, CountryplannerComponent],
  imports: [
    CommonModule,
    DistributionRoutingModule,
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
  ]
})
export class DistributionModule { }
