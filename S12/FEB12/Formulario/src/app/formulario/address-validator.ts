import { AbstractControl, ValidatorFn } from '@angular/forms';

export function addressValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;
    const isValid: boolean = /^[a-zA-Z0-9\s\.,-]+$/.test(value);
    return isValid ? null : { 'invalidAddress': true };
  };
}
