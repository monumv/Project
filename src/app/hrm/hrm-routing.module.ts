import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OrganogramComponent } from './pages/organogram/organogram.component';
import { HrmMasterComponent } from './master/hrm-master/hrm-master.component';
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
import { CountryplannerComponent } from './pages/countryplanner/countryplanner.component';
import { AreaplannerComponent } from './pages/areaplanner/areaplanner.component';
import { AreatemplateComponent } from './pages/areatemplate/areatemplate.component';
import { AreaaccountsComponent } from './pages/areaaccounts/areaaccounts.component';
import { AreaemployeesComponent } from './pages/areaemployees/areaemployees.component';
import { RolesrightsComponent } from './pages/rolesrights/rolesrights.component';
import { PagerightsComponent } from './pages/pagerights/pagerights.component';
import { ModulerightsComponent } from './pages/modulerights/modulerights.component'
import { LeaveManagementComponent } from './pages/leave-management/leave-management.component';
import { LeaveSettingsComponent } from './pages/leave-settings/leave-settings.component';
import { HolidaysComponent } from './pages/holidays/holidays.component';
import { HolidayListComponent } from './pages/holiday-list/holiday-list.component';
import { WeeklyOffComponent } from './pages/weekly-off/weekly-off.component';
import { WeeklyoffListComponent } from './pages/weeklyoff-list/weeklyoff-list.component';
import { HolidayGroupComponent } from './pages/holiday-group/holiday-group.component';
import { WeeklyoffGroupComponent } from './pages/weeklyoff-group/weeklyoff-group.component';
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
import { Fiedforcetracker2Component } from './pages/fiedforcetracker2/fiedforcetracker2.component';


const routes: Routes = [


  
 { path: '', component: HrmMasterComponent,

 children: [
   { path: '', component: DashboardComponent}, 
   { path: 'organogram', component: OrganogramComponent}, 
   { path: 'hr-master', component: HrMasterComponent}, 
   { path: 'expenses', component: ExpensesComponent},
   { path: 'claimed', component: ClaimedComponent},
   { path: 'approved', component: ApprovedComponent},
   { path: 'cancelled', component: CancelledComponent},
   { path: 'ratelist', component: RatelistComponent},
   { path: 'dailyattendance', component: DailyattendanceComponent},
   { path: 'monthlyreport', component: MonthlyreportComponent},
   { path: 'gpslogs', component: GpslogsComponent},
   { path: 'attendacegroup', component: AttendacegroupComponent},
   { path: 'attendancestatus', component: AttendancestatusComponent},
   { path: 'biometrix', component: BiometrixComponent},
   { path: 'department', component: DepartmentComponent},
   { path: 'subdepartment', component: SubdepartmentComponent},
   { path: 'managementlevel', component: ManagementlevelComponent},
   { path: 'designation', component: DesignationComponent},
   { path: 'employees', component: EmployeesComponent},
   { path: 'division', component: DivisionComponent},
   { path: 'virtualofc', component: VirtualofcComponent},
   { path: 'attendance', component: AttendanceComponent},
   { path: 'hrsettings', component: HrsettingsComponent},
   { path: 'countryplanner', component: CountryplannerComponent},
   { path: 'areaplanner', component: AreaplannerComponent},
   { path: 'areatemplate', component: AreatemplateComponent},
   { path: 'areaaccounts', component: AreaaccountsComponent},
   { path: 'areaemployees', component: AreaemployeesComponent},
   { path: 'rolesrights', component: RolesrightsComponent},
   { path: 'pagerights', component: PagerightsComponent},
   { path: 'modulerights', component: ModulerightsComponent},
   { path: 'leave-management', component: LeaveManagementComponent},
   { path: 'leave-settings', component: LeaveSettingsComponent},
   { path: 'holidays', component: HolidaysComponent},
   { path: 'holiday-list', component: HolidayListComponent},
   { path: 'weekly-off', component: WeeklyOffComponent},
   { path: 'weeklyoff-list', component: WeeklyoffListComponent},
   { path: 'holiday-group', component: HolidayGroupComponent},
   { path: 'weeklyoff-groups', component: WeeklyoffGroupComponent},
   { path: 'leave-balance', component: LeaveBalanceComponent},
   { path: 'leave-ledger', component: LeaveLedgerComponent},
   { path: 'pms', component: PmsComponent},
   { path: 'goals', component: GoalsComponent},
   { path: 'goalsetting', component: GoalsettingComponent},
   { path: 'mygoal', component: MygoalComponent},
   { path: 'teamgoals', component: TeamgoalsComponent},
   { path: 'pending', component: PendingComponent},
   { path: 'addgoal', component: AddgoalComponent},
   { path: 'assessment', component: AssessmentComponent},
   { path: 'checker', component: CheckerComponent},
   { path: 'approver', component: ApproverComponent},
   { path: 'addgoalnew', component: AddgoalnewComponent},
   { path: 'pending2', component: Pending2Component},
 ],
 
  },
   { path: 'fieldforcetracker', component: FieldforcetrackerComponent},
   { path: 'fiedforcetracker2', component: Fiedforcetracker2Component},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HRMRoutingModule { }
