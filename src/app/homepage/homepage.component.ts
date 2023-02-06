import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Sinistro } from '../entities/sinistro';
import { SinistroService } from '../services/service';

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
  sinistri: Sinistro[] = [
    {
      "id": 220185043,
      "nome": "La torre Livia",
      "uls": 33,
      "agenzia": "Urbino",
      "gest": 28,
      "prod": 28,
      "contraente": "Mazzoli Silvano"
    },
    {
      "id": 220183775,
      "nome": "La torre Livia",
      "uls": 33,
      "agenzia": "Fano",
      "gest": 32,
      "prod": 32,
      "contraente": "Fucili Elisabetta"
    },
    {
      "id": 220179496,
      "nome": "La torre Livia",
      "uls": 33,
      "agenzia": "Ascoli Piceno",
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
