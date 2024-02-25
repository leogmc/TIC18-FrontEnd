import { AbstractControl, ValidatorFn } from '@angular/forms';

export function uppercaseValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;
    if (!/[A-Z]/.test(value)) {
      return { 'uppercaseRequired': true };
    }
    return null;
  };
}
