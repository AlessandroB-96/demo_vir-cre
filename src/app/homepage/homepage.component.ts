import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Sinistro } from '../entities/sinistro';
import { SinistroService } from '../services/service';
import * as jsonSinistri from '../../assets/sinistri.json';
import { Output, EventEmitter } from '@angular/core';

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
  @Output() sinistri: any[] = [
    {
      "id": 0,
      "numeroSinistro": 220185043,
      "nome": "La torre Livia",
      "uls": 33,
      "luogoAgenzia": "Urbino",
      "numeroAgenzia": "A562",
      "gest": 28,
      "prod": 28,
      "contraente": "Mazzoli Silvano"
    },
    {
      "id": 1,
      "numeroSinistro": 220183775,
      "nome": "La torre Livia",
      "uls": 33,
      "luogoAgenzia": "Fano",
      "numeroAgenzia": "O161",
      "gest": 32,
      "prod": 32,
      "contraente": "Fucili Elisabetta"
    },
    {
      "id": 2,
      "numeroSinistro": 220179496,
      "nome": "La torre Livia",
      "uls": 33,
      "luogoAgenzia": "Ascoli Piceno",
      "numeroAgenzia": "A493",
      "gest": 1,
      "prod": 1,
      "contraente": "Giordani Gianfranco"
    }
  ];

  constructor(private http:HttpClient, private service: SinistroService) {
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
