import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



const routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'auth',
        // component: AuthComponent
      },
      {
        path: 'home',
        // component: HomeComponent,
      }
    ]
  }
]
@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
