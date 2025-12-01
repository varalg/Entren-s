import { Component } from '@angular/core';
import {
  IonApp,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonRouterOutlet,
} from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-layout',
  standalone: true,
  imports: [
    IonApp,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonRouterOutlet,
    RouterLink // <-- ESSENCIAL PARA FUNCIONAR
  ],
  templateUrl: './menu-layout.page.html',
  styleUrls: ['./menu-layout.page.scss'],
})
export class MenuLayoutPage {
  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }
}
