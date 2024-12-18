import readlineSync from 'readline-sync';
import { colors } from './util/Colors';

export class Menu {
  exibirMenu(): void {
    console.log(colors.fg.pink + ("\n--- Anahi Store ---")+ colors.reset);
    console.log("1. Listar todos os Produtos");
    console.log("2. Listar Produto pelo ID");
    console.log("1. Adicionar Produto: " + colors.fg.gray + "Exemplo: Discos, Maquiagem, Óculos, Colecionáveis..." + colors.reset);
    console.log("4. Atualizar Produto");
    console.log("5. Deletar Produto");
    console.log("6. Sair");
  }

  iniciarMenu(): void {
    let opcao: number;
    do {
      this.exibirMenu();
      opcao = readlineSync.questionInt("Escolha uma opcao: ");
      switch (opcao) {
        case 1:
          console.log("Listando todos os produtos...");
          break;
        case 2:
          console.log("Buscando produto por ID...");
          break;
        case 3:
          console.log("Cadastrando novo produto...");
          break;
        case 4:
          console.log("Atualizando produto...");
          break;
        case 5:
          console.log("Deletando produto...");
          break;
        case 6:
          console.log("Encerrando sistema...");
          break;
        default:
          console.log("Opção inválida. Tente novamente.");
      }
    } while (opcao !== 6);
  }
}
