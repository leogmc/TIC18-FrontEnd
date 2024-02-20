import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export function brazilianPhoneValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;
    const isValid: boolean = /^\(\d{2}\) \d{4,5}-\d{4}$/.test(value) || /^\d{2} \d{4,5}-\d{4}$/.test(value);
    return isValid ? null : { 'invalidBrazilianPhone': true };
  };
}
