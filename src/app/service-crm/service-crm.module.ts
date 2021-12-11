import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ServiceCrmRoutingModule } from './service-crm-routing.module';
import { ServiceMasterComponent } from './master/service-master/service-master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComplaintsComponent } from './pages/complaints/complaints.component';
import { OpenComponent } from './pages/open/open.component';
import { RequestserviceComponent } from './pages/requestservice/requestservice.component';
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

import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import { ChartsModule } from 'ng2-charts';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { AddnewaddressComponent } from './pages/addnewaddress/addnewaddress.component';
import { AddnewproductComponent } from './pages/addnewproduct/addnewproduct.component';
import { AddrowfieldComponent } from './pages/addrowfield/addrowfield.component';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country'; 
import {HttpClientModule} from '@angular/common/http';
import { FeedbacksComponent } from './pages/feedbacks/feedbacks.component';
import { CrmsettingsComponent } from './pages/crmsettings/crmsettings.component';
import { RouteplannerComponent } from './pages/routeplanner/routeplanner.component';
import { FoclaimsComponent } from './pages/foclaims/foclaims.component';
import { ChargesdueComponent } from './pages/chargesdue/chargesdue.component';
import { ChargesclaimsComponent } from './pages/chargesclaims/chargesclaims.component';
import { ServicecatelogueComponent } from './pages/servicecatelogue/servicecatelogue.component';
import { ComplaintManagementComponent } from './pages/complaint-management/complaint-management.component';
import { ComplaintTypeComponent } from './pages/complaint-type/complaint-type.component';
import { ComplaintgroupComponent } from './pages/complaintgroup/complaintgroup.component';
import {MatSortModule} from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import { DialogComponent } from './pages/dialog/dialog.component';
import { ComplaintdetailsComponent } from './pages/complaintdetails/complaintdetails.component';

@NgModule({
  declarations: [ServiceMasterComponent, DashboardComponent, ComplaintsComponent, OpenComponent, RequestserviceComponent, AddnewaddressComponent, AddnewproductComponent, AddrowfieldComponent, ThankyouComponent, FeedbacksComponent, CrmsettingsComponent, RouteplannerComponent, FoclaimsComponent, ChargesdueComponent, ChargesclaimsComponent, ServicecatelogueComponent, ComplaintManagementComponent, ComplaintTypeComponent, ComplaintgroupComponent, DialogComponent, ComplaintdetailsComponent],
  imports: [
    CommonModule,
    ServiceCrmRoutingModule,
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
    MatDialogModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatInputModule,
    ChartsModule,
    MatStepperModule,
    MatRadioModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatSelectCountryModule,
    HttpClientModule,
    MatSortModule,
    MatExpansionModule
  ],
    entryComponents: [ AddnewaddressComponent, AddnewproductComponent,   AddrowfieldComponent, ThankyouComponent, DialogComponent ]
})
export class ServiceCrmModule { }
