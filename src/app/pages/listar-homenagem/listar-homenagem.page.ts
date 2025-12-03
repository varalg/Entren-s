import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HomenagemService, Homenagem } from 'src/app/services/homenagem.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-listar-homenagem',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './listar-homenagem.page.html',
  styleUrls: ['./listar-homenagem.page.scss']
})
export class ListarHomenagensPage {
  homenagens: (Homenagem & { spotifySafeUrl?: SafeResourceUrl })[] = [];

  constructor(
    private router: Router,
    private homenagemService: HomenagemService,
    private auth: AuthService,
    private sanitizer: DomSanitizer
  ) {}

  tocar(h: Homenagem & { audioUrl?: string }) {
  if (h.audioUrl) {
    const audio = new Audio(h.audioUrl);
    audio.play();
  }
}


  ngOnInit() {
    this.carregarHomenagens();
  }

 async carregarHomenagens() {
  try {
    const lista = await this.homenagemService.listarMinhasHomenagens();
    this.homenagens = lista.map(h => ({
      ...h,
      audioUrl: h.audioUrl || undefined, // garante que exista
      spotifySafeUrl: h.spotifyUrl
        ? this.sanitizer.bypassSecurityTrustResourceUrl(h.spotifyUrl)
        : undefined
    }));
  } catch (e) {
    console.error('Erro ao carregar homenagens', e);
    alert('Não foi possível carregar suas homenagens.');
  }
}

  criarNova() {
  this.router.navigate(['/menu-layout/planos']); // ou apenas '/planos' dependendo do seu layout
}

  verDetalhes(h: Homenagem) {
    this.router.navigate(['/menu-layout/previa-card', h.id]);
  }

  logout() {
    this.auth.logout();
    this.router.navigate(['/login'], { replaceUrl: true });
  }

  async excluir(h: Homenagem) {
    const confirmDelete = window.confirm(`Deseja realmente excluir "${h.titulo}"?`);
    if (!confirmDelete) return;

    try {
      await this.homenagemService.deletarHomenagem(h.id!);
      this.homenagens = this.homenagens.filter(item => item.id !== h.id);
      alert('Homenagem excluída com sucesso!');
    } catch (e) {
      console.error('Erro ao excluir homenagem', e);
      alert('Não foi possível excluir a homenagem.');
    }
  }
}
