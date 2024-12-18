import { Produto } from "../model/Produto";

export interface Repository {
    listarTodos(): Produto[];
    listarPorId(id: number): Produto | undefined;
    cadastrar(produto: Produto): void;
    atualizar(id: number, produto: Produto): void;
    deletar(id: number): void;
  }
  