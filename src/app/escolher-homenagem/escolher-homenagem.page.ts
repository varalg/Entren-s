import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escolher-homenagem',
  templateUrl: './escolher-homenagem.page.html',
  styleUrls: ['./escolher-homenagem.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class EscolherHomenagemPage {

  constructor(private router: Router) {}

  // Navega para página de homenagens prontas
  homenagens() {
    this.router.navigate(['/homenagens']); // ajuste para a rota correta
  }

  // Navega para página de customização (prévia do card)
  previaCard() {
    this.router.navigate(['/previa-card']); // ajuste para a rota correta
  }
}
