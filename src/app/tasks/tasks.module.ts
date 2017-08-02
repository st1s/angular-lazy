/**
 * Created by NamitaMalik on 9/27/2016. Adapted by Stewan Pacheco on 02/08/2017.
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksComponent} from './tasks.component';
import {TaskDetailComponent} from './task-detail.component';
import {TasksListComponent} from './tasks-list.component';
import {TasksRoutingModule} from "./tasks-routing.module";

@NgModule({
    imports: [
        CommonModule,
        TasksRoutingModule
    ],
    declarations: [
        TasksComponent,
        TaskDetailComponent,
        TasksListComponent
    ]
})
export class TasksModule {
}