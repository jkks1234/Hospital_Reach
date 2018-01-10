import { Injectable } from '@angular/core'
import {Http , Headers , Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

import {hospital} from '../components/hospitals/model';

@Injectable()
export class AuthService {
		
  constructor(private http:Http) { }

  getData():Observable<hospital[]> {
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.get('http://localhost:3203/hospital/showall',{headers:headers})
            .map(res => res.json())
            
    }
    getData1(spe:string):Observable<hospital[]> {
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.get('http://localhost:3203/hospital/showone/'+spe,{headers:headers})
            .map(res => res.json())
            
    }
 
}
