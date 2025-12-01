import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonButtons, 
  IonMenuButton,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonTextarea,
  IonFooter,
  IonLabel,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-previa-card',
  standalone: true,
  imports: [
    IonLabel, CommonModule, FormsModule,
    IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton,
    IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent,
    IonItem, IonInput, IonTextarea, IonFooter, IonButton
  ],
  templateUrl: './previa-card.page.html',
  styleUrls: ['./previa-card.page.scss']
})
export class PreviaCardPage {

  titulo: string = '';
  mensagem: string = '';
  imagemUrl: string = '';
  spotifyUrl: string = '';
  sanitizedSpotifyUrl: SafeResourceUrl | null = null;

  linkHomenagem: string | null = null; // Link temporário gerado

  constructor(private sanitizer: DomSanitizer) {}

  atualizarSpotify() {
    if (!this.spotifyUrl) {
      this.sanitizedSpotifyUrl = null;
      return;
    }

    try {
      const regex = /track\/([a-zA-Z0-9]+)(\?.*)?$/;
      const match = this.spotifyUrl.match(regex);

      if (match && match[1]) {
        const embedLink = `https://open.spotify.com/embed/track/${match[1]}`;
        this.sanitizedSpotifyUrl = this.sanitizer.bypassSecurityTrustResourceUrl(embedLink);
      } else {
        this.sanitizedSpotifyUrl = null;
      }
    } catch (e) {
      console.error('Erro ao processar o link do Spotify', e);
      this.sanitizedSpotifyUrl = null;
    }
  }

  gerarLinkHomenagem() {
    const htmlContent = `
      <html>
        <head><title>${this.titulo}</title></head>
        <body>
          <h1>${this.titulo}</h1>
          <p>${this.mensagem}</p>
          ${this.imagemUrl ? `<img src="${this.imagemUrl}" style="max-width:100%"/>` : ''}
          ${this.spotifyUrl ? `<p><a href="${this.spotifyUrl}" target="_blank">Ouça a música no Spotify</a></p>` : ''}
        </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    this.linkHomenagem = URL.createObjectURL(blob);
  }

  baixarHomenagem() {
    if (!this.linkHomenagem) return;

    const a = document.createElement('a');
    a.href = this.linkHomenagem;
    a.download = `${this.titulo || 'homenagem'}.html`;
    a.click();
  }
}
