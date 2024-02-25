import { AbstractControl, ValidatorFn } from '@angular/forms';

export function symbolValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;
    if (!/[\W_]/.test(value)) {
      return { symbolRequired: true };
    }
    return null;
  };
}
