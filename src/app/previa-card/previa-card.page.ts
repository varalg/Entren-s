import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-previa-card',
  templateUrl: './previa-card.page.html',
  styleUrls: ['./previa-card.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class PreviaCardPage {
  titulo: string = '';
  mensagem: string = '';
  imagemUrl: string = '';
  spotifyUrl: string = '';

  sanitizedSpotifyUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  ngDoCheck() {
    this.sanitizedSpotifyUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.spotifyUrl);
  }
}
