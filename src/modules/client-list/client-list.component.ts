import {Component} from "@angular/core";
import {ClientsService} from "../../service/clients.service";
import {IClient} from "../../models/client.model";

@Component({
    selector: 'store',
    templateUrl: 'client-list.template.html',
})
export class ClientListComponent {

    private contacts: Array<IClient> = [];
    private selectedContact: IClient;
    private filter: string = "";

    constructor(private clientService: ClientsService) {
    }

    ngOnInit() {
        this.clientService.getClients().subscribe(
            success => {
                this.contacts = success;
                this.selectedContact = this.contacts[0];
            }, error => {
                console.log(error);
            }
        );
    }

    selectContact(contact) {
        this.selectedContact = contact;
    }
}