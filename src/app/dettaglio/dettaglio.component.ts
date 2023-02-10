import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sinistro } from '../entities/sinistro';
import { HomepageComponent } from '../homepage/homepage.component';
import { SinistroService } from '../services/service';

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
      "aBordo":"Contraente non a bordo",
      "contraente": "Rossi Mario",
      "plp":"Non assegnata",
      "conducenteVeicolo": "Mario Rossi",
      "proprietarioVeicolo" :"Mario Rossi",
      "infoSinistro" : "Contestato",
      "tipoDenuncia" : "Denuncia Assicurato",
      "denunciante" : "Mario Rossi",
      "ruoloDenunciante" : "Contraente",
      "assicurato" : "Mario Rossi",
      "luogoDenuncia" : "61028 Sassocorvaro Auditore",
      "accadutoDenuncia" : "22/01/2018",
      "eventoDenuncia" : "-",
      "dataDenuncia" : " 22/01/2018 ",
      "dataPervenimentoDenuncia": "27/01/2018",
      "dataProtocollazione" : "29/01/2018",
      "datachiusura" : "-",
      "riattivazione" : "-",
      "rifIntermediario": "-",
      "rifAssicurato": "-",
      "idCAU": "No",
      "collisione" : "Si",
      "dinamicaIneq": "Si",
      "presenteDataCAI":"Si",
      "targheNellaCAI" : "Si",
      "assicuratoDichAssenzaDanni" : "No",
      "indicateCompagnieCAI": "Si",
      
      "contraenteProprietario" : "Rossi Mario",
      "contraenteControparte" : "Rossi Mario",
      "contraenteTarga" : "CZ453MD",
      "contraenteMarca" : " Seat Leon ",
      "contraenteVeicolo" : "Autovettura ",
      "contraenteCompagnia" : "ITAS  Assicurazioni",

      "controProprietario": "Lucchi Fausto",
      "controControparte" : "Lucchi Fausto",
      "controTarga" : "BO543ER",
      "controMarca" : "Opel Corsa",
      "controVeicolo" : "Autovettura",
      "controCompagnia" : "Zurich Assicurazioni"
    },
    {
      "id": 1,
      "numeroSinistro": 220183775,
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
      "luogoAgenzia": "Fano",
      "numeroAgenzia": "0161",
      "gest": 32,
      "prod": 32,
      "aBordo":"Contraente a bordo",
      "contraente": "Vittorio Sappi ",
      "plp":"Non assegnata",
      "conducenteVeicolo": "Vittorio Sappi ",
      "proprietarioVeicolo" :"Vittorio Sappi ",
      "infoSinistro" : "Contestato",
      "tipoDenuncia" : "Denuncia Assicurato",
      "denunciante" : "Vittorio Sappi ",
      "ruoloDenunciante" : "Contraente",
      "assicurato" : "Vittorio Sappi",
      "luogoDenuncia" : "61028 Sassocorvaro Auditore",
      "accadutoDenuncia" : "23/04/2021",
      "eventoDenuncia" : "-",
      "dataDenuncia" : "23/04/2021",
      "dataPervenimentoDenuncia": "29/04/2021",
      "dataProtocollazione" : "02/05/2021",
      "datachiusura" : "-",
      "riattivazione" : "-",
      "rifIntermediario": "-",
      "rifAssicurato": "-",
      "idCAU": "No",
      "collisione" : "No",
      "dinamicaIneq": "Si",
      "presenteDataCAI":"Si",
      "targheNellaCAI" : "No",
      "assicuratoDichAssenzaDanni" : "Si",
      "indicateCompagnieCAI": "Si",
      
      "contraenteProprietario" : "Sappi Vittorio",
      "contraenteControparte" : "Sappi Vittorio",
      "contraenteTarga" : "TN432NI",
      "contraenteMarca" : "Mercedes Benz",
      "contraenteVeicolo" : "Autovettura ",
      "contraenteCompagnia" : "ITAS  Assicurazioni",

      "controProprietario": "Salvi Eugenio",
      "controControparte" : "Salvi Eugenio",
      "controTarga" : "BO467SA",
      "controMarca" : "Kia Motors",
      "controVeicolo" : "Autovettura",
      "controCompagnia" : "ITAS  Assicurazioni"
    },
    {
      "id": 2,
      "numeroSinistro": 220179496,
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
      "luogoAgenzia": "Ascoli Piceno",
      "numeroAgenzia": "A493",
      "gest": "01",
      "prod": "01",
      "aBordo":"Contraente a bordo",
      "contraente": "Marino Fiocco",
      "plp":"Non assegnata",
      "conducenteVeicolo": "Marino Fiocco",
      "proprietarioVeicolo" :"Marino Fiocco",
      "infoSinistro" : "Contestato",
      "tipoDenuncia" : "Denuncia Assicurato",
      "denunciante" : "Marino Fiocco",
      "ruoloDenunciante" : "Contraente",
      "assicurato" : "Marino Fiocco",
      "luogoDenuncia" : "61028 Sassocorvaro Auditore",
      "accadutoDenuncia" : "01/02/2020",
      "eventoDenuncia" : "-",
      "dataDenuncia" : "09/02/2020",
      "dataPervenimentoDenuncia": "09/02/2020",
      "dataProtocollazione" : "13/02/2020",
      "datachiusura" : "-",
      "riattivazione" : "-",
      "rifIntermediario": "-",
      "rifAssicurato": "-",
      "idCAU": "No",
      "collisione" : "Si",
      "dinamicaIneq": "No",
      "presenteDataCAI":"Si",
      "targheNellaCAI" : "No",
      "assicuratoDichAssenzaDanni" : "Si",
      "indicateCompagnieCAI": "No",

      "contraenteProprietario" : "Fiocco Marino",
      "contraenteControparte" : "Fiocco Marino",
      "contraenteTarga" : "FR564RE",
      "contraenteMarca" : "Opel Astra",
      "contraenteVeicolo" : "Autovettura ",
      "contraenteCompagnia" : "ITAS  Assicurazioni",

      "controProprietario": "Ghiotto Teresa",
      "controControparte" : "Ghiotto Teresa",
      "controTarga" : "VR589UT",
      "controMarca" : " Micra",
      "controVeicolo" : "Autovettura",
      "controCompagnia" : " - "
    },
    {
      "id": 3,
      "numeroSinistro": 221135486,
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
      "gest": "29",
      "prod": "29",
      "aBordo":"Contraente a bordo",
      "contraente": "Quintana Pena Cesar Ricardo",
      "plp":"Non assegnata",
      "conducenteVeicolo": "Quintana Pena Cesar Ricardo",
      "proprietarioVeicolo" :"Quintana Pena Cesar Ricardo ",
      "infoSinistro" : "Contestato",
      "tipoDenuncia" : "Denuncia Assicurato",
      "denunciante" : "Quintana Pena Cesar Ricardo",
      "ruoloDenunciante" : "Contraente",
      "assicurato" : "Quintana Pena Cesar Ricardo",
      "luogoDenuncia" : "61028 Sassocorvaro Auditore",
      "accadutoDenuncia" : "13/07/2019",
      "eventoDenuncia" : "-",
      "dataDenuncia" : "16/07/2019",
      "dataPervenimentoDenuncia": "16/07/2019",
      "dataProtocollazione" : "20/07/2019",
      "datachiusura" : "-",
      "riattivazione" : "-",
      "rifIntermediario": "-",
      "rifAssicurato": "-",
      "idCAU": "No",
      "collisione" : "Si",
      "dinamicaIneq": "Si",
      "presenteDataCAI":"No",
      "targheNellaCAI" : "Si",
      "assicuratoDichAssenzaDanni" : "Si",
      "indicateCompagnieCAI": "No",

      "contraenteProprietario" : "Quintana Pena Cesar Ricardo",
      "contraenteControparte" : "Quintana Pena Cesar Ricardo",
      "contraenteTarga" : "FA214AE",
      "contraenteMarca" : "Renault Clio",
      "contraenteVeicolo" : "Autovettura ",
      "contraenteCompagnia" : "ITAS  Assicurazioni",

      "controProprietario": "Giuffrida Grazia Anna",
      "controControparte" : "Giuffrida Grazia Anna",
      "controTarga" : "DR997AD",
      "controMarca" : "Fiat Punto",
      "controVeicolo" : "Autovettura",
      "controCompagnia" : "Intesa San Paolo"
    }
  ];
  idDettaglio: any;
  

  constructor(private route: ActivatedRoute) {
    
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

ngOnInit(){
  this.idSinistro= this.route.snapshot.params['id'];
  this.valoreCollisione = this.sinistro[this.idSinistro].collisione;
  this.valoreDinamicaInequivocabile = this.sinistro[this.idSinistro].dinamicaIneq;
  this.valoreDataCAI = this.sinistro[this.idSinistro].presenteDataCAI;
  this.valoreAssenzaDanni = this.sinistro[this.idSinistro].assicuratoDichAssenzaDanni;
  this.valoreCompagnieCAI = this.sinistro[this.idSinistro].indicateCompagnieCAI;
  this.valoreTargaCAI = this.sinistro[this.idSinistro].targheNellaCAI;
}

}
