import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFooter,
  IonIcon,
  IonButtons,
  IonMenuButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-escolher-homenagem',
  templateUrl: './escolher-homenagem.page.html',
  styleUrls: ['./escolher-homenagem.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    IonIcon,
    IonButtons,
    IonMenuButton,
  ],
})
export class EscolherHomenagemPage {
  constructor(private router: Router) {}

  // Navega para a página de homenagens prontas (Modelo Pronto)
  homenagens() {
    this.router.navigate(['/menu-layout/homenagens']);
  }

  // Navega para a página de customização (Prévia do Card)
  previaCard() {
    this.router.navigate(['/menu-layout/previa-card']);
  }
}
