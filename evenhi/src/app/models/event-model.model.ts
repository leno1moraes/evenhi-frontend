export class EventModel {
    id: number;
    status: number;
    title: string;
    urlImage: string;
    location: string;
    date: string;
    customers: number;

    constructor(id: number, status: number, title: string, urlImage: string, 
                location: string, date: string, customers: number){
        this.id = id;
        this.status = status;
        this.title = title;
        this.urlImage = urlImage;
        this.location = location;
        this.date = date;
        this.customers = customers;
    }
}
