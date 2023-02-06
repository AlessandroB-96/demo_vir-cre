import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { of } from 'rxjs'

import * as sinistri from 'src/assets/sinistri.json';

@Injectable({
 providedIn: 'root'
})

export class SinistroService {
 data = sinistri

 constructor (private http: HttpClient) {}


}