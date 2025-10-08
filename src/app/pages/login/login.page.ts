import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';


import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonInput,
  IonIcon,
  IonButton,
  IonFooter
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [

    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonItem,
    IonInput,
    IonIcon,
    IonButton,
    IonFooter,

  ]
})
export class LoginPage {
  loginForm: FormGroup;
  mensagem: string = '';
  mensagemCor: string = '';
  showPassword: boolean = false;

  usuarioValido = {
    email: 'teste@exemplo.com',
    senha: '123456',
    nome: 'Usuário Teste'
  };

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
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
      this.mensagem = `Bem-vindo ${this.usuarioValido.nome || email}!`;
      this.mensagemCor = 'green';
      this.loginForm.reset();
    } else {
      this.mensagem = 'E-mail ou senha incorretos!';
      this.mensagemCor = 'red';
    }
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.loginForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  senha: ['', Validators.required]
});

  }
}


