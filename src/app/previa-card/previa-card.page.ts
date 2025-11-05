import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  standalone: true,
  selector: 'app-card-previa',
  templateUrl: './previa-card.page.html',
  styleUrls: ['./previa-card.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule,]
})
export class CardPreviaPage {
  titulo: string = '';
  mensagem: string = '';
  versiculo: string = '';
  videoUrl: string = '';
  spotifyUrl: string = '';
} 
