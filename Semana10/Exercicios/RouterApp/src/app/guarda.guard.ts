import { CanActivateFn, Router } from '@angular/router';
import {AutenticacaoService} from './autenticacao.service';
import {inject} from '@angular/core';

export const guardaGuard: CanActivateFn = (route, state) => {
  const servicoAutenticacao = inject(AutenticacaoService);
  const router = inject(Router);

  if(servicoAutenticacao.isAutenticado()){
    console.log('autenticado');
    return true;
  } else {
    console.log('Não autenticado');
    router.navigate(['/login']);
    return false;
  }


};
