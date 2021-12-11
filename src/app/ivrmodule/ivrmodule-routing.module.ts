import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IvrmoduleModule } from './ivrmodule.module';
import { IvrmasterComponent } from './master/ivrmaster/ivrmaster.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IvrnumbersComponent } from './pages/ivrnumbers/ivrnumbers.component';
import { ResponsesComponent } from './pages/responses/responses.component';

const routes: Routes = [
 { path: '', component: IvrmasterComponent,

 children: [
   { path: '', component: DashboardComponent},   
   { path: 'ivrnumbers', component: IvrnumbersComponent}, 
   { path: 'responses', component: ResponsesComponent}, 
 ],
 
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IvrmoduleRoutingModule { }
