import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Sinistro } from '../entities/sinistro';
import { SinistroService } from '../services/service';
import { Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  opzioniListaSinistra: any[];
  opzioneSelezionata: any;
  statoTabella: boolean = true;
  checked: boolean = false;
  iconaDettaglioSinistro: string = "pi-angle-down";
  sinistroSelezionato: any;
  subscription: Subscription = new Subscription;
  url: string = "http://localhost:4200/dettaglio/";
  sinistri: any[] = [
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
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  mostraDettagliSinistro(id: number){
    if(document.getElementById('dettagliSinistro'+id)?.classList.contains("visibility")){
      document.getElementById('dettagliSinistro'+id)?.classList.remove("flex");
      document.getElementById('dettagliSinistro'+id)?.classList.add("removeVisibility");
      document.getElementById('dettagliSinistro'+id)?.classList.remove("visibility");
      document.getElementById('icona'+id)?.classList.remove("pi-angle-up");
      document.getElementById('icona'+id)?.classList.add("pi-angle-down");
  }
  else{
      document.getElementById('dettagliSinistro'+id)?.classList.add("visibility");
      document.getElementById('dettagliSinistro'+id)?.classList.remove("removeVisibility");
      document.getElementById('dettagliSinistro'+id)?.classList.add("flex");
      document.getElementById('icona'+id)?.classList.remove("pi-angle-down");
      document.getElementById('icona'+id)?.classList.add("pi-angle-up");
  }
  }

}
