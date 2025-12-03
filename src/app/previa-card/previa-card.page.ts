import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonTitle
} from '@ionic/angular/standalone';
import html2canvas from 'html2canvas';
import { HomenagemService, Homenagem } from 'src/app/services/homenagem.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-previa-card',
  templateUrl: './previa-card.page.html',
  styleUrls: ['./previa-card.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  ]
})
export class PreviaCardPage {
  @ViewChild('previewCard', { static: false }) previewCard!: ElementRef;

  titulo = '';
  mensagem = '';
  imagemUrl = '';
  spotifyUrl = '';
  sanitizedSpotifyUrl: SafeResourceUrl | null = null;

  linkHomenagem: string | null = null;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private homenagemService: HomenagemService,
    private auth: AuthService
  ) {}

  atualizarSpotify() {
    if (!this.spotifyUrl) {
      this.sanitizedSpotifyUrl = null;
      return;
    }

    if (!this.spotifyUrl.includes('/embed/')) {
      const id = this.spotifyUrl.split('/track/')[1]?.split('?')[0];
      if (id) this.spotifyUrl = `https://open.spotify.com/embed/track/${id}`;
    }

    this.sanitizedSpotifyUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.spotifyUrl);
  }

  async gerarLinkHomenagem() {
    if (!this.titulo || !this.mensagem) return;

    const novaHomenagem: Omit<Homenagem, 'id' | 'uid'> = {
      titulo: this.titulo,
      mensagem: this.mensagem,
      imagemUrl: this.imagemUrl,
      spotifyUrl: this.spotifyUrl,
      criadoEm: new Date()
    };

    try {
      const id = await this.homenagemService.criarHomenagem(novaHomenagem);
      this.linkHomenagem = `${window.location.origin}/menu-layout/previa-card/${id}`;
      alert('Homenagem salva com sucesso!');
      this.router.navigate(['/listar-homenagem']);
    } catch (error) {
      console.error('Erro ao salvar homenagem:', error);
      alert('Erro ao salvar homenagem.');
    }
  }

  baixarHomenagem() {
    const card = this.previewCard?.nativeElement as HTMLElement;
    if (!card) return;

    html2canvas(card, { scale: 2 }).then(canvas => {
      const link = document.createElement('a');
      link.download = `${this.titulo || 'homenagem'}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    });
  }
}
