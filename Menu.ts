import readlineSync from 'readline-sync';
import { colors } from './util/Colors';
import { Carrinho } from './model/Carrinho';
import { Oficiais } from './model/Oficiais';
import { FanMade } from './model/FanMade';
import { Produto } from './model/Produto';


export class Menu {
  exibirMenu(): void {
    console.log(colors.fg.pink + ("\n--- Anahi Store ---") + colors.reset);
    console.log("1. Listar todos os Produtos");
    console.log("2. Listar Produto pelo ID");
    console.log("3. Adicionar Produto: " + colors.fg.gray + "Exemplo: Discos, Maquiagem, Óculos, Colecionáveis..." + colors.reset);
    console.log("4. Atualizar Produto");
    console.log("5. Deletar Produto");
    console.log("6. Sair");
  }

  iniciarMenu(): void {
    const carrinho = new Carrinho(); // Instância do Carrinho para gerenciar os produtos
    let opcao: number;

    do {
      this.exibirMenu();
      opcao = readlineSync.questionInt("Escolha uma opcao: ");

      switch (opcao) {
        case 1:
          carrinho.listarProdutos();
          break;

        case 2:
          const idBusca = readlineSync.questionInt("Digite o ID do produto para buscar: ");
          const produtoEncontrado: Produto | undefined = carrinho.buscarProdutoPorId(idBusca);
          if (produtoEncontrado) {
            console.log("Produto encontrado:", produtoEncontrado.exibirDetalhes());
          } else {
            console.log("Produto não encontrado.");
          }          
          break;

        case 3:
          console.log("Adicionando novo produto...");
          const tipo = readlineSync.question("Tipo: " + colors.fg.gray + "1-Produtos Oficiais, 2-FanMade: " + colors.reset);
          const id = readlineSync.questionInt("ID do Produto: ");
          const nome = readlineSync.question("Nome do Produto: ");
          const preco = readlineSync.questionFloat("Preco do Produto: ");

          if (tipo === "1") {
            const garantia = readlineSync.questionInt("Garantia (meses): ");
            const produtoOficial = new Oficiais(id, nome, preco, garantia);
            carrinho.adicionarProduto(produtoOficial);
            console.log("Produto oficial adicionado com sucesso!");
          } else if (tipo === "2") {
            const fanMade = new FanMade(id, nome, preco);
            carrinho.adicionarProduto(fanMade);
            console.log("Produto FanMade adicionado com sucesso!");
          } else {
            console.log("Tipo inválido. Tente novamente.");
          }
          break;

        case 4:
          console.log("Atualizando produto...");
          const idAtualizar = readlineSync.questionInt("Digite o ID do produto a atualizar: ");
          const produtoAtualizar: Produto | undefined = carrinho.buscarProdutoPorId(idAtualizar);
          if (produtoAtualizar) {
            const novoNome = readlineSync.question("Novo Nome do Produto: ");
            const novoPreco = readlineSync.questionFloat("Novo Preço do Produto: ");
            produtoAtualizar.nome = novoNome;
            produtoAtualizar.preco = novoPreco;
            console.log("Produto atualizado com sucesso!");
          } else {
            console.log("Produto não encontrado.");
          }
          break;

        case 5:
          console.log("Deletando produto...");
          const idRemover = readlineSync.questionInt("Digite o ID do produto a remover: ");
          const removido = carrinho.removerProduto(idRemover);
          if (removido) {
            console.log("Produto removido com sucesso!");
          } else {
            console.log("Produto não encontrado.");
          }
          break;

        case 6:
          console.log(colors.fg.pink + "Encerrando sistema..." + colors.reset);
          this.sobre(); 
          break;

        default:
          console.log("Opção inválida. Tente novamente.");
      }
    } while (opcao !== 6);
  }

  // Informações da Pessoa Desenvolvedora 
  sobre(): void {
    console.log(colors.fg.orange + ("\n*****************************************************") + colors.reset);
    console.log(" 🌟 Projeto Desenvolvido por: Jeisa Boaventura 🌟");
    console.log(" 📝 Linkedin - https://www.linkedin.com/in/-caroline-boaventura/ 📝");
    console.log(" 📂 https://github.com/Caaarolb 📂");
    console.log(colors.fg.orange + ("*****************************************************") + colors.reset);
  }
}