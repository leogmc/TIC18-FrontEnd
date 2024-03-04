import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Peca } from './peca.model';
import { exhaustMap, map, take } from 'rxjs';
import { AutenticaService } from './autentica.service';

@Injectable({
  providedIn: 'root'
})

export class BancoService {

  apiURL = 'https://aula14-b112c-default-rtdb.firebaseio.com/pecas.json';

  constructor(private http: HttpClient, private autenticaService: AutenticaService) { }

  adicionarPeca(peca: {   nome: string,
                          fabricante: string, 
                          marca: string,
                          modelo: string,
                          preco: number,
                          garantia: string,
                          observacoes: string
                      }
                ){
    return this.http.post(this.apiURL, peca).subscribe(
      (response) => {
        console.log(response);
      }
    );
    }

    getPecas() {
      //generics da interface Ticket
      //vem do firebase nesse formato
      //ahsduiashuhui:Object
      //dasdasdasdasd:Object

      return this.http.get<{[key:string]: Peca}>('https://aula14-b112c-default-rtdb.firebaseio.com/pecas.json').pipe(
        map( (responseData) => {
          const listaArray:Peca[] = [];
          for (const key in responseData) {
              if ((responseData).hasOwnProperty(key)){
                listaArray.push({...(responseData as any)[key], id: key});
              }
          }
          return listaArray;
        }
        ),
      );
      }
  
  
}

/*
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Ticket } from '../ticket.model';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataBaseService implements OnInit {

  loadedTickets: Ticket[] = [];

  constructor(private http: HttpClient) { }



  ngOnInit(): void {

  } 

  addTicket(ticketData: {  NomePassageiro: string, 
                                numeroVoo: string, 
                                dataPartida: string, 
                                dataChegada: string, 
                                aeroportoPartida: string, 
                                aeroportoChegada: string }) {

    this.http.post(
      'https://aula13-3a92f-default-rtdb.firebaseio.com/posts.json',
       ticketData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  addMensagem(msgData: {  nome: string, 
                          email: string, 
                          mensagem: string 
                        }) {

        this.http.post('https://aula13-3a92f-default-rtdb.firebaseio.com/mensagens.json',msgData)
        .subscribe(responseData => {
            console.log(responseData);
        });
  }

  // getTickets() {
  //   //generics da interface Ticket
  //   //vem do firebase nesse formato
  //   //ahsduiashuhui:Object
  //   //dasdasdasdasd:Object
  //   this.http.get< {[key:string]: Ticket}>('https://aula13-3a92f-default-rtdb.firebaseio.com/posts.json')
  //   .pipe(
  //     map( (responseData) => {
  //       const postArray:Ticket[] = [];
  //       for (const key in responseData) {
  //           if ((responseData).hasOwnProperty(key)){
  //             postArray.push({...(responseData as any)[key], id: key});
  //           }
  //       }
  //       return postArray;
  //     }
  //     )
  //   )
  //   .subscribe(responseData => {
  //     this.loadedTickets = responseData;
  //   });
  // }

  getTickets() {
    //generics da interface Ticket
    //vem do firebase nesse formato
    //ahsduiashuhui:Object
    //dasdasdasdasd:Object
    return this.http.get< {[key:string]: Ticket}>('https://aula13-3a92f-default-rtdb.firebaseio.com/posts.json',
      {
        params: new HttpParams().set('print', 'pretty')
      }
    )
    .pipe(
      map( (responseData) => {
        const postArray:Ticket[] = [];
        for (const key in responseData) {
            if ((responseData).hasOwnProperty(key)){
              postArray.push({...(responseData as any)[key], id: key});
            }
        }
        return postArray;
      }
      )
    );
  }

  apagarTodosTickets() {
    return this.http.delete('https://aula13-3a92f-default-rtdb.firebaseio.com/posts.json');
  }

  getTicket2() {
    return this.http.get('https://aula13-3a92f-default-rtdb.firebaseio.com/posts.json',
    {
      params: new HttpParams().set('print', 'pretty')
    }
  );
  }

  getTicket(id:string) {
    return this.http.get<Ticket>(`https://aula13-3a92f-default-rtdb.firebaseio.com/posts/${id}.json`);
  }

  editarTicket(id:string, ticketData: {   NomePassageiro: string, 
                                          numeroVoo: string, 
                                          dataPartida: string, 
                                          dataChegada: string, 
                                          aeroportoPartida: string, 
                                          aeroportoChegada: string 
                                      }
                ) {
    return this.http.put(`https://aula13-3a92f-default-rtdb.firebaseio.com/posts/${id}.json`, ticketData, {observe: 'response'});
  }

}

*/
