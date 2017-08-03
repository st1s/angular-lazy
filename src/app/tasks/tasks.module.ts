/**
 * Created by NamitaMalik on 9/27/2016. Adapted by Stewan Pacheco on 02/08/2017.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TaskDetailComponent } from './task-detail.component';
import { TasksListComponent } from './tasks-list.component';
import { TasksRoutingModule } from "./tasks-routing.module";
import { UsersModule } from "../users/users.module";

@NgModule({
    imports: [
        CommonModule,
        TasksRoutingModule,
        UsersModule
    ],
    declarations: [
        TasksComponent,
        TaskDetailComponent,
        TasksListComponent
    ],
    providers: []
})
export class TasksModule {
}