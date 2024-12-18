export abstract class Produto {
    constructor(
      public id: number,
      public nome: string,
      public preco: number
    ) {}
  
    abstract exibirDetalhes(): string;
  }
  