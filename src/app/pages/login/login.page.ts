import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonInput, IonLabel, IonFooter } from '@ionic/angular/standalone';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonItem,
    IonContent,
    IonInput,
    CommonModule,
    IonTitle,
    IonHeader,
    IonFooter,
    FormsModule,
    IonToolbar,
    ReactiveFormsModule
  ]
})
export class LoginPage {
  loginForm: FormGroup;
  mensagem: string = '';
  mensagemCor: string = '';

  usuarioValido = {
    email: 'teste@exemplo.com',
    senha: '123456',
    nome: ''
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
      this.mensagem = `Bem-vindo ${this.usuarioValido.nome}!`;
      this.mensagemCor = 'green';
      this.loginForm.reset();
    } else {
      this.mensagem = 'E-mail ou senha incorretos!';
      this.mensagemCor = 'red';
    }
  }
}
