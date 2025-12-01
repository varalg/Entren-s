import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonContent,
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-politica-privacidade',
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton, IonContent],
  templateUrl: './politica-privacidade.page.html',
  styleUrls: ['./politica-privacidade.page.scss'],
})
export class PoliticaPrivacidadePage {}
