export class EventModel {
    id: number;
    nameEvent: string;
    pathImage: string;
    zipcode: string;
    district: string;
    street: string;
    state: string;
    city: string;
    country: string;
    subscribers: number
    userId: number;
    status: number;
    date: string;

    constructor(id: number, nameEvent: string, pathImage: string, zipcode: string, 
                district: string, street: string, state: string, city: string, 
                country: string, subscribers: number, userId: number, status: number,
                date: string){
        this.id = id;
        this.nameEvent = nameEvent;
        this.pathImage = pathImage;
        this.zipcode = zipcode;
        this.district = district;
        this.street = street;
        this.state = state;
        this.city = city;
        this.country = country;
        this.subscribers = subscribers;
        this.userId = userId;
        this.status = status;
        this.date = date;
    }
    
}
