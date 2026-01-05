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
percente = " "+ valor * desconto / 100
total_desconto = valor - percente
quantidade = 2


extrato_vendas = "Produto: " + produto + "\n Valor: R$ " + valor + "\n Desconto: " + desconto + "%" + "\n Valor do Desconto: R$" + percente

console.log(extrato_vendas);
console.log("Valor com Desconto: R$ " + total_desconto + ",00 reais");
