/**
 * Created by NamitaMalik on 9/27/2016. Adapted by Stewan Pacheco on 02/08/2017.
 */
import {Component} from '@angular/core';
import {Router} from '@angular/router';
import { ProviderService } from "../provider.service";

@Component({
    template: `
    <div>
        <ul class="bubble">
            <li *ngFor="let task of tasks let i=index" (click)="onSelect(task)">
                <span>{{i+1}}.</span>
                <span>{{task.title}}</span>
            </li>
        </ul>
    </div>
    `,
})

export class TasksListComponent {

    constructor(private router:Router, public provider: ProviderService) {
        provider.name = 'é legal';
        console.log(provider);
    }

    private tasks = [
        {id: '1', title: 'Code Cleanup'},
        {id: '2', title: 'Review Code'},
        {id: '3', title: 'Build to Prod'}
    ];
    private errorMessage:any = '';

    onSelect(task) {
        this.router.navigate(['/tasks', task.id]);
    }
}