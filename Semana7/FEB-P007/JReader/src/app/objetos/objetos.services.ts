//Serviço que carrega o arquivo 'veiculos.json'

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {
  constructor(private http: HttpClient) {}

  getVeiculos(): Observable<any[]> {
    return this.http.get<any[]>('/assets/veiculos.json');
  }
}
