/** Vendas
 * Produto
 * Desconto
 * Quantidade
 * Valor de Venda
 * Exemplo: imprimir
 */

produto =  "mouse"
desconto = 10
valor = 70
percent = " "+ valor * desconto / 100
total_desconto = valor - percent
quantidade = 2


extrato_vendas = "Produto: " + produto + "\n Valor: R$ " + valor + "\n Desconto: " + desconto + "%" + "\n Valor do Desconto: R$" + percent

console.log(extrato_vendas);
console.log("Valor com Desconto: R$ " + total_desconto + "reais");
