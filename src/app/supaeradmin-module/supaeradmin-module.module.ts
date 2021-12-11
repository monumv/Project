import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SupaeradminModuleRoutingModule } from './supaeradmin-module-routing.module';
import { SuperadminMasterComponent } from './master/superadmin-master/superadmin-master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccmanagementComponent } from './pages/accmanagement/accmanagement.component';
import { DefaultSettingsComponent } from './pages/default-settings/default-settings.component';
import { IvrmanagementComponent } from './pages/ivrmanagement/ivrmanagement.component';
import { IvrnumbersComponent } from './pages/ivrnumbers/ivrnumbers.component';
import { IvresponsesComponent } from './pages/ivresponses/ivresponses.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { SubscribedComponent } from './pages/subscribed/subscribed.component';
import { DealDetailsComponent } from './pages/deal-details/deal-details.component';
import { RightsComponent } from './pages/rights/rights.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import { ChartsModule } from 'ng2-charts';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatRadioModule} from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AccountComponent } from './pages/account/account.component';
import { AccountgroupComponent } from './pages/accountgroup/accountgroup.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { CustomeraccountComponent } from './pages/customeraccount/customeraccount.component';
import { SupplieraccountComponent } from './pages/supplieraccount/supplieraccount.component';
import { BranchaccountComponent } from './pages/branchaccount/branchaccount.component';
import { BankaccountComponent } from './pages/bankaccount/bankaccount.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { MultirowdialogComponent } from './pages/multirowdialog/multirowdialog.component';
import { DepartmentComponent } from './pages/department/department.component';
import { CountryplannerComponent } from './pages/countryplanner/countryplanner.component';
import { SubdepartmentComponent } from './pages/subdepartment/subdepartment.component';
import { DesignationComponent } from './pages/designation/designation.component';
import { SusbscribersComponent } from './pages/susbscribers/susbscribers.component';
import { AllsusbscribersComponent } from './pages/allsusbscribers/allsusbscribers.component';
import { SusbscriberslistComponent } from './pages/susbscriberslist/susbscriberslist.component';
import { SusbscribersprofileComponent } from './pages/susbscribersprofile/susbscribersprofile.component';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country'; 

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [SuperadminMasterComponent, DashboardComponent, AccmanagementComponent, DefaultSettingsComponent, IvrmanagementComponent, IvrnumbersComponent, IvresponsesComponent, CustomersComponent, SubscribedComponent, DealDetailsComponent, RightsComponent, AccountComponent, AccountgroupComponent, CustomeraccountComponent, SupplieraccountComponent, BranchaccountComponent, BankaccountComponent, EmployeeComponent, DialogComponent, MultirowdialogComponent, DepartmentComponent, CountryplannerComponent, SubdepartmentComponent, DesignationComponent, SusbscribersComponent, AllsusbscribersComponent, SusbscriberslistComponent, SusbscribersprofileComponent],
  imports: [
    CommonModule,
    SupaeradminModuleRoutingModule,     
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatTreeModule,
    FlexLayoutModule,    
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatChipsModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatRadioModule,
    MatNativeDateModule,
    MatTabsModule,
    ChartsModule,
    NgMultiSelectDropDownModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatSelectCountryModule,
    HttpClientModule
  ]
})
export class SupaeradminModuleModule { }
