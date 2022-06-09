import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IBebidas } from '../models/bebida.model';

@Injectable({
  providedIn: 'root'
})
export class BebidaService {
 

  constructor(private http: HttpClient) { }

  devolverBebidas():Observable<IBebidas[]>
{
   return this.http
   .get<IBebidas[]>("http://localhost:3000/bebidas");
      
}

}
