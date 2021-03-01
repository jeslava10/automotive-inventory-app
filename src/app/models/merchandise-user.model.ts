import { Appointment } from "./appointment.model";

export class MerchandiseUser {

    id:number;
    name: string;
    idAppointment: Appointment; 
    admissionDate: Date;
    age: number;

    constructor(id:number, name: string, idAppointment: Appointment, admissionDate: Date, age: number){
        this.id = id
        this.name = name
        this.idAppointment = idAppointment
        this.admissionDate = admissionDate
        this.age = age
    }

}
