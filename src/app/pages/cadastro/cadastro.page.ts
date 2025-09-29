import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import {  IonContent, IonHeader, IonToolbar, IonTitle, IonItem, IonInput, IonButton, IonFooter, } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonFooter, ReactiveFormsModule, RouterModule,  IonContent, IonHeader, IonToolbar, IonTitle, IonItem, IonInput, IonButton, IonToolbar,CommonModule]
})
export class CadastroPage implements OnInit {

  cadastroForm!: FormGroup; // <- aqui declaramos o formulário

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    // Inicializamos o formulário com os campos e validações
    this.cadastroForm = this.fb.group(
      {
        nome: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        telefone: ['', Validators.required],
        senha: ['', [Validators.required, Validators.minLength(6)]],
        confirmaSenha: ['', Validators.required]
      },
      { validators: this.passwordsMatchValidator } // validação de senhas iguais
    );
  }

  // Validação customizada para verificar se senha e confirmaSenha são iguais
  private passwordsMatchValidator(group: FormGroup | any) {
    const pw = group.get('senha')?.value;
    const confirm = group.get('confirmaSenha')?.value;
    return pw === confirm ? null : { notMatching: true };
  }

  onSubmit() {
    if (this.cadastroForm.invalid) {
      this.cadastroForm.markAllAsTouched();
      return;
    }

    console.log('Cadastro OK:', this.cadastroForm.value);
    this.router.navigate(['/login']); // navega para login após cadastro
  }
}
