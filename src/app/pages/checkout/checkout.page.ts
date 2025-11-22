import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MercadoPagoService } from 'src/app/services/meu-servico';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule],
  template: `<div id="wallet_container"></div>`,
})
export class CheckoutPage implements AfterViewInit {

  plano!: string;

  constructor(
    private mpService: MercadoPagoService,
    private route: ActivatedRoute
  ) {}

  async ngAfterViewInit() {
    this.plano = this.route.snapshot.queryParams['plano'];

    // Carregar preference correta
    const preferenceId = await this.gerarPreference(this.plano);

    const PUBLIC_KEY = 'APP_USR-15505094-15c4-4805-ba2c-65b2565af125';

    const mp = await this.mpService.init(PUBLIC_KEY);

    mp.bricks().create("wallet", "wallet_container", {
      initialization: { preferenceId },
      callbacks: {
        onError: (error: any) => console.log("Erro:", error),
        onReady: () => console.log("Brick pronto!"),
      },
    });
  }

  async gerarPreference(plano: string): Promise<string> {
    const res = await fetch("http://localhost:3000/create_preference", {
      method: "POST",
      body: JSON.stringify({ plano }),
      headers: { "Content-Type": "application/json" }
    });

    const data = await res.json();
    return data.preferenceId;
  }
}
