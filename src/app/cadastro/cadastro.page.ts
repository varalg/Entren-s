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

  constructor(private fb: FormBuilder, private router: Router) {
    this.cadastroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      confirmarSenha: ['', Validators.required]
    }, { validator: this.confirmarSenhas });
  }

  // 🔒 Validação de senha dentro do grupo
  confirmarSenhas(group: FormGroup) {
    const senha = group.get('senha')?.value;
    const confirmar = group.get('confirmarSenha')?.value;
    return senha === confirmar ? null : { senhasDiferentes: true };
  }

  cadastrar() {
    if (this.cadastroForm.invalid) {
      this.mensagem = 'Verifique os campos e tente novamente.';
      this.mensagemCor = 'red';
      this.cadastroForm.markAllAsTouched();
      return;
    }

    const { email, senha } = this.cadastroForm.value;

    // 🔜 Aqui futuramente você coloca o Firebase:
    // this.authService.registrar(email, senha).then(...).catch(...);

    this.mensagem = 'Cadastro realizado com sucesso!';
    this.mensagemCor = 'green';
    this.cadastroForm.reset();

    setTimeout(() => this.router.navigate(['/login']), 1200);
  }
}
