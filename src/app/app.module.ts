import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app";
import {BrowserModule} from "@angular/platform-browser";
import {ROUTES} from "./app.routes";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {ClientListItemComponent} from "../components/client-list-item.component";
import {CustomerFilter} from "../directives/contact-list.filter";
import {ClientDetailedComponent} from "../components/client-detailer.component";
import {ClientsService} from "../service/clients.service";
import {ClientListComponent} from "../modules/client-list/client-list.component";
import {ClientListContainerComponent} from "../components/client-list-container.component";


@NgModule({
    declarations: [
        AppComponent,
        ClientListComponent,
        ClientListItemComponent,
        ClientDetailedComponent,
        ClientListContainerComponent,

        CustomerFilter
    ],
    imports: [
        // Angular modules
        BrowserModule,
        FormsModule,
        RouterModule,

        HttpModule,
        RouterModule.forRoot(ROUTES),
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        ClientsService,
    ],
    bootstrap: [AppComponent]
})

export class AppModule {

}