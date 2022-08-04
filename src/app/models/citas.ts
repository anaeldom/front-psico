import { Time } from "@angular/common";

export class Citas{
    _id?:number;
    fechaCita: Date;
    horaCita: Time;
    id_medico: Object;
    id_paciente: Object;
    notas: String;
    constructor(fc: Date, hc: Time, idm:Object,idp:Object,nts:String){
        this.fechaCita = fc;
        this.horaCita = hc;
        this.id_medico = idm;
        this.id_paciente = idp;
        this.notas = nts;
    }
}