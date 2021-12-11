import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarketingModule } from './marketing.module';
import { MarketingMasterComponent } from './master/marketing-master/marketing-master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { BannerlistComponent } from './pages/bannerlist/bannerlist.component';
import { BannergroupsComponent } from './pages/bannergroups/bannergroups.component';
import { BannertypeComponent } from './pages/bannertype/bannertype.component';
import { TargetaudienceComponent } from './pages/targetaudience/targetaudience.component';
import { ItemlistComponent } from './pages/itemlist/itemlist.component';

const routes: Routes = [
 { path: '', component: MarketingMasterComponent,

 children: [
   { path: '', component: DashboardComponent}, 
   { path: 'bannerlist', component: BannerlistComponent}, 
   { path: 'bannergroups', component: BannergroupsComponent}, 
   { path: 'bannertype', component: BannertypeComponent}, 
   { path: 'targetaudience', component: TargetaudienceComponent}, 
   { path: 'itemlist', component: ItemlistComponent},    
 ],
 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarketingRoutingModule { }
