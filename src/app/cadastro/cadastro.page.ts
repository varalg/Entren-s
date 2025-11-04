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
  mensagem: string = '';
  mensagemCor: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.cadastroForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required],
      confirmarSenha: ['', Validators.required]
    });
  }

  cadastrar() {
    const { email, senha, confirmarSenha } = this.cadastroForm.value;

    if (!email || !senha || !confirmarSenha) {
      this.mensagem = 'Preencha todos os campos!';
      this.mensagemCor = 'red';
      return;
    }

    if (senha !== confirmarSenha) {
      this.mensagem = 'As senhas não conferem!';
      this.mensagemCor = 'red';
      return;
    }

    this.mensagem = 'Cadastro realizado com sucesso!';
    this.mensagemCor = 'green';
    this.cadastroForm.reset();

    setTimeout(() => this.router.navigate(['/login']), 1000);
  }
}
