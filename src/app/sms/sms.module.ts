import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SmsRoutingModule } from './sms-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SmsMasterComponent } from './master/sms-master/sms-master.component';
import { SmsLogsComponent } from './pages/sms-logs/sms-logs.component';
import { ComposeComponent } from './pages/compose/compose.component';
import { SenderIdComponent } from './pages/sender-id/sender-id.component';
import { TemplateComponent } from './pages/template/template.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatChipsModule} from '@angular/material/chips';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import { PreviewComponent } from './pages/preview/preview.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { AddTemplateComponent } from './pages/add-template/add-template.component';
import { DltManagementComponent } from './pages/dlt-management/dlt-management.component';
import { DltEntityComponent } from './pages/dlt-entity/dlt-entity.component';
import { TemplateIdComponent } from './pages/template-id/template-id.component';
import { OperatorComponent } from './pages/operator/operator.component';
import { AddEntityIdComponent } from './pages/add-entity-id/add-entity-id.component';
import { AddSenderIdComponent } from './pages/add-sender-id/add-sender-id.component';
import { EateTemplatesComponent } from './pages/eate-templates/eate-templates.component';
import { CreateTemplateComponent } from './pages/create-template/create-template.component';
import { AddOperatorComponent } from './pages/add-operator/add-operator.component';
import { RouteManagementComponent } from './pages/route-management/route-management.component';
import { AddRouteManagementComponent } from './pages/add-route-management/add-route-management.component';

@NgModule({
  declarations: [DashboardComponent, SmsMasterComponent, SmsLogsComponent, ComposeComponent, SenderIdComponent, TemplateComponent, PreviewComponent, DialogComponent, AddTemplateComponent, DltManagementComponent, DltEntityComponent, TemplateIdComponent, OperatorComponent, AddEntityIdComponent, AddSenderIdComponent, EateTemplatesComponent, CreateTemplateComponent, AddOperatorComponent, RouteManagementComponent, AddRouteManagementComponent],
  imports: [
    CommonModule,
    SmsRoutingModule,
    FlexLayoutModule,
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
    MatSelectModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule
  ],
   entryComponents: [DialogComponent, AddTemplateComponent]
})
export class SmsModule { }
