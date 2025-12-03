import { Component, inject, OnInit } from '@angular/core';
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
  IonIcon,
  ToastController
} from '@ionic/angular/standalone';
import { eyeOutline, eyeOffOutline } from 'ionicons/icons';
import { AuthService } from 'src/app/services/auth.service';

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
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  mostrarSenha: boolean = false;
  eyeIcon = eyeOutline;
  eyeOffIcon = eyeOffOutline;
  carregando = false;

  private authService = inject(AuthService);
  private router = inject(Router);
  private toastCtrl = inject(ToastController);
  private fb = inject(FormBuilder);

  constructor() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {
    // Redireciona automaticamente se o usuário já estiver logado
    if (this.authService.uid) {
      this.router.navigate(['/menu-layout/listar-homenagem'], { replaceUrl: true });
    }
  }

  async login() {
    if (this.loginForm.invalid) {
      this.showToast('Preencha os campos corretamente.', 'danger');
      this.loginForm.markAllAsTouched();
      return;
    }

    const { email, senha } = this.loginForm.value;
    this.carregando = true;

    try {
      await this.authService.login(email, senha);
      
// Espera o próximo ciclo do Angular
setTimeout(() => {
  this.router.navigate(['/menu-layout/listar-homenagem'], { replaceUrl: true });
  this.showToast(`Bem-vindo(a), ${email}!`, 'success');
}, 50);


      this.loginForm.reset();
    } catch (error: any) {
      let msg = 'Erro ao fazer login.';
      switch (error.code) {
        case 'auth/user-not-found':
          msg = 'Usuário não encontrado.';
          break;
        case 'auth/wrong-password':
          msg = 'Senha incorreta.';
          break;
        case 'auth/invalid-email':
          msg = 'E-mail inválido.';
          break;
      }
      this.showToast(msg, 'danger');
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
      this.showToast('Digite seu e-mail para redefinir a senha.', 'danger');
      return;
    }

    try {
      await this.authService.resetPassword(email);
      this.showToast('E-mail de redefinição enviado com sucesso!', 'success');
    } catch (error: any) {
      this.showToast('Erro ao enviar e-mail: ' + error.message, 'danger');
      console.error(error);
    }
  }

  private showToast(message: string, color: 'success' | 'danger') {
    // Cria e apresenta o Toast sem await
    this.toastCtrl.create({
      message,
      duration: 1500,
      color,
      position: 'top'
    }).then(toast => toast.present());
  }
}
