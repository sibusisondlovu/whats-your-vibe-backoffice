import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {MembershipsComponent} from './components/memberships/memberships.component';
import {CategoriesComponent} from "./components/categories/categories.component";
import {BusinessesComponent} from "./components/businesses/businesses.component";
import {ConsumersComponent} from "./components/consumers/consumers.component";
import {AnalyticsComponent} from "./components/analytics/analytics.component";
import {EventsComponent} from "./components/events/events.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'memberships',
    component: MembershipsComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'events',
    component: EventsComponent
  },
  {
    path: 'businesses',
    component: BusinessesComponent
  },
  {
    path: 'consumers',
    component: ConsumersComponent
  },
  {
    path: 'analytics',
    component: AnalyticsComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }