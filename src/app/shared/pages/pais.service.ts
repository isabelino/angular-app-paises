import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Paises } from './interfaces/paises';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  //url base
  private apiURl = 'https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { }

  buscarPais(valor:string):Observable<Paises[]>{
    const url = `${this.apiURl}/name/${valor}`;
    return this.http.get<Paises[]>(url);
  }

  buscarRegion(valor:string):Observable<Paises[]>{
    const url = `${this.apiURl}/region/${valor}`;
    return this.http.get<Paises[]>(url);
  }

  buscarCapital(valor:string):Observable<Paises[]>{
    const url = `${this.apiURl}/capital/${valor}`;
    return this.http.get<Paises[]>(url);
  }

  verDetalle(id:number):Observable<Paises[]>{
    const url = `https://restcountries.com/v3.1/alpha/${id}`;
    return this.http.get<Paises[]>(url);
  }
}
