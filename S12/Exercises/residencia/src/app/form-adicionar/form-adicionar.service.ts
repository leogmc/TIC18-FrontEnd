import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormAdicionarService {

  private informacoesSubject = new BehaviorSubject<any[]>([]);
  informacoes$: Observable<any[]> = this.informacoesSubject.asObservable();

  adicionarInformacoes(informacoes: any) {
    const informacoesAtuais = this.informacoesSubject.value;
    this.informacoesSubject.next([...informacoesAtuais, informacoes]);
  }
  
}
