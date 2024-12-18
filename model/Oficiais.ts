import { Produto } from './Produto';

export class Oficiais extends Produto {
  constructor(
    id: number,
    nome: string,
    preco: number,
    public garantia: number
  ) {
    super(id, nome, preco);
  }

  exibirDetalhes(): string {
    return `Produto - ID: ${this.id}, Nome: ${this.nome}, Preço: R$${this.preco.toFixed(
      2
    )}, Garantia: ${this.garantia} anos.`;
  }
}