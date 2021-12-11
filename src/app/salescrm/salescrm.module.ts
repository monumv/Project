import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SalescrmRoutingModule } from './salescrm-routing.module';
import { SalescrmMasterComponent } from './master/salescrm-master/salescrm-master.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DealsComponent } from './pages/deals/deals.component';
import { OpenDealComponent } from './pages/open-deal/open-deal.component';
import { WonDealComponent } from './pages/won-deal/won-deal.component';
import { DroppedDealComponent } from './pages/dropped-deal/dropped-deal.component';
import { CrmremindersComponent } from './pages/crmreminders/crmreminders.component';
import { CrmSettingsComponent } from './pages/crm-settings/crm-settings.component';
import { CrmTemplateComponent } from './pages/crm-template/crm-template.component';
import { PipelinetemplateComponent } from './pages/pipelinetemplate/pipelinetemplate.component';
import { LeadSourceComponent } from './pages/lead-source/lead-source.component';
import { LeadpluginsComponent } from './pages/leadplugins/leadplugins.component';
import { JustdialComponent } from './pages/justdial/justdial.component';
import { IndiamartComponent } from './pages/indiamart/indiamart.component';
import { WebApiComponent } from './pages/web-api/web-api.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatChipsModule} from '@angular/material/chips';
import {MatDialogModule} from '@angular/material/dialog';
import { ChartsModule } from 'ng2-charts';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DealDetailsComponent } from './pages/deal-details/deal-details.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AddleadsComponent } from './pages/addleads/addleads.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgxMatTimepickerModule } from "ngx-mat-timepicker";
import { CrmreportsComponent } from './pages/crmreports/crmreports.component';
import { QadataComponent } from './pages/qadata/qadata.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import { AddoptiondialogComponent } from './pages/addoptiondialog/addoptiondialog.component';
import { UpdatetargetsComponent } from './pages/updatetargets/updatetargets.component';



@NgModule({
  declarations: [SalescrmMasterComponent, DashboardComponent, DealsComponent, OpenDealComponent, WonDealComponent, DroppedDealComponent, CrmremindersComponent, CrmSettingsComponent, CrmTemplateComponent, PipelinetemplateComponent, LeadSourceComponent, LeadpluginsComponent, JustdialComponent, IndiamartComponent, WebApiComponent, DealDetailsComponent, AddleadsComponent, CrmreportsComponent, QadataComponent, DialogComponent, AddoptiondialogComponent, UpdatetargetsComponent, ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SalescrmRoutingModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatTreeModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatChipsModule,
    MatDialogModule,
    ChartsModule,
    MatSelectModule,
    MatInputModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,MatRadioModule,MatExpansionModule,
    MatTabsModule, MatDatepickerModule, MatNativeDateModule,
    NgxMatTimepickerModule


  ],
   exports: [
        MatInputModule,
        MatCheckboxModule,
        MatDatepickerModule, 
        MatNativeDateModule 
    ],
  entryComponents: [AddoptiondialogComponent
  ]
})
export class SalescrmModule { }
