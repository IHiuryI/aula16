function Cadastrar() {
  const produtoNome = document.getElementById("inputNome").value;
  const produtoQuantidade = Number.parseInt(
    document.getElementById("inputQuantidade").value
  );

  if (produtoNome == "") {
    alert("Digite o nome do produto!");
    return;
  }

  if (isNaN(produtoQuantidade) || produtoQuantidade <= 0) {
    alert("Por favor, insira uma quantidade válida");
    return;
  }

  //Recupera uma lista chamada produtos do localStorage, se essa lista não existir,ela cria uma nova.
  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

  //adicionar produto
  produtos.push({ nome: produtoNome, quantidade: produtoQuantidade });

  //salvar de volta no localStorage
  localStorage.setItem("produtos", JSON.stringify(produtos));
  exibirProdutos();
}

function exibirProdutos() {
  let tabela = document.getElementById("tabela");
  tabela.innerHTML = `
        <tr>
            <th>Produtos</th>
            <th>Quantidade</th>
        </tr>`;

  let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

  produtos.forEach((produto) => {
    let row = tabela.insertRow();
    row.insertCell(0).innerText = produto.nome;
    row.insertCell(1).innerText = produto.quantidade;
  });
}
window.onload = exibirProdutos
