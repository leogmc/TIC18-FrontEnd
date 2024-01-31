// number.component.ts
import { Component, OnInit } from '@angular/core';
import { NumberService } from './number.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-number',
  template: `
    <div *ngFor="let number of numbers">{{ number }}</div>
  `,
})
export class NumberComponent implements OnInit {

  numbers: number[] = [];

  private subscription!: Subscription;

  constructor(private numberService: NumberService) {}

  ngOnInit() {
    this.subscription = this.numberService.getNumbers().subscribe(
      (number) => {
        this.numbers.push(number);
      },
      (error) => {
        console.error('Erro:', error);
      },
      () => {
        console.log('Concluído');
      }
    );
  }

    ngOnDestroy() {
    // Certifique-se de cancelar a assinatura ao destruir o componente para evitar vazamento de memória
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
