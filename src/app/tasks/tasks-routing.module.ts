/**
 * Created by namita on 7/10/16.
 */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { TaskDetailComponent } from './task-detail.component';
import { TasksListComponent } from './tasks-list.component';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '', // url = /tasks
                component: TasksComponent,
                children: [
                    {
                        path: '', // url = /tasks
                        redirectTo: 'list',
                        pathMatch: 'full',
                    },
                    {
                        path: 'list', // url = /tasks/list
                        component: TasksListComponent
                    },
                    {
                        path: ':id', // url = /tasks/[id]
                        component: TaskDetailComponent,
                    }
                ]
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class TasksRoutingModule {
}