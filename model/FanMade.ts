import { Produto } from './Produto';

export class FanMade extends Produto {
    constructor(
      id: number,
      nome: string,
      preco: number
    ) {
      super(id, nome, preco);
    }
  
    exibirDetalhes(): string {
      return `Produto - ID: ${this.id}, Nome: ${this.nome}, Preço: R$${this.preco.toFixed(2)}.`;
    }
  }
  