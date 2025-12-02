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
import { MatCardModule } from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { SearchPipe } from '../pipes/search-pipe';
import { FormsModule } from '@angular/forms';
import { HighchartsChartComponent, provideHighcharts } from 'highcharts-angular';
import { A11yModule } from "@angular/cdk/a11y";

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
    AdminRoutingModule,
    MatCardModule,
    MatDatepickerModule,
    SearchPipe,
    FormsModule,
    HighchartsChartComponent,
    A11yModule
],
  
  providers:[provideNativeDateAdapter(),
    provideHighcharts (),
   
  ]
})
export class AdminModule { }

