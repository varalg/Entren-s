import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonInput,
  IonFooter,
  IonButtons,
  IonMenuButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-homenagens',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonInput,
    IonFooter,
    IonButtons,
    IonMenuButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle
  ],
  templateUrl: './homenagens.page.html',
  styleUrls: ['./homenagens.page.scss']
})
export class HomenagensPage {

  termoBusca = '';

  homenagens = [
    {
      titulo: 'Dia das Mães',
      texto: 'Obrigada por todos os momentos especiais!',
      imagem: 'assets/homenagem1.jpg'
    },
    {
      titulo: 'Dia dos Namorados',
      texto: 'Você sempre será lembrado com carinho.',
      imagem: 'assets/homenagem2.jpg'
    },
    {
      titulo: 'Dia do Professor',
      texto: 'Obrigada por tudo.',
      imagem: 'assets/homenagem3.jpg'
    }
  ];

  homenagensFiltradas() {
    if (!this.termoBusca) return this.homenagens;
    return this.homenagens.filter(h =>
      h.titulo.toLowerCase().includes(this.termoBusca.toLowerCase())
    );
  }

  buscar() {}

  async baixarImagem(homenagem: any) {
    try {
      const resposta = await fetch(homenagem.imagem);
      const blob = await resposta.blob();

      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.download = homenagem.titulo + '.jpg';
      link.click();

      URL.revokeObjectURL(url);

    } catch (err) {
      console.error('Erro ao baixar imagem:', err);
      alert('Não foi possível baixar a imagem.');
    }
  }
}