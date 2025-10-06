import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonInput, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-homenagens',
  templateUrl: './homenagens.page.html',
  styleUrls: ['./homenagens.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonInput,
  ]
})
export class HomenagensPage {
  homenagens = [
    {
      titulo: 'Homenagem para Maria',
      texto: 'Obrigada por todos os momentos especiais!',
      imagem: 'assets/homenagem1.jpg'
    },
    {
      titulo: 'Homenagem para João',
      texto: 'Você sempre será lembrado com carinho.',
      imagem: 'assets/homenagem2.jpg'
    },
    {
      titulo: 'Homenagem para Ana',
      texto: 'Sua amizade é inesquecível.',
      imagem: 'assets/homenagem3.jpg'
    }
  ];
}
