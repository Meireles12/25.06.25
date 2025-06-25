class Produto {
    constructor(nome, preco) {
      this.nome = nome;
      this.preco = preco;
    }
  
    exibirProduto() {
      console.log(`Produto: ${this.nome}, Preço: R$${this.preco}`);
    }
  }
  
  const produto1 = new Produto('Tenis', 180);
  const produto2 = new Produto('Moletom', 119.90);
  
  produto1.exibirProduto();
  produto2.exibirProduto();
