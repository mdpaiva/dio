object ReceitaFederal {
    //Função para o calculo do imposto (baseado nas aliquotas)
    fun calcularImposto(salario: Double): Double {
        val aliquota = when {
            //Atribuição de aliquotas mediante salário
            (salario >= 0 && salario <= 1100) -> 0.05
            (salario >= 1100.01 && salario <= 2500) -> 0.10
            else -> 0.15
        }
        return aliquota * salario
    }
}

//Lê os valores de Entrada:
fun main() {
    val valorSalario = readLine()!!.toDouble();
    val valorBeneficios = readLine()!!.toDouble();

    //Calcula o imposto através da função "calcularImposto"     
    val valorImposto = ReceitaFederal.calcularImposto(valorSalario);
    val saida = valorSalario - valorImposto + valorBeneficios;
  
    //Imprime a saída (com 2 casas decimais)  
    println(String.format("%.2f", saida));
}
