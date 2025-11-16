import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor() {}
}
