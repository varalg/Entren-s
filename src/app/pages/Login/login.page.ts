import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonButton,
  IonInput,
  IonFooter, IonRouterLink } from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonRouterLink, 
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonButton,
    IonItem,
    IonContent,
    IonInput,
    IonTitle,
    IonFooter,
    IonHeader,
    IonToolbar,
    IonRouterLink
  ],
})
export class LoginPage {
  loginForm: FormGroup;
  mensagem = '';
  mensagemCor = '';

  usuarioValido = {
    email: 'teste@exemplo.com',
    senha: '123456',
    nome: 'Usuário',
  };

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
    });
  }

  login() {
    const { email, senha } = this.loginForm.value;

    if (!email || !senha) {
      this.mensagem = 'Preencha todos os campos!';
      this.mensagemCor = 'red';
      return;
    }

    if (email === this.usuarioValido.email && senha === this.usuarioValido.senha) {
      this.mensagem = `Bem-vindo(a), ${this.usuarioValido.nome}!`;
      this.mensagemCor = 'green';
      setTimeout(() => this.router.navigate(['/homenagens']), 1000);
      this.loginForm.reset();
    } else {
      this.mensagem = 'E-mail ou senha incorretos!';
      this.mensagemCor = 'red';
    }
  }
}
