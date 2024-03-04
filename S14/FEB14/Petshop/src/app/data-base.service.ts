import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Atendimento } from '../app/atendimento.model';
import {map} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataBaseService implements OnInit {
  loadedAtendimentos: Atendimento[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  addAtendimento(atendimentoData: {
    nomeCliente: string;
    email: string;
    telefone: string;
    nomeAnimal: string;
    especieAnimal: string;
    racaAnimal: string;
    descricaoAtendimento: string;
  }) {
    this.http
      .post(
        'https://residencia-2c893-default-rtdb.firebaseio.com/atendimentos.json',
        atendimentoData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  getAtendimentos() {
    //generics da interface Atendimento
    //vem do firebase nesse formato
    //ahsduiashuhui:Object
    //dasdasdasdasd:Object
    return this.http
      .get<{ [key: string]: Atendimento }>(
        'https://residencia-2c893-default-rtdb.firebaseio.com/atendimentos.json',
        {
          params: new HttpParams().set('print', 'pretty'),
        }
      )
      .pipe(
        map((responseData) => {
          const postArray: Atendimento[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...(responseData as any)[key], id: key });
            }
          }
          return postArray;
        })
      );
  }

  deleteAllAtendimentos() {
    return this.http.delete(
      'https://residencia-2c893-default-rtdb.firebaseio.com/atendimentos.json'
    );
  }

  getAtendimento(id: string) {
    return this.http.get<Atendimento>(
      `https://residencia-2c893-default-rtdb.firebaseio.com/atendimentos/${id}.json`
    );
  }

  editarAtendimento(
    id: string,
    atendimentoData: {
      nomeCliente: string;
      email: string;
      telefone: string;
      nomeAnimal: string;
      especie: string;
      raca: string;
      descricao: string;
    }
  ) {
    return this.http.put(
      `https://residencia-2c893-default-rtdb.firebaseio.com/atendimentos/${id}.json`,
      atendimentoData,
      { observe: 'response' }
    );
  }
}
