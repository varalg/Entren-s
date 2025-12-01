import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { HomenagemService } from 'src/app/services/homenagem.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-listar-homenagem',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './listar-homenagem.page.html',
  styleUrls: ['./listar-homenagem.page.scss']
})
export class ListarHomenagensPage {
  homenagens: any[] = [];

  constructor(
    private router: Router,
    private homenagemService: HomenagemService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.carregarHomenagens();
  }

  // Carrega as homenagens do usuário
  async carregarHomenagens() {
    this.homenagens = await this.homenagemService.listarMinhasHomenagens();
  }

  // Navega para a página de escolher homenagem (com menu)
  criarNova() {
    this.router.navigate(['/menu-layout/escolher-homenagem']);
  }

  // Visualizar detalhes da homenagem (prévia)
  verDetalhes(h: any) {
    this.router.navigate(['/menu-layout/previa-card', h.id]);
  }

  // Tocar áudio da homenagem
  tocar(h: any) {
    if (h.audioUrl) {
      const audio = new Audio(h.audioUrl);
      audio.play();
    }
  }

  // Logout do usuário
  logout() {
    this.auth.logout();
    this.router.navigate(['/login'], { replaceUrl: true });
  }
}
