import { Produto } from "../model/Produto";
import { Repository } from "../src/Repository";

class ProdutoController implements Repository {
    atualizar(id: number, produto: Produto): void {
        throw new Error("Method not implemented.");
    }
    listarPorId(id: number): Produto | undefined {
        throw new Error("Method not implemented.");
    }
    private produtos: Produto[] = [];
  
    listarTodos(): Produto[] {
      return this.produtos;
    }
    buscarProdutoPorId(id: number): Produto | undefined {
        return this.produtos.find(produto => produto.id === id);
      }
      
    cadastrar(produto: Produto): void {
      this.produtos.push(produto);
    }
  
    produtoAtualizar(id: number, produto: Produto): void {
      const index = this.produtos.findIndex(p => p.id === id);
      if (index !== -1) this.produtos[index] = produto;
    }
  
    deletar(id: number): void {
      this.produtos = this.produtos.filter(p => p.id !== id);
    }
  }
  