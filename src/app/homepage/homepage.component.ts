import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Sinistro } from '../entities/sinistro';
import { SinistroService } from '../services/service';
import * as jsonSinistri from '../../assets/sinistri.json';

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
  sinistri: any[];

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
    this.sinistri = jsonSinistri;
    console.log(this.sinistri);
    console.log(this.sinistri.at(0));
    
    
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
