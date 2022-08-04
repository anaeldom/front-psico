export class Paciente{
    _id?:number;
    nombrePaciente: String;
    apellidoPatPaciente: String;
    apellidoMatPaciente: String;
    fechaNacimiento: Date;
    antecedentes: String;
    //citasPrevias: String;
    telefono: Number;

    constructor(nom:String,apep:String,apem:String,fec:Date,ant:String,tel:Number){
        this.nombrePaciente = nom;
        this.apellidoPatPaciente = apep;
        this.apellidoMatPaciente = apem;
        this.fechaNacimiento = fec;
        this.antecedentes = ant;
        //this.citasPrevias = cit;
        this.telefono = tel;
    }
}