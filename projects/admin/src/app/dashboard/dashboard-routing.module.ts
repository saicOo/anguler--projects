import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path: '', component:LayoutComponent,
    children:[
      {
        path: 'users', 
      loadChildren:()=> import(`./manage-users/manage-users.module`).then(m=>m.ManageUsersModule)
      },
      {
        path: 'tasks', 
        loadChildren:()=> import(`./tasks-admin/tasks-admin.module`).then(m=>m.TasksAdminModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DashboardRoutingModule { }
