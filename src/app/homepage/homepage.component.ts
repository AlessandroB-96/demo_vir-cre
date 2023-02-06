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
  sinistri: Sinistro[] = [
    {
      "id": 1,
      "nome": "La torre Livia",
      "uls": 33,
      "agenzia": "Urbino",
      "gest": 28,
      "prod": 28,
      "contraente": "Mazzoli Silvano"
    },
    {
      "id": 2,
      "nome": "La torre Livia",
      "uls": 33,
      "agenzia": "Urbino",
      "gest": 28,
      "prod": 28,
      "contraente": "Mazzoli Silvano"
    },
    {
      "id": 3,
      "nome": "La torre Livia",
      "uls": 33,
      "agenzia": "Urbino",
      "gest": 28,
      "prod": 28,
      "contraente": "Mazzoli Silvano"
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

}
