import { Component } from '@angular/core';

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
