import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';

import { MarketingRoutingModule } from './marketing-routing.module';
import { MarketingMasterComponent } from './master/marketing-master/marketing-master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import { BannerlistComponent } from './pages/bannerlist/bannerlist.component';
import { BannergroupsComponent } from './pages/bannergroups/bannergroups.component';
import { BannertypeComponent } from './pages/bannertype/bannertype.component';
import { TargetaudienceComponent } from './pages/targetaudience/targetaudience.component';
import { ItemlistComponent } from './pages/itemlist/itemlist.component';

import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';


@NgModule({
  declarations: [MarketingMasterComponent, DashboardComponent, BannerlistComponent, BannergroupsComponent, BannertypeComponent, TargetaudienceComponent, ItemlistComponent],
  imports: [
    CommonModule,
    MarketingRoutingModule,  
    FlexLayoutModule,  
    RouterModule,  
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
    MatChipsModule

  ]
})
export class MarketingModule { }
