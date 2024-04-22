import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from '../shared/components/footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../shared/helpers/guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';



const routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'auth',
        component: AuthComponent
      },
      {
        path: 'home',
        component: HomeComponent,
      }
    ]
  }
]
@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
