import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs'
import { of } from 'rxjs'

import * as sinistri from 'src/assets/sinistri.json';

@Injectable({
 providedIn: 'root'
})

export class SinistroService {
 data = sinistri

 serviceId : number = 0;

 private behaviourIdService = new BehaviorSubject(this.serviceId);
currentId = this.behaviourIdService.asObservable();


 constructor (private http: HttpClient) {}



 changeId(id: number) {
    this.behaviourIdService.next(id);
    }

}