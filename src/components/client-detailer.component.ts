import {Component, Input} from "@angular/core";
import {IClient} from "../models/client.model";

@Component({
    selector: 'client-detailed',
    template: `   
     <div class="ui items">
  <div class="item">
    <div class="image">
      <img src="{{client.general.avatar}}">
    </div>
    <div class="content">
      <a class="header">{{client.general.firstName}} {{client.general.lastName}}</a>
      <div class="meta">
        <span>{{client.job.title}} - {{client.job.company}}</span>
      </div>
      <div class="description">
        <p>Address: {{client.address.country}}, {{client.address.city}}, {{client.address.street}}, {{client.address.zipCode}}</p>
      </div>
      <div class="extra">
        <p>email: {{client.contact.email}}</p>
        <p>phone: {{client.contact.phone}}</p>
      </div>
    </div>
  </div>
  </div>
`,
    styles: [`img {
        max-height: 128px;
        min-height: 128px;
    } 
    .ui.items {
    padding-top: 30px;
    }`]
})
export class ClientDetailedComponent {

    @Input() client : IClient;

    constructor() {
    }
}