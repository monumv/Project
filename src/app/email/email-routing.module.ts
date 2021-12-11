import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmailMasterComponent } from './email-master/email-master.component';
import { MailsComponent } from './pages/mails/mails.component';

import { ViewemailComponent } from './pages/viewemail/viewemail.component';
import { ComposeComponent } from './pages/compose/compose.component';

const routes: Routes = [
  { path: '', component: EmailMasterComponent,
 
  children: [
    { path: '', component: MailsComponent}, 
    { path: 'viewemail', component: ViewemailComponent},   
    { path: 'compose', component: ComposeComponent},     
  ],
  
   },
 ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
