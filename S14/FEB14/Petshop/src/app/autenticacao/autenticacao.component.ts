import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticaService } from '../autentica.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-autenticacao',
  templateUrl: './autenticacao.component.html',
  styleUrl: './autenticacao.component.css'
})
export class AutenticacaoComponent {


  modoLogin = true;
  estaCarregando = false;
  erro: string = '';
  temErro:boolean = false;

  constructor(private authService: AutenticaService,
              private router:Router) { }

             

  onTrocarModo() {
    this.modoLogin = !this.modoLogin;

  }

  onSubmit(formulario: NgForm) {
    console.log("OnSubmit iniciado");
    
    if (!formulario.valid) {
      console.log("Formulário inválido.");
      return;
    }
  
    const email = formulario.value.inputEmail;
    const password = formulario.value.inputPassword;
  
    this.estaCarregando = true;

    let authObservable: Observable<any>;

  
    if (this.modoLogin) {
      authObservable = this.authService.loginUser(email, password);
    } else {
      authObservable = this.authService.signupUser(email, password);
    }
  
    authObservable.subscribe({
      next: responseData => {
        console.log(responseData);
        this.estaCarregando = false;
        this.temErro = false;
        this.router.navigate(['/cadastrarAtendimento']);
        //Altera o estado de autenticação
        this.authService.setAutenticado(true);
      },
      error: error => {
        console.log(error);
        this.handleAuthError(error);
      }
    });
  
    formulario.reset();
  }
  
  private handleAuthError(error: any) {
    if (error.error && error.error.error && error.error.error.message) {
      switch (error.error.error.message) {
        case 'EMAIL_EXISTS':
          this.erro = 'O e-mail já está em uso.';
          break;
        case 'INVALID_LOGIN_CREDENTIALS':
          this.erro = 'A senha inserida é inválida.';
          break;
        default:
          this.erro = 'Ocorreu um erro ao cadastrar o usuário.';
          break;
      }
      this.temErro = true;
      this.estaCarregando = false;
    }
  }
  


}
