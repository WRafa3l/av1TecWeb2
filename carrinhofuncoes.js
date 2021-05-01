
// Converter valor real com virgula, para valor limpo com ponto e do tipo float.
let valorTotal = document.querySelector('#total');
//alert(moedaParaFloat(valorTotal.innerHTML));

function moedaParaFloat(valor) {
  let textoLimpo = valor.replace("R$", "").replace(",", ".");
  return parseFloat(textoLimpo);
}
//Retornar numero limpo para Real
function floatParaMoeda(valor) {
  let valorFormatado = (valor < 1 ? "0" : "") + Math.floor(valor * 100);
  valorFormatado = "R$ " + valorFormatado;
  return valorFormatado.substr(0, valorFormatado.length - 2) + "," + valorFormatado.substr(-2);
}
//alert (floatParaMoeda(39.90));
//retornar o valor da variavel total 
function retornaTotal() {
  let valorTotal = document.querySelector("#total");
  return moedaParaFloat(valorTotal.innerHTML);
}
//alert (retornaTotal());
//Mudar o valor total
function escreveTotal(valor) {
  let valorTotal = document.querySelector("#total");
  valorTotal.innerHTML = floatParaMoeda(valor);
}
//escreveTotal(10.10);

function calcularTotalProduto() {
  let todosProdutos = document.querySelectorAll(".preco");
  let todasQuantidades = document.querySelectorAll(".quantidade");
  let totalProdutos = 0;

  for (let posicao = 0; posicao < todosProdutos.length; posicao++) {
    let umPreco = moedaParaFloat(todosProdutos[posicao].innerHTML);
    let umaQuantidade = moedaParaFloat(todasQuantidades[posicao].value);
    let subtotal = umPreco * umaQuantidade;
    totalProdutos += subtotal;
  }

  return totalProdutos;

}

function quantidadeMudou() {
  escreveTotal(calcularTotalProduto());
}

function aoCarregarPagina() {
  let camposQuantidade = document.querySelectorAll(".quantidade");
  for (let i = 0; i < camposQuantidade.length; i++) {
    camposQuantidade[i].onchange = (function () {
      quantidadeMudou();
    });
  }
}
window.onload = (function () {
  aoCarregarPagina();
  quantidadeMudou();
});

$(document).ready(function () {
  $("#myInput").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    $("#myList li").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


$(document).ready(function () {

  function limpa_formulário_cep() {
    // Limpa valores do formulário de cep.
    $("#rua").val("");
    $("#bairro").val("");
    $("#cidade").val("");
    $("#uf").val("");
    $("#ibge").val("");
  }

  //Quando o campo cep perde o foco.
  $("#cep").blur(function () {

    //Nova variável "cep" somente com dígitos.
    var cep = $(this).val().replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {

        //Preenche os campos com "..." enquanto consulta webservice.
        $("#rua").val("...");
        $("#bairro").val("...");
        $("#cidade").val("...");

        //Consulta o webservice viacep.com.br/
        $.getJSON("https://viacep.com.br/ws/" + cep + "/json/?callback=?", function (dados) {

          if (!("erro" in dados)) {
            //Atualiza os campos com os valores da consulta.
            $("#rua").val(dados.logradouro);
            $("#bairro").val(dados.bairro);
            $("#cidade").val(dados.localidade);
          } //end if.
          else {
            //CEP pesquisado não foi encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
          }
        });
      } //end if.
      else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
      }
    } //end if.
    else {
      //cep sem valor, limpa formulário.
      limpa_formulário_cep();
    }
  });
});
	function AddCarrinho(produto, qtd, valor, posicao)
	{
		localStorage.setItem("produto" + posicao, produto);
		localStorage.setItem("qtd" + posicao, qtd);
		valor = valor * qtd;
		localStorage.setItem("valor" + posicao, valor);
		alert("Produto adicionado ao carrinho!");
	}

  function RemoveCarrinho(produto, qtd, valor, posicao){
    localStorage.removeItem("produto" + posicao, produto);
    alert ("Produto Removido do Carrinho");
  }

 



