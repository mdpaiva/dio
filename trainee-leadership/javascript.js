//Função útil para o calculo do imposto (baseado nas aliquotas).
function calcularImposto(salario) {
  let aliquota;
  if (salario >= 0 && salario <= 1100) {
    //Atribui aliquota de 5% mediante salário
    aliquota = 0.05;
  }
  else if (salario >= 1100.01 && salario <= 2500) {
    //Atribui aliquota de 10% mediante salário
    aliquota = 0.10;
  }
  else if (salario > 2500) {
    //Atribui aliquota de 15% mediante salário
    aliquota = 0.15;
  }
  return aliquota * salario;
}

//Lê os valores de Entrada
const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

//Calcula o imposto através da função "calcularImposto"
const valorImposto = calcularImposto(valorSalario);
//Calcula e imprime a saída (com 2 casas decimais)
const saida = valorSalario - valorImposto + valorBeneficios;
print(saida.toFixed(2));
