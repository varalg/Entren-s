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
  IonFooter,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol // Adicionado para suportar o layout de grid
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
    IonLabel,
    IonGrid, 
    IonRow,
    IonCol,
  ]
})
export class LoginPage {
  mostrarSenha: boolean = false;
  loginForm: FormGroup;
  mensagem: string = '';
  mensagemCor: string = '';

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
    if (this.loginForm.invalid) {
      this.mensagem = 'Preencha todos os campos corretamente!';
      this.mensagemCor = 'red';
      return;
    }
    
    const { email, senha } = this.loginForm.value;

    if (email === this.usuarioValido.email && senha === this.usuarioValido.senha) {
      this.mensagem = `Bem-vindo ${this.usuarioValido.nome || email}!`;
      this.mensagemCor = 'green';
    }
     else {
      this.mensagem = 'E-mail ou senha incorretos!';
      this.mensagemCor = 'red';
    }
  }

  alternarExibicaoSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

}
