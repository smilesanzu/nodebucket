/**
 * Title: app-routing.module.ts
 * Author: Professor Krasso
 * Co-Author: Janis Gonzalez
 * Date: 8/17/23
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagementRoutingModule } from './task-management-routing.module';
import { TaskManagementComponent } from './task-management.component';
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
  declarations: [
    TaskManagementComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    TaskManagementRoutingModule
  ]
})
export class TaskManagementModule { }
