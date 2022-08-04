export class Especialidad{
    _id?:number;
    nombreEspecialidad: String;
    descripcion: String;
    estadoVigente: Boolean;
    cedula: String;
    constructor(nomE:String,des:String,ev:Boolean,ced:String){
        this.nombreEspecialidad = nomE;
        this.descripcion = des;
        this.estadoVigente = ev;
        this.cedula = ced;
    }
}