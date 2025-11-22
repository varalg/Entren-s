import { Injectable } from '@angular/core';
import { loadMercadoPago } from '@mercadopago/sdk-js';

@Injectable({ providedIn: 'root' })
export class MercadoPagoService {
  mp: any;

  constructor() {}

  async init(publicKey: string) {
    this.mp = await loadMercadoPago();
    return this.mp;
  }

  getMP() {
    return this.mp;
  }
}
