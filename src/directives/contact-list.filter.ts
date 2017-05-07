import {PipeTransform, Injectable, Pipe} from "@angular/core";
import {IClient} from "../models/client.model";

@Pipe({
    name: 'customerFilter'
})
@Injectable()
export class CustomerFilter implements PipeTransform {
    transform(contacts : Array<IClient>, args: any): any {

        if (args) {
            return contacts.filter(customer =>  {
                for (let informationType in customer) {
                    if (customer.hasOwnProperty(informationType)) {

                        let information = customer[informationType];
                        if (information !== null && typeof information === 'object') {

                            for (let key in information) {
                                if (information.hasOwnProperty(key)) {
                                    if (customer[informationType][key].toLowerCase().indexOf(args.toLowerCase()) !== -1) {
                                        return customer;
                                    }
                                }
                            }
                        }
                    }
                }
            });
        }

        return contacts;

    }
}