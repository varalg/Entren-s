import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card-previa',
  templateUrl: './card-previa.page.html',
  styleUrls: ['./card-previa.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CardPreviaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
