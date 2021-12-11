import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { AccountComponent } from './pages/account/account.component';
import { AccountgroupComponent } from './pages/accountgroup/accountgroup.component';
import { CustomeraccountComponent } from './pages/customeraccount/customeraccount.component';
import { SupplieraccountComponent } from './pages/supplieraccount/supplieraccount.component';
import { BranchaccountComponent } from './pages/branchaccount/branchaccount.component';
import { BankaccountComponent } from './pages/bankaccount/bankaccount.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { DepartmentComponent } from './pages/department/department.component';
import { CountryplannerComponent } from './pages/countryplanner/countryplanner.component';
import { SubdepartmentComponent } from './pages/subdepartment/subdepartment.component';
import { DesignationComponent } from './pages/designation/designation.component';
import { SusbscribersComponent } from './pages/susbscribers/susbscribers.component';
import { AllsusbscribersComponent } from './pages/allsusbscribers/allsusbscribers.component';
import { SusbscriberslistComponent } from './pages/susbscriberslist/susbscriberslist.component';
import { SusbscribersprofileComponent } from './pages/susbscribersprofile/susbscribersprofile.component';

const routes: Routes = [

  
 { path: '', component: SuperadminMasterComponent,

 children: [
   { path: '', component: DashboardComponent},  
   { path: 'customers', component: CustomersComponent},  
   { path: 'default-settings', component: DefaultSettingsComponent},   
   { path: 'subscribed', component: SubscribedComponent},  
   { path: 'deal-details', component: DealDetailsComponent},   
   { path: 'rights', component: RightsComponent},
   { path: 'ivrmanagement', component: IvrmanagementComponent},
   { path: 'ivrnumbers', component: IvrnumbersComponent},
   { path: 'ivresponses', component: IvresponsesComponent},
   { path: 'accmanagement', component: AccmanagementComponent}, 
   { path: 'account', component: AccountComponent}, 
   { path: 'accountgroup', component: AccountgroupComponent}, 
   { path: 'customeraccount', component: CustomeraccountComponent}, 
   { path: 'supplieraccount', component: SupplieraccountComponent}, 
   { path: 'branchaccount', component: BranchaccountComponent}, 
   { path: 'bankaccount', component: BankaccountComponent}, 
   { path: 'employee', component: EmployeeComponent}, 
   { path: 'department', component: DepartmentComponent}, 
   { path: 'countryplanner', component: CountryplannerComponent}, 
   { path: 'subdepartment', component: SubdepartmentComponent}, 
   { path: 'designation', component: DesignationComponent}, 
   { path: 'susbscribers', component: SusbscribersComponent }, 
   { path: 'allsusbscribers', component: DesignationComponent}, 
   { path: 'susbscriberslist', component: SusbscriberslistComponent }, 
   { path: 'susbscribersprofile', component: SusbscribersprofileComponent},
 ],
 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupaeradminModuleRoutingModule { }
