import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SmsModule } from './sms.module';
import { SmsMasterComponent } from './master/sms-master/sms-master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SmsLogsComponent } from './pages/sms-logs/sms-logs.component';
import { ComposeComponent } from './pages/compose/compose.component';
import { SenderIdComponent } from './pages/sender-id/sender-id.component';
import { TemplateComponent } from './pages/template/template.component';
import { PreviewComponent } from './pages/preview/preview.component';
import { DltManagementComponent } from './pages/dlt-management/dlt-management.component';
import { DltEntityComponent } from './pages/dlt-entity/dlt-entity.component';
import { TemplateIdComponent } from './pages/template-id/template-id.component';

import { OperatorComponent } from './pages/operator/operator.component';
import { AddEntityIdComponent } from './pages/add-entity-id/add-entity-id.component';
import { AddSenderIdComponent } from './pages/add-sender-id/add-sender-id.component';
import { CreateTemplateComponent } from './pages/create-template/create-template.component';
import { AddOperatorComponent } from './pages/add-operator/add-operator.component';
import { RouteManagementComponent } from './pages/route-management/route-management.component';
import { AddRouteManagementComponent } from './pages/add-route-management/add-route-management.component';


const routes: Routes = [
 { path: '', component: SmsMasterComponent,

 children: [
   { path: '', component: DashboardComponent},
   { path: 'sms-logs', component: SmsLogsComponent},
   { path: 'sender-id', component: SenderIdComponent},
   { path: 'template', component: TemplateComponent},
   { path: 'dlt-management', component: DltManagementComponent},
   { path: 'template-id', component: TemplateIdComponent},
   { path: 'operator', component: OperatorComponent},
   { path: 'dlt-entity', component: DltEntityComponent},
   { path: 'add-entity-id', component: AddEntityIdComponent},
   { path: 'add-sender-id', component: AddSenderIdComponent},
   { path: 'create-template', component: CreateTemplateComponent},
   { path: 'add-operator', component: AddOperatorComponent},
   { path: 'route-management', component: RouteManagementComponent},
   { path: 'add-route-management', component: AddRouteManagementComponent},

 ],
 
   
  },

  { path: 'compose', component: ComposeComponent},
  { path: 'preview', component: PreviewComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SmsRoutingModule { }
