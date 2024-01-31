// number.service.ts
import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NumberService {

  getNumbers(): Observable<number> {
    return interval(1000).pipe(take(100));
  }
  
}

