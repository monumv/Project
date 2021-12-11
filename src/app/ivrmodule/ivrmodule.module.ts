import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IvrmoduleRoutingModule } from './ivrmodule-routing.module';
import { IvrmasterComponent } from './master/ivrmaster/ivrmaster.component';
import { ResponsesComponent } from './pages/responses/responses.component';
import { IvrnumbersComponent } from './pages/ivrnumbers/ivrnumbers.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DialogComponent } from './pages/dialog/dialog.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [IvrmasterComponent, ResponsesComponent, IvrnumbersComponent, DashboardComponent, DialogComponent],
  imports: [
    CommonModule,
    IvrmoduleRoutingModule,
    FlexLayoutModule, 
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatTreeModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule, 
    MatTableModule, 
    MatPaginatorModule, 
    MatCheckboxModule,
    MatDialogModule,
    MatInputModule,
    ChartsModule
  ],

   entryComponents: [ DialogComponent,]
})
export class IvrmoduleModule { }
