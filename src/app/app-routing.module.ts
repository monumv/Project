import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

{
    path: 'home', loadChildren: () => import('./home/home.module').then(j => j.HomeModule)
},
{
  path: 'hrm', loadChildren: () => import('./hrm/hrm.module').then(j => j.HRMModule)
},
{
  path: 'finance', loadChildren: () => import('./finance/finance.module').then(j => j.FinanceModule)
},
{
  path: 'email',loadChildren: () => import('./email/email.module').then(j => j.EmailModule)
},
{
    path: 'production',loadChildren: () => import('./production/production.module').then(j => j.ProductionModule)
},
{
  path: 'service-crm',loadChildren: () => import('./service-crm/service-crm.module').then(j => j.ServiceCrmModule)
},
{
  path: 'marketing',loadChildren: () => import('./marketing/marketing.module').then(j => j.MarketingModule)
},
{
  path: 'sms',loadChildren: () => import('./sms/sms.module').then(j => j.SmsModule)
},
{
  path: 'distribution',loadChildren: () => import('./distribution/distribution.module').then(j => j.DistributionModule)
},
{
  path: 'supaeradmin-module',loadChildren: () => import('./supaeradmin-module/supaeradmin-module.module').then(j => j.SupaeradminModuleModule)
},
{
  path: 'salescrm',loadChildren: () => import('./salescrm/salescrm.module').then(j => j.SalescrmModule)
},
{
  path: 'support-crm',loadChildren: () => import('./support-crm/support-crm.module').then(j => j.SupportCrmModule)
},
{
  path: 'dispatch',loadChildren: () => import('./dispatch/dispatch.module').then(j => j.DispatchModule)
},
{
  path: 'ivrmodule',loadChildren: () => import('./ivrmodule/ivrmodule.module').then(j => j.IvrmoduleModule)
}

 ];


@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
