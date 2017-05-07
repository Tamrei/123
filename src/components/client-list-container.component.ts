import {Component, Input, Output, EventEmitter} from "@angular/core";
import {IClient} from "../models/client.model";

@Component({
    selector: 'client-list-container',
    template: `   
       <div class="ui icon input header-input">
            <input type="text" placeholder="Search..." [(ngModel)]="filter">
            <i class="search icon"></i>
        </div>

        <client-list-item *ngFor="let client of clients | customerFilter:filter;"
                          (click)="select(client)"
                          [avatar]="client.general.avatar"
                          [firstName]="client.general.firstName"
                          [lastName]="client.general.lastName"
                          [jobTitle]="client.job.title"
        ></client-list-item>
    `,
    styles: [`.ui.icon.input.header-input {
       width: 100%; 
       padding: 6px;
    }`]
})
export class ClientListContainerComponent {

    @Input() clients: Array<IClient> = [];
    @Output() selectEvent: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    select(contact) {
        this.selectEvent.emit(contact);
    }
}