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
      "contraente": "Mazzoli Silvano",
      "plp":"Non assegnata",
      "conducenteVeicolo": "Mazzoli Samuele",
      "proprietarioVeicolo" :"Mazzoli Silvano",
      "infoSinistro" : "Contestato",
      "tipoDenuncia" : "Denuncia Assicurato",
      "denunciante" : "Silvano Mazzoli",
      "ruoloDenunciante" : "Contraente",
      "assicurato" : "Silvano Mazzoli",
      "luogoDenuncia" : "61028 Sassocorvaro Auditore",
      "accadutoDenuncia" : "16/12/2022 - 18:30",
      "eventoDenuncia" : "-",
      "dataDenuncia" : "16/12/2022",
      "dataPervenimentoDenuncia": "19/12/2022",
      "dataProtocollazione" : "20/12/2022",
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
      "indicateCompagnieCAI": "Si"
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
      "contraente": "Fucili Elisabetta",
      "plp":"Non assegnata",
      "conducenteVeicolo": "Fucili Elisabetta",
      "proprietarioVeicolo" :"Fucili Elisabetta",
      "infoSinistro" : "Contestato",
      "tipoDenuncia" : "Denuncia Assicurato",
      "denunciante" : "Fucili Elisabetta",
      "ruoloDenunciante" : "Contraente",
      "assicurato" : "Fucili Elisabetta",
      "luogoDenuncia" : "61028 Sassocorvaro Auditore",
      "accadutoDenuncia" : "16/12/2022 - 18:30",
      "eventoDenuncia" : "-",
      "dataDenuncia" : "16/12/2022",
      "dataPervenimentoDenuncia": "19/12/2022",
      "dataProtocollazione" : "20/12/2022",
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
      "indicateCompagnieCAI": "Si"
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
      "contraente": "Giordani Gianfranco",
      "plp":"Non assegnata",
      "conducenteVeicolo": "Giordani Gianfranco",
      "proprietarioVeicolo" :"Giordani Gianfranco",
      "infoSinistro" : "Contestato",
      "tipoDenuncia" : "Denuncia Assicurato",
      "denunciante" : "Giordani Gianfranco",
      "ruoloDenunciante" : "Contraente",
      "assicurato" : "Giordani Gianfranco",
      "luogoDenuncia" : "61028 Sassocorvaro Auditore",
      "accadutoDenuncia" : "16/12/2022 - 18:30",
      "eventoDenuncia" : "-",
      "dataDenuncia" : "16/12/2022",
      "dataPervenimentoDenuncia": "19/12/2022",
      "dataProtocollazione" : "20/12/2022",
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
      "indicateCompagnieCAI": "No"
    }
  ];
  idDettaglio: any;
  

  constructor(private route: ActivatedRoute, private service: SinistroService) {
    
    console.log("idSinistro: "+this.idSinistro);
    
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
  console.log(this.idSinistro);
  this.valoreCollisione = this.sinistro[this.idSinistro].collisione;
  this.valoreDinamicaInequivocabile = this.sinistro[this.idSinistro].dinamicaIneq;
  this.valoreDataCAI = this.sinistro[this.idSinistro].presenteDataCAI;
  this.valoreAssenzaDanni = this.sinistro[this.idSinistro].assicuratoDichAssenzaDanni;
  this.valoreCompagnieCAI = this.sinistro[this.idSinistro].indicateCompagnieCAI;
  this.valoreTargaCAI = this.sinistro[this.idSinistro].targheNellaCAI;
}

}
