/** 
 * Menu, perfil, compra
*/
valor_produto = 200
tipo_compra = "pixs"

if(tipo_compra === "pix") {
    valor_produto = 180
} if(tipo_compra === "cartao") {
    valor_produto = 220
} if(tipo_compra === "boleto"){
    valor_produto = 210
} else {
    tipo_compra = "cancelada"
}
            
msn = "Tipo da compra é: " + tipo_compra + " Valor com desconto: R$ " + valor_produto

console.log(msn);