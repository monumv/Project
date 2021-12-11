import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home.module';
import { HomeMasterComponent } from './master/home-master/home-master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HelpcentreComponent } from './pages/helpcentre/helpcentre.component';

import { PaymentlinkComponent } from './pages/paymentlink/paymentlink.component';
import { EmployeeledgerComponent } from './pages/employeeledger/employeeledger.component';

import { ApilistComponent } from './pages/apilist/apilist.component';
import { ApilistsidebarComponent } from './pages/apilistsidebar/apilistsidebar.component';

const routes: Routes = [

  
 { path: '', component: HomeMasterComponent,

 children: [
   { path: '', component: DashboardComponent},  
   { path: 'helpcentre', component: HelpcentreComponent}, 
   { path: 'apilist', component: ApilistComponent}, 
   { path: 'apilistsidebar', component: ApilistsidebarComponent}, 
 ],
 
  },

   { path: 'paymentlink', component: PaymentlinkComponent}, 

   { path: 'employeeledger', component: EmployeeledgerComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
