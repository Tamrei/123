import {Routes} from "@angular/router";
import {ClientListComponent} from "../modules/client-list/client-list.component";



export const ROUTES:Routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},

    {path: 'main', component:ClientListComponent},

];
