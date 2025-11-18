import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonNote, IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-plano',
  templateUrl: './plano.page.html',
  styleUrls: ['./plano.page.scss'],
  standalone: true,
  imports: [IonFooter, 
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonNote
  ]
})
export class PlanoPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
 




