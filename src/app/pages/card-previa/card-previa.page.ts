import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-card-previa',
  templateUrl: './card-previa.page.html',
  styleUrls: ['./card-previa.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CardPreviaPage {
  titulo: string = '';
  mensagem: string = '';
  versiculo: string = '';
  videoUrl = 'assets/video.mp4';
  spotifyUrl = 'https://open.spotify.com/embed/track/ID_DA_MUSICA';
}
