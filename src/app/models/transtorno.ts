export class Transtorno{
    _id?:number;
    nombreTranstorno:String;
    descripcion:String;
    constructor(nt:String,des:String){
        this.nombreTranstorno = nt;
        this.descripcion = des;
    }
}