import {Injectable} from "@angular/core";
import {RequestOptions, Request, Http} from "@angular/http";
import {IClient} from "../models/client.model";

@Injectable()
export class ClientsService {

    constructor(private http: Http) {
    }

    public getClients() {
        let options = new RequestOptions({
            method: "GET",
            url: "/data/clients.json",
        });

        return this.http.request(new Request(options)).map(res => res.json())
    }

}
