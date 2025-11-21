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
  IonFooter
} from '@ionic/angular/standalone';

import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
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
    IonHeader,
    IonToolbar,
    IonFooter
  ],
})
export class CadastroPage {
  cadastroForm: FormGroup;
  mensagem = '';
  mensagemCor = '';

  // 🔹 Injeta o Auth do AngularFire
  private auth = inject(Auth);

  constructor(private fb: FormBuilder, private router: Router) {
    this.cadastroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', Validators.required]
    }, { validator: this.confirmarSenhas });
  }

  confirmarSenhas(group: FormGroup) {
    const senha = group.get('senha')?.value;
    const confirmar = group.get('confirmarSenha')?.value;
    return senha === confirmar ? null : { senhasDiferentes: true };
  }

  cadastrar(): void {
    if (this.cadastroForm.invalid) {
      this.mensagem = 'Verifique os campos e tente novamente.';
      this.mensagemCor = 'red';
      this.cadastroForm.markAllAsTouched();
      return;
    }

    const { email, senha } = this.cadastroForm.value;

    createUserWithEmailAndPassword(this.auth, email, senha)
      .then(() => {
        this.mensagem = 'Cadastro realizado com sucesso!';
        this.mensagemCor = 'green';
        this.cadastroForm.reset();

        setTimeout(() => this.router.navigate(['/login']), 1200);
      })
      .catch((error: any) => {
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.mensagem = 'Este e-mail já está em uso.';
            break;
          case 'auth/invalid-email':
            this.mensagem = 'E-mail inválido.';
            break;
          case 'auth/weak-password':
            this.mensagem = 'Senha muito fraca (mínimo 6 caracteres).';
            break;
          default:
            this.mensagem = 'Erro ao cadastrar: ' + error.message;
        }
        this.mensagemCor = 'red';
      });
  }
}
