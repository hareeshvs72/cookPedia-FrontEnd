import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing-module';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { AdminRecipelist } from './admin-recipelist/admin-recipelist';
import { AdminUserlist } from './admin-userlist/admin-userlist';
import { AdminFeedbacklist } from './admin-feedbacklist/admin-feedbacklist';
import { AdminAddRecipe } from './admin-add-recipe/admin-add-recipe';
import { AdminDownloadList } from './admin-download-list/admin-download-list';
import { AdminSidebar } from './admin-sidebar/admin-sidebar';


@NgModule({
  declarations: [
    AdminDashboard,
    AdminRecipelist,
    AdminUserlist,
    AdminFeedbacklist,
    AdminAddRecipe,
    AdminDownloadList,
    AdminSidebar
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
