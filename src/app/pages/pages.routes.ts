import { Routes } from '@angular/router';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task4Component } from './task4/task4.component';
import {DealsComponent} from "./deals/deals.component";
import {TenderComponent} from "./deals/tender/tender.component";

export const PagesRoutes: Routes = [
  {
    path: 'task1',
    component: Task1Component,
    data: {
      title: 'Task 1',
    },
  },
  {
    path: 'task2',
    component: Task2Component,
    data: {
      title: 'Task 2',
    },
  },
  {
    path: 'deals',
    component: DealsComponent,
    data: {
      title: 'My Deals',
    }
  },
  {
    path: 'deals/:id',
    component: TenderComponent,
    data: {
      title: 'New tender',
    },
  },
  {
    path: 'task4',
    component: Task4Component,
    data: {
      title: 'Task 4',
    },
  },
];
