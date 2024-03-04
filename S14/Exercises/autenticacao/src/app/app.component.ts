import { Component, OnInit } from '@angular/core';
import { AutenticaService } from './autentica.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authService: AutenticaService) { }
  
  ngOnInit(): void {
    this.authService.autoLogin();
  }
  title = 'autenticacao';
}
