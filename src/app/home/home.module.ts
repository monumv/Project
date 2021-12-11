import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeMasterComponent } from './master/home-master/home-master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import { HelpcentreComponent } from './pages/helpcentre/helpcentre.component';

import {MatInputModule} from '@angular/material/input';
import { ThankyouComponent } from './pages/thankyou/thankyou.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule }   from '@angular/forms';
 import { ReactiveFormsModule } from '@angular/forms';
import { PaymentlinkComponent } from './pages/paymentlink/paymentlink.component';
import { EmployeeledgerComponent } from './pages/employeeledger/employeeledger.component';
import { ApilistComponent } from './pages/apilist/apilist.component';
import { ApilistsidebarComponent } from './pages/apilistsidebar/apilistsidebar.component';

@NgModule({
  declarations: [HomeMasterComponent, DashboardComponent, HelpcentreComponent, ThankyouComponent, PaymentlinkComponent, EmployeeledgerComponent, ApilistComponent, ApilistsidebarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
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
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule
  ],
   entryComponents: [ ThankyouComponent]
})
export class HomeModule { }
