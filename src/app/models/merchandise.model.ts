  
import { MerchandiseUser } from "./merchandise-user.model";

export class Merchandise {

    id: number;
    productName: string;
    amount: number;
    idUser: MerchandiseUser;
    admissionDate: Date;
    modificationDate: Date;

    constructor( id: number, productName: string, amount: number, idUser: MerchandiseUser, admissionDate: Date, modificationDate: Date){
        this.id = id
        this.productName = productName
        this.amount = amount
        this.idUser = idUser
        this.admissionDate = admissionDate
        this.modificationDate = modificationDate
    }

    
}
