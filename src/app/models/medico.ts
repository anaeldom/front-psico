export class Medico{
    _id?:number;
    nombreMedico: String;
    apellidoPatMedico: String;
    apellidoMatMedico: String;
    especialidad: Array<String>;
    telefono:Number;
    //id_agenda: Object;

    constructor(nombreM: String, apePM: String, apeMM: String, espec: Array<String>,tel:Number){
        this.nombreMedico = nombreM;
        this.apellidoPatMedico = apePM;
        this.apellidoMatMedico = apeMM;
        this.especialidad = espec;
        this.telefono = tel;
        //this.id_agenda = id_agenda;
    }
}