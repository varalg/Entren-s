import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-planos',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './plano.page.html',
  styleUrls: ['./plano.page.scss'],
})
export class PlanosPage {

  async assinar(plano: string) {
    console.log('Plano selecionado:', plano);

    const url = 'https://api.mercadopago.com/checkout/preferences';

    const body = {
      items: [
        {
          title: plano.toUpperCase(),
          quantity: 1,
          currency_id: 'BRL',
          unit_price: plano === 'premium' ? 24.90 : 14.90,
        },
      ],
      back_urls: {
        success: "https://entre-nos.app/sucesso",
        failure: "https://entre-nos.app/erro",
        pending: "https://entre-nos.app/pendente"
      },
      auto_return: "approved"
    };

    try {

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer APP_USR-400924117584643-111908-3891d2fccdc88cbbdab23063e146d6b2-3001585706', // coloque o token de teste AQUI
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      console.log("Resposta da API:", data);

      if (!data.init_point) {
        console.error("⚠ Nenhum init_point retornado pela API.");
        alert("Erro ao gerar o link de pagamento.");
        return;
      }

      // abre o checkout do Mercado Pago
      window.open(data.init_point, '_blank');

    } catch (err) {
      console.error("Erro na requisição:", err);
      alert("Não foi possível iniciar o pagamento.");
    }
  }
}
