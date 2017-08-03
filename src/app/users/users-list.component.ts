/**
 * Created by NamitaMalik on 9/28/2016. Adapted by Stewan Pacheco on 02/08/2017.
 */
import { Component } from '@angular/core';

@Component({
    selector: 'app-users-list',
    template: `
    <div>
        <ul class="bubble">
            <li *ngFor="let user of users let i=index">
                <span>{{i+1}}.</span>
                <span>{{user.name}}</span>
            </li>
        </ul>
    </div>
    `,
})

export class UsersListComponent {
    private users = [
        { id: '1', name: 'John Doe' },
        { id: '2', name: 'Jane Roe' },
        { id: '3', name: 'John Smith' }
    ];
    constructor() {
    }
}