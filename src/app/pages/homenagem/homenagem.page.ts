import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonToolbar, IonTitle, IonButton, IonInput, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-homenagem',
  templateUrl: './homenagem.page.html',
  styleUrls: ['./homenagem.page.scss'],
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
    IonFooter
  ]
})
export class HomenagemPage {
  termoBusca: string = '';

  homenagem = [
    { titulo: 'Dia das Mães', texto: 'Obrigada por todos os momentos especiais!', imagem: 'assets/homenagem1.jpg' },
    { titulo: 'Dia dos Namorados', texto: 'Você sempre será lembrado com carinho.', imagem: 'assets/homenagem2.jpg' },
    { titulo: 'Dia do Professor', texto: 'Obrigada por tudo.', imagem: 'assets/homenagem3.jpg' }
  ];

  // Filtra homenagem pelo termo de busca
  homenagemFiltradas() {
    if (!this.termoBusca) return this.homenagem;
    return this.homenagem.filter(h => h.titulo.toLowerCase().includes(this.termoBusca.toLowerCase()));
  }

  buscar() {
    // Aqui você pode adicionar lógica de busca se quiser
  }

  verHomenagem(homenagem: any) {
    alert(`Visualizando: ${homenagem.titulo}`);
  }
}
