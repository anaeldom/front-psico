import { Component, OnInit } from '@angular/core';
import { Citas } from 'src/app/models/citas';
import { CitasService } from 'src/app/services/citas.service';
import { MedicoService } from 'src/app/services/medico.service';
import { PacienteService } from 'src/app/services/paciente.service';

import pdfFonts from 'pdfmake/build/vfs_fonts';
import pdfMake from 'pdfmake/build/pdfMake';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-view-medico',
  templateUrl: './view-medico.component.html',
  styleUrls: ['./view-medico.component.css']
})
export class ViewMedicoComponent implements OnInit {

  listaCitas: any[]=[]; //
  listasCitas2:any[]=[]; //

  constructor(private _citasService: CitasService,private _medService:MedicoService,private _pacService:PacienteService) { }

  ngOnInit(): void {
    this.obtenerCitas();
  }

  fechaHoy(){
    const today = new Date();
    return Date.UTC(today.getFullYear(),today.getMonth(),today.getDay(),today.getHours(),today.getMinutes(),today.getSeconds(),today.getMilliseconds());
  }

  compareDate(nombre:Date){
    const date1 = new Date(nombre);
    const date2 = new Date(this.fechaHoy())
    return date1.getTime() < date2.getTime();
  }

  getID():any{
    return localStorage.getItem('id');
  }

  obtenerCitas(){
    this._citasService.obtenerCitasM(this.getID()).subscribe(data =>{
      this.listaCitas = data;
    }, error =>{
      console.log(error);
    })
    this._citasService.obtenerCitasMM(this.getID()).subscribe(data =>{
      this.listasCitas2 = data;
    }, error =>{
      console.log(error);
    })
  }

  nombreMedico(){
    const id = localStorage.getItem('id')
    let nombre:string;
    this._medService.obtenerMedico(id).subscribe(data =>{
      //console.log(data);
      nombre = data.nombreMedico+' '+data.apellidoPatMedico+' '+data.apellidoMatMedico;
      localStorage.setItem('nombreMedico',nombre);
      //console.log(nombre);
    },error=>{console.log(error)})
  }

  getNameP(id:String){
    this._pacService.obtenerPaciente(id).subscribe(data=>{        
      localStorage.setItem('nombrePaciente',data.nombrePaciente+' '+data.apellidoPatPaciente+' '+data.apellidoMatPaciente)
      
      var nombreCompleto = data.nombrePaciente+' '+data.apellidoPatPaciente+' '+data.apellidoMatPaciente;
      console.log(nombreCompleto);
  
      return nombreCompleto.toString();
    },error=>{console.log(error);})
  }

  buildTableBody(data, columns) {
    var body = [];
    body.push(columns);

    for (let index = 0; index < data.length; index++) {
      var dataRow = [];
      const date= new Date(data[index].fechaCita);
      
      //console.log(date.toLocaleDateString());
      dataRow.push(date.toLocaleDateString());

      //console.log(data[index].horaCita);
      dataRow.push(data[index].horaCita);

     // console.log(data[index].id_paciente[0].nombrePaciente);
      dataRow.push(data[index].id_paciente[0].nombrePaciente+' '+data[index].id_paciente[0].apellidoPatPaciente+' '+data[index].id_paciente[0].apellidoMatPaciente);
      
      //console.log(data[index].antecedentes);
      if(data[index].antecedentes == "" || data[index].antecedentes == undefined){
        dataRow.push('No tiene');
      }else{
        dataRow.push('Si tiene');
      }
      //console.log(data[index].notas);
      dataRow.push(data[index].notas);
      body.push(dataRow);
    }
    return body;
  }

  table(data, columns) {
    return {
        table: {
            headerRows: 1,
            body: this.buildTableBody(data, columns)
        }
    };
  }
 
  createPDF(){
    this.nombreMedico()
    let today = new Date(this.fechaHoy());
    const pdfDefinition: any = {
      header: {
        columns:[
          {text:'Psico-APP 🧠',aligment:'left'}
        ]},
      watermark: { text: 'Reporte general psico app', color: 'blue', opacity: 0.3, bold: true, italics: false },
      content: [
          {text:'REPORTE GENERAL DE LAS CITAS DEL MEDICO',fontSize:20, alignment: 'center'},
          {text:'---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------',fontSize:5,background: ['stripe45d', 'gray'],alignment:'center'},
          {text:''},
          {text:' '},
          [{text:'Nombre del Medico: ', bold:true},{text:localStorage.getItem('nombreMedico')?.toString()}],
          {text:' '},
          [{text: 'Fecha de expedicion: ', bold:true},{text:today.toLocaleDateString()}],
          {text:' '},
          {text:' '},
          {text:'RESUMEN DE CITAS',fontSize:17,alignment:'center'},
          {text:' '},
          {text:'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------',fontSize:5,background: ['gray'],alignment:'center'},
          {text:' '},
          this.table(this.listasCitas2, ['Fecha de la cita','Hora de la cita','Nombre del paciente','Antecedentes','Notas']), //Datos de las citas
          {text:' '},
          {text:'-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------',fontSize:5,background: ['stripe45d', 'gray'],alignment:'center'},
      ],
      footer:{
        columns:[{text:''},{text:'Evite el mal uso de la informacion.'}],
      }
    }
    
    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }
}
