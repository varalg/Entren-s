import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonButton,
  IonInput,
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
    IonButton,
    IonItem,
    IonContent,
    IonInput,
    IonTitle,
    IonFooter,
    IonHeader,
    IonToolbar,
  ],
})
export class LoginPage {
  loginForm: FormGroup;
  mensagem = '';
  mensagemCor = '';
  carregando = false;

  // ⚙️ Apenas para testes locais — depois o Firebase substituirá isso
  usuarioValido = {
    email: 'teste@exemplo.com',
    senha: '123456',
    nome: 'Usuário',
  };

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async login() {
    const { email, senha } = this.loginForm.value;

    if (this.loginForm.invalid) {
      this.mensagem = 'Preencha os campos corretamente.';
      this.mensagemCor = 'red';
      this.loginForm.markAllAsTouched();
      return;
    }

    this.carregando = true;

    try {
      // 🔜 Aqui futuramente entrará:
      // await this.authService.login(email, senha);

      if (email === this.usuarioValido.email && senha === this.usuarioValido.senha) {
        this.mensagem = `Bem-vindo(a), ${this.usuarioValido.nome}!`;
        this.mensagemCor = 'green';
        setTimeout(() => this.router.navigate(['/escolher-homenagem']), 1200);
        this.loginForm.reset();
      } else {
        this.mensagem = 'E-mail ou senha incorretos!';
        this.mensagemCor = 'red';
      }

    } catch (error) {
      this.mensagem = 'Erro ao fazer login. Tente novamente.';
      this.mensagemCor = 'red';
      console.error(error);

    } finally {
      this.carregando = false;
    }
  }
}
