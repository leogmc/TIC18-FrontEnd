import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  formData: BehaviorSubject<any> = new BehaviorSubject<any>({});
  formStatus: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  updateFormData(data: any) {
    this.formData.next(data);
  }

  updateFormStatus(status: string) {
    this.formStatus.next(status);
  }
}
