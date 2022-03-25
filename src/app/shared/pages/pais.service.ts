import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  //url base
  private apiURl = 'https://restcountries.com/v3.1';

  constructor(private http:HttpClient) { }

  buscarPais(valor:string):Observable<any>{
    const url = `${this.apiURl}/name/${valor}`;
    return this.http.get(url);
  }
}
