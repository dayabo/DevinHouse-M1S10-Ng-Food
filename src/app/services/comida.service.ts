import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComidas } from '../models/comida.model';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  constructor(private http: HttpClient) { }

  devolverComidas():Observable<IComidas[]>
{
   return this.http
   .get<IComidas[]>("http://localhost:3000/comidas");
      
}

}