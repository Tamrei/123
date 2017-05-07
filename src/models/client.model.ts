export interface IClient {
    general: IGeneral;
    job: IJob;
    contact: IContact;
    address: IAddress;
}

interface IGeneral {
    firstName: string
    lastName: string
    avatar: string
}

interface IJob {
    company: string
    title: string
}

interface IContact {
    email: string
    phone: string
}

interface IAddress {
    street: string
    city: string
    zipCode: string
    country: string
}