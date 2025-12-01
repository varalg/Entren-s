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
    IonMenuButton
  ],
  templateUrl: './homenagens.page.html',
  styleUrls: ['./homenagens.page.scss']
})
export class HomenagensPage {
  termoBusca: string = '';

  homenagens = [
    { titulo: 'Dia das Mães', texto: 'Obrigada por todos os momentos especiais!', imagem: 'assets/homenagem1.jpg' },
    { titulo: 'Dia dos Namorados', texto: 'Você sempre será lembrado com carinho.', imagem: 'assets/homenagem2.jpg' },
    { titulo: 'Dia do Professor', texto: 'Obrigada por tudo.', imagem: 'assets/homenagem3.jpg' }
  ];

  homenagensFiltradas() {
    if (!this.termoBusca) return this.homenagens;
    return this.homenagens.filter(h => h.titulo.toLowerCase().includes(this.termoBusca.toLowerCase()));
  }

  buscar() {
    // Implementar lógica de busca se quiser
  }

  verHomenagem(homenagem: any) {
    alert(`Visualizando: ${homenagem.titulo}`);
  }
}
