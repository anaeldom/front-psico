export class Usuario{
    _id?:number;
    nombreUsuario: String;
    contrasena: String;
    correo: String;
    tipoUsuario: String;
    idTipoUsuario: String;

    constructor(nom: String,contr: String,corre: String,tipoU: String,idTU: String){
        this.nombreUsuario = nom;
        this.contrasena = contr;
        this.correo = corre;
        this.tipoUsuario = tipoU;
        this.idTipoUsuario = idTU;
    }
}