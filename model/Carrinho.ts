import { Produto } from './Produto';

export class Carrinho {
    private produtos: Produto[] = [];
      buscarProdutoPorId(idBusca: number): Produto | undefined {
      return this.produtos.find((produto) => produto.id === idBusca);
    }
  
    adicionarProduto(produto: Produto): void {
      this.produtos.push(produto);
      console.log(`Produto ${produto.nome} adicionado ao carrinho.`);
    }
  
    listarProdutos(): void {
      if (this.produtos.length === 0) {
        console.log("O carrinho está vazio.");
        return;
      }
      console.log("Produtos no carrinho:");
      this.produtos.forEach((produto) => {
        console.log(produto.exibirDetalhes());
      });
    }
    removerProduto(id: number): boolean {
      const index = this.produtos.findIndex((produto) => produto.id === id);
      if (index !== -1) {
        console.log(`Produto ${this.produtos[index].nome} removido do carrinho.`);
        this.produtos.splice(index, 1);
        return true;
      } else {
        console.log("Produto não encontrado no carrinho.");
        return false;
      }
    }
  }
  