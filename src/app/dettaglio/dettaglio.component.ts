import { Component, Input } from '@angular/core';
import { Sinistro } from '../entities/sinistro';

@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrls: ['./dettaglio.component.css']
})
export class DettaglioComponent {
  opzioniListaSinistra: any;
  opzioniDinamicaInequivocabile: any;
  valoreDinamicaInequivocabile: any;
  opzioniCollisione: any;
  valoreCollisione: any;
  opzioniConstatazioneAmichevole: any;
  sceltaConstatazioneAmichevole: any;
  opzioniDataCAI: any;
  valoreDataCAI: any;
  opzioniTargaCAI: any;
  valoreTargaCAI: any;
  opzioniAssenzaDanni: any;
  valoreAssenzaDanni: any;
  opzioniCompagnieCAI: any;
  valoreCompagnieCAI: any;
  idSinistro: number=0;
  sinistro: any[] = [
    {
      "id": 0,
      "numeroSinistro": 220185043,
      "ramo": "RCA",
      "stato" : "Aperto",
      "copertura" : "Si",
      "gestione" : "RC (RC)",
      "responsabilita" : "Ragione",
      "confermato" : "Si",
      "dataConfermato" : "21/12/2022",
      "liquidatore": "La torre Livia",
      "ulsLuogo" : "Genova",
      "ulsNumero": 33,
      "luogoAgenzia": "Urbino",
      "numeroAgenzia": "A562",
      "gest": 28,
      "prod": 28,
      "contraente": "Mazzoli Silvano",
      "plp":"Non assegnata",
      "conducenteVeicolo": "Mazzoli Samuele",
      "proprietarioVeicolo" :"Mazzoli Silvano",
      "infoSinistro" : "Contestato",
      "tipoDenuncia" : "",
      "denunciante" : "",
      "ruoloDenunciante" : "",
      "assicurato" : "",
      "luogoDenuncia" : "",
      "accadutoDenuncia" : "",
      "eventoDenuncia" : "",
      "dataDenunica" : "",
      "dataPervenimentoDenuncia": "",
      "dataProtocollazione" : "",
      "datachiusura" : "",
      "riattivazione" : "",
      "rifIntermediario": "",
      "rifAssicurato": "",
      "idCAU": ""
    },
    {
      "id": 220183775,
      "nome": "La torre Livia",
      "uls": 33,
      "luogoAgenzia": "Fano",
      "numeroAgenzia": "O161",
      "gest": 32,
      "prod": 32,
      "contraente": "Fucili Elisabetta"
    },
    {
      "id": 220179496,
      "nome": "La torre Livia",
      "uls": 33,
      "luogoAgenzia": "Ascoli Piceno",
      "numeroAgenzia": "A493",
      "gest": 1,
      "prod": 1,
      "contraente": "Giordani Gianfranco"
    }
  ];

  constructor() {
    this.opzioniListaSinistra = [
      {nome: 'HOME', codice: '1'},
      {nome: 'Entità', codice: '2'},
      {nome: 'Distinte', codice: '3'},
      {nome: 'Parcelle', codice: '4'},
      {nome: 'KPI', codice: '5'},
      {nome: 'Gestione card debitore', codice: '6'},
      {nome: 'Gestione', codice: '7'}
  ];
  this.opzioniDinamicaInequivocabile = [
      {label: 'Si', value: 'Si'},
      {label: 'No', value: 'No'}
  ];
  this.opzioniCollisione = [
    {label: 'Si', value: 'Si'},
    {label: 'No', value: 'No'}
  ];
  this.opzioniConstatazioneAmichevole = [
    {name: 'SI CON DUE FIRME', value: 'Si con due firme'},
    {name: 'NO', value: 'No'}
  ];
  this.opzioniDataCAI = [
    {label: 'Si', value: 'Si'},
    {label: 'No', value: 'No'}
  ];
  this.opzioniTargaCAI = [
    {label: 'Si', value: 'Si'},
    {label: 'No', value: 'No'}
  ];
  this.opzioniAssenzaDanni = [
    {label: 'Si', value: 'Si'},
    {label: 'No', value: 'No'}
  ];
  this.opzioniCompagnieCAI = [
    {label: 'Si', value: 'Si'},
    {label: 'No', value: 'No'}
  ];  
}

}
