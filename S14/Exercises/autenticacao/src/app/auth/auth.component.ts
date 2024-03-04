import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AutenticaService } from '../autentica.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  modoLogin = true;
  estaCarregando = false;
  erro: string = '';
  temErro:boolean = false;

  constructor(private authService: AutenticaService,
              private router:Router) { }

  onTrocarModo() {
    this.modoLogin = !this.modoLogin;

  }

  onSubmit(formulario: NgForm){
    if(!formulario.valid){
      return;
    }
    const email = formulario.value.email;
    const password = formulario.value.password;

    this.estaCarregando = true;

    if(this.modoLogin){
      this.authService.loginUser(email, password).subscribe(
        responseData => {
          console.log(responseData);
          this.estaCarregando = false;
          this.temErro = false;
          this.router.navigate(['/pecas']);
        }
      );
    } else {
      this.authService.signupUser(email, password).subscribe(
        responseData => {
          console.log(responseData);
          this.estaCarregando = false;
          this.temErro = false;
          this.router.navigate(['/pecas']);
        },
        error => {
          console.log(error);
          switch(error.error.error.message){
            case 'EMAIL_EXISTS':
              this.erro = 'O e-mail já está em uso.';
              break;
            default:
              this.erro = 'Ocorreu um erro ao cadastrar o usuário.'
              break;
          
          }
          this.temErro = true;
          this.erro = 'Ocorreu um erro ao cadastrar o usuário.'
          this.estaCarregando = false;
        }
      );
    }

    formulario.reset();

  }

}
