import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboard } from './admin-dashboard/admin-dashboard';
import { AdminRecipelist } from './admin-recipelist/admin-recipelist';
import { AdminDownloadList } from './admin-download-list/admin-download-list';
import { AdminUserlist } from './admin-userlist/admin-userlist';
import { AdminFeedbacklist } from './admin-feedbacklist/admin-feedbacklist';
import { AdminAddRecipe } from './admin-add-recipe/admin-add-recipe';

const routes: Routes = [
  // /http://localhost:4200/admin
  {
    path: '', component: AdminDashboard, title: 'Dashbord - Admin'
  },
  {
    path: 'recipe-list', component: AdminRecipelist, title: 'Recipe-Admin'
  },
  {
    path: 'download-list', component: AdminDownloadList, title: 'Download - Admin'
  },
  {
    path:'user-list',component:AdminUserlist,title:'User - Admin'
  },
  {
    path:'feedback-list',component:AdminFeedbacklist,title:'feedback - Admin'
  },
  {
    path:'recipe/add',component:AdminAddRecipe,title:'Add Recipe - Admin'
  },
  {
    path:'recipe/:id/edit',component:AdminAddRecipe,title:'Edit Recipe - Admin'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
