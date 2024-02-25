import { AbstractControl, ValidatorFn } from '@angular/forms';

export function fullNameValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value ? control.value.trim() : ''; // Verificando se o valor é nulo antes de usar trim
    const spaceIndex = value.indexOf(' ');
    
    if (spaceIndex === -1) {
      return { 'fullNameRequired': true };
    }

    const firstName = value.substring(0, spaceIndex).trim();
    const lastName = value.substring(spaceIndex + 1).trim();
    
    if (firstName === '' || lastName === '') {
      return { 'fullNameRequired': true };
    }
      
    return null;
  };
}

