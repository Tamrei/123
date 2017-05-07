import {Component, Input} from "@angular/core";

@Component({
    selector: 'client-list-item',
    template: `   
      <div class="ui list" style="padding: 8px 5px;">
<div class="item">
            <img class="ui  image" src="{{avatar}}">
            <div class="content">
                <a class="header">{{firstName}} {{lastName}}</a>
                <div class="description">{{jobTitle}}</div>
            </div>
        </div>
        </div>
`,
    styles: [`img {
        max-height: 40px;
        min-height: 40px;
     }
     .ui.list:hover {
        cursor: pointer;
     }`]
})
export class ClientListItemComponent {

    @Input() firstName: string;
    @Input() lastName: string;
    @Input() jobTitle : string;
    @Input() avatar : string;

    constructor() {
    }

}