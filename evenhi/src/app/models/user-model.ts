export class UserModel {
    id: number;
    typedocument: string;
    document: string;
    email: string;
    password: string;

    constructor(id: number, typedocumento: string, document: string, email: string, 
                password: string){
                    this.id = id;
                    this.typedocument = typedocumento;
                    this.document = document;
                    this.email = email;
                    this.password = password;
    }
}
