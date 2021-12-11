import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SupportCrmRoutingModule } from './support-crm-routing.module';
import { SupportcrmMasterComponent } from './master/supportcrm-master/supportcrm-master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ComplaintsComponent } from './pages/complaints/complaints.component';
import { OpenComponent } from './pages/open/open.component';
import { ClosedComponent } from './pages/closed/closed.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';
import { AllcomplaintsComponent } from './pages/allcomplaints/allcomplaints.component';

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
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import { ChartsModule } from 'ng2-charts';
import { SettingsComponent } from './pages/settings/settings.component';
import { SolutiongroupComponent } from './pages/solutiongroup/solutiongroup.component';
import { SolutionlistComponent } from './pages/solutionlist/solutionlist.component';
import { ComplaintgroupsComponent } from './pages/complaintgroups/complaintgroups.component';
import { ComplaintlistComponent } from './pages/complaintlist/complaintlist.component';
import { CrmformsComponent } from './pages/crmforms/crmforms.component';
import { FomrtemplatesComponent } from './pages/fomrtemplates/fomrtemplates.component';
import { TargetaudienceComponent } from './pages/targetaudience/targetaudience.component';
import { AddAccountCustomerDetailsComponent } from './pages/add-account-customer-details/add-account-customer-details.component';
import { CustomerDetailsComponent } from './pages/customer-details/customer-details.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormresponsesComponent } from './pages/formresponses/formresponses.component';

@NgModule({
  declarations: [SupportcrmMasterComponent, DashboardComponent, ComplaintsComponent, OpenComponent, ClosedComponent, FeedbackComponent, AllcomplaintsComponent, SettingsComponent, SolutiongroupComponent, SolutionlistComponent, ComplaintgroupsComponent, ComplaintlistComponent, CrmformsComponent, FomrtemplatesComponent, TargetaudienceComponent, AddAccountCustomerDetailsComponent, CustomerDetailsComponent, FormresponsesComponent],
  imports: [
    CommonModule,
    SupportCrmRoutingModule,  
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
    MatAutocompleteModule,
    MatInputModule,
    MatDialogModule,
    MatChipsModule,
    ChartsModule,    
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
  ]
})
export class SupportCrmModule { }
