import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HRMRoutingModule } from './hrm-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrganogramComponent } from './pages/organogram/organogram.component';
import { HrmMasterComponent } from './master/hrm-master/hrm-master.component';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatTreeModule} from '@angular/material/tree';
import { HrMasterComponent } from './pages/hr-master/hr-master.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { ClaimedComponent } from './pages/claimed/claimed.component';
import { ApprovedComponent } from './pages/approved/approved.component';
import { CancelledComponent } from './pages/cancelled/cancelled.component';
import { RatelistComponent } from './pages/ratelist/ratelist.component';
import { DailyattendanceComponent } from './pages/dailyattendance/dailyattendance.component';
import { MonthlyreportComponent } from './pages/monthlyreport/monthlyreport.component';
import { GpslogsComponent } from './pages/gpslogs/gpslogs.component';
import { AttendacegroupComponent } from './pages/attendacegroup/attendacegroup.component';
import { AttendancestatusComponent } from './pages/attendancestatus/attendancestatus.component';
import { BiometrixComponent } from './pages/biometrix/biometrix.component';
import { DepartmentComponent } from './pages/department/department.component';
import { SubdepartmentComponent } from './pages/subdepartment/subdepartment.component';
import { ManagementlevelComponent } from './pages/managementlevel/managementlevel.component';
import { DesignationComponent } from './pages/designation/designation.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { DivisionComponent } from './pages/division/division.component';
import { VirtualofcComponent } from './pages/virtualofc/virtualofc.component';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { HrsettingsComponent } from './pages/hrsettings/hrsettings.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { ChartsModule } from 'ng2-charts';
import { RolesrightsComponent } from './pages/rolesrights/rolesrights.component';
import { CountryplannerComponent } from './pages/countryplanner/countryplanner.component';
import { AreaplannerComponent } from './pages/areaplanner/areaplanner.component';
import { AreatemplateComponent } from './pages/areatemplate/areatemplate.component';
import { AreaaccountsComponent } from './pages/areaaccounts/areaaccounts.component';
import { AreaemployeesComponent } from './pages/areaemployees/areaemployees.component';
import { PagerightsComponent } from './pages/pagerights/pagerights.component';
import { ModulerightsComponent } from './pages/modulerights/modulerights.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { LeaveManagementComponent } from './pages/leave-management/leave-management.component';
import { LeaveSettingsComponent } from './pages/leave-settings/leave-settings.component';
import { HolidaysComponent } from './pages/holidays/holidays.component';
import { HolidayListComponent } from './pages/holiday-list/holiday-list.component';
import { WeeklyOffComponent } from './pages/weekly-off/weekly-off.component';
import { WeeklyoffListComponent } from './pages/weeklyoff-list/weeklyoff-list.component';
import { HolidayGroupComponent } from './pages/holiday-group/holiday-group.component';
import { WeeklyoffGroupComponent } from './pages/weeklyoff-group/weeklyoff-group.component';
import { DialogComponent } from './pages/dialog/dialog.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { LeaveBalanceComponent } from './pages/leave-balance/leave-balance.component';
import { LeaveLedgerComponent } from './pages/leave-ledger/leave-ledger.component';
import { PmsComponent } from './pages/pms/pms.component';
import { GoalsComponent } from './pages/goals/goals.component';
import { GoalsettingComponent } from './pages/goalsetting/goalsetting.component';
import { MygoalComponent } from './pages/mygoal/mygoal.component';
import { TeamgoalsComponent } from './pages/teamgoals/teamgoals.component';
import { PendingComponent } from './pages/pending/pending.component';
import { AddgoalComponent } from './pages/addgoal/addgoal.component';
import { AssessmentComponent } from './pages/assessment/assessment.component';
import { CheckerComponent } from './pages/checker/checker.component';
import { ApproverComponent } from './pages/approver/approver.component';
import { AddgoalnewComponent } from './pages/addgoalnew/addgoalnew.component';
import { Pending2Component } from './pages/pending2/pending2.component';
import { FieldforcetrackerComponent } from './pages/fieldforcetracker/fieldforcetracker.component';
import {MatTabsModule} from '@angular/material/tabs';
import { AgmCoreModule } from '@agm/core';
import { Fiedforcetracker2Component } from './pages/fiedforcetracker2/fiedforcetracker2.component';
import {MatExpansionModule} from '@angular/material/expansion';



@NgModule({
  declarations: [DashboardComponent, OrganogramComponent, HrmMasterComponent, HrMasterComponent, ExpensesComponent, ClaimedComponent, ApprovedComponent, CancelledComponent, RatelistComponent, DailyattendanceComponent, MonthlyreportComponent, GpslogsComponent, AttendacegroupComponent, AttendancestatusComponent, BiometrixComponent, DepartmentComponent, SubdepartmentComponent, ManagementlevelComponent, DesignationComponent, EmployeesComponent, DivisionComponent, VirtualofcComponent, AttendanceComponent, HrsettingsComponent, RolesrightsComponent, CountryplannerComponent, AreaplannerComponent, AreatemplateComponent, AreaaccountsComponent, AreaemployeesComponent, PagerightsComponent, ModulerightsComponent, LeaveManagementComponent, LeaveSettingsComponent, HolidaysComponent, HolidayListComponent, WeeklyOffComponent, WeeklyoffListComponent, HolidayGroupComponent, WeeklyoffGroupComponent, DialogComponent,  LeaveBalanceComponent, LeaveLedgerComponent, PmsComponent, GoalsComponent, GoalsettingComponent, MygoalComponent, TeamgoalsComponent, PendingComponent, AddgoalComponent, AssessmentComponent, CheckerComponent, ApproverComponent, AddgoalnewComponent, Pending2Component, FieldforcetrackerComponent, Fiedforcetracker2Component],
  imports: [
    CommonModule,
    FlexLayoutModule,
    HRMRoutingModule,
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
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,     
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatAutocompleteModule,
    ChartsModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,MatTabsModule,MatExpansionModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDTak_TlvZIj752l3oQMNehen1RlIoKzQ0'


    })
  ],
   entryComponents: [ DialogComponent,]
})
export class HRMModule { }
