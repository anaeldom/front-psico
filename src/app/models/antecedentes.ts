export class Antecedentes{
    _id?:number;
    medicamentos:String;
    ultimoMedico:Object;
    id_transtorno:Object;
    constructor(med:String,ultM:Object,idT:Object){
        this.medicamentos = med;
        this.ultimoMedico = ultM;
        this.id_transtorno = idT;
    }
}