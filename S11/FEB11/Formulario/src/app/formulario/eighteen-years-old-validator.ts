import { AbstractControl, ValidatorFn } from '@angular/forms';

export function eighteenYearsOldValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const value: string = control.value;

    // Verifica se o valor é uma data válida (DD/MM/AAAA)
    if (!isValidDate(value)) {
      return { 'invalidDate': true };
    }

    // Converte a string de data para um objeto Date
    const birthDate: Date = parseDate(value);

    // Calcula a idade com base na data de nascimento
    const age: number = calculateAge(birthDate);

    // Verifica se a idade é maior ou igual a 18 anos
    if (age < 18) {
      return { 'underage': true };
    }

    return null;
  };
}

// Função auxiliar para verificar se a data é válida
function isValidDate(dateString: string): boolean {
  const pattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  if (!pattern.test(dateString)) return false;

  const dateParts = dateString.split('/');
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const year = parseInt(dateParts[2], 10);
  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

// Função auxiliar para converter a string de data para um objeto Date
function parseDate(dateString: string): Date {
  const dateParts = dateString.split('/');
  const day = parseInt(dateParts[0], 10);
  const month = parseInt(dateParts[1], 10);
  const year = parseInt(dateParts[2], 10);
  return new Date(year, month - 1, day);
}

// Função auxiliar para calcular a idade com base na data de nascimento
function calculateAge(birthDate: Date): number {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
