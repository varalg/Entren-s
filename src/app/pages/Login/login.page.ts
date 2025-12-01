import { Component, inject } from '@angular/core';
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
  IonFooter,
  IonIcon
} from '@ionic/angular/standalone';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';

import { Auth, signInWithEmailAndPassword, sendPasswordResetEmail } from '@angular/fire/auth';

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
    IonIcon
  ],
})
export class LoginPage {
  loginForm: FormGroup;
  mensagem = '';
  mensagemCor = '';
  carregando = false;

  // Ícones do olho
  mostrarSenha: boolean = false;
  eyeIcon = eyeOutline;
  eyeOffIcon = eyeOffOutline;

  private auth = inject(Auth);

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async login() {
    if (this.loginForm.invalid) {
      this.mensagem = 'Preencha os campos corretamente.';
      this.mensagemCor = 'red';
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, senha } = this.loginForm.value;
    this.carregando = true;

    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, senha);

      this.mensagem = `Bem-vindo(a), ${userCredential.user.email}!`;
      this.mensagemCor = 'green';
      this.loginForm.reset();

      setTimeout(() => {
        this.router.navigate(['/menu-layout/listar-homenagem']); 
      }, 1200);

    } catch (error: any) {
      switch (error.code) {
        case 'auth/user-not-found':
          this.mensagem = 'Usuário não encontrado.';
          break;
        case 'auth/wrong-password':
          this.mensagem = 'Senha incorreta.';
          break;
        case 'auth/invalid-email':
          this.mensagem = 'E-mail inválido.';
          break;
        default:
          this.mensagem = 'Erro ao fazer login: ' + error.message;
      }
      this.mensagemCor = 'red';
      console.error(error);

    } finally {
      this.carregando = false;
    }
  }

  toggleSenha() {
    this.mostrarSenha = !this.mostrarSenha;
  }

  irParaCadastro() {
    this.router.navigate(['/cadastro']);
  }

  async redefinirSenha() {
    const email = this.loginForm.get('email')?.value;
    if (!email) {
      this.mensagem = 'Digite seu e-mail para redefinir a senha.';
      this.mensagemCor = 'red';
      return;
    }

    try {
      await sendPasswordResetEmail(this.auth, email);
      this.mensagem = 'E-mail de redefinição enviado com sucesso!';
      this.mensagemCor = 'green';
    } catch (error: any) {
      this.mensagem = 'Erro ao enviar e-mail: ' + error.message;
      this.mensagemCor = 'red';
      console.error(error);
    }
  }
}
