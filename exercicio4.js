/*Uma comerciante comprou alguns produtos e quer revender com lucro de 45% se o valor da compra foi menor que 20 reais. Caso contrário, o lucro será de 30%. O valor deve ser passado para o programa que deverá retornar o valor da venda.

Exemplo: 
produto: R$ 18,00 -> 18 * 45% -> O seu produto deve ser vendido por R$ 26,10
produto: R$ 21,00 -> 21 * 30% -> O seu produto deve ser vendido por R$ 27,30
*/
const valorCompra = parseInt(prompt("Valor do produto: "));
  console.log(valorCompra);

const valorRevendaA = valorCompra * (0.45) + valorCompra;
const valorRevendaB = valorCompra * (0.30) + valorCompra;

if(valorCompra < 20){
  console.log(`O valor final do pruduto é ${valorRevendaA}: `)
}
else
{
  console.log(`O valor final do produto é ${valorRevendaB}: `)
}