import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from "./layout.component";
import { SettingComponent } from './pages/setting/setting.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      { 
        path:'setting',
        component:SettingComponent
      },
      { 
        path:'dashboard',
        component:DashboardComponent
      }
    ]
  }

];

@NgModule({
  declarations: [SettingComponent, DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],

  exports: [RouterModule]
})
export class LayoutModule { }
