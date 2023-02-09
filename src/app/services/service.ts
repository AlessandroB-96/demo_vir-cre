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

    private messageSource = new BehaviorSubject<string>('0');
    currentMessage = this.messageSource.asObservable();

    constructor (private http: HttpClient) {}

    changeMessage(id: string) {
        this.messageSource.next(id);
    }

}