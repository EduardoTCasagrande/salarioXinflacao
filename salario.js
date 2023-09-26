import readlinesync from 'readline-sync'

let salarioMinimo = [
    { ano: 2010, valor: 510.0 },
    { ano: 2011, valor: 545.0 },
    { ano: 2012, valor: 622.0 },
    { ano: 2013, valor: 678.0 },
    { ano: 2014, valor: 724.0 },
    { ano: 2015, valor: 788.0 },
    { ano: 2016, valor: 880.0 },
    { ano: 2017, valor: 937.0 },
    { ano: 2018, valor: 954.0 },
    { ano: 2019, valor: 998.0 },
    { ano: 2020, valor: 1045.0 }
];

const inflacao = [
    { ano: 2010, ipca: 5.91 },
    { ano: 2011, ipca: 6.50 },
    { ano: 2012, ipca: 5.84 },
    { ano: 2013, ipca: 5.91 },
    { ano: 2014, ipca: 6.41 },
    { ano: 2015, ipca: 10.67 },
    { ano: 2016, ipca: 6.29 },
    { ano: 2017, ipca: 2.95 },
    { ano: 2018, ipca: 3.75 },
    { ano: 2019, ipca: 4.31 },
    { ano: 2020, ipca: 4.52 }
];

console.log(`1 - Listar os salários mínimos de 2010 à 2020
2 - Listar os índices do IPCA de 2010 à 2020
3 - comparação entre o aumento salarial e o IPCA`);

let opcao = readlinesync.question("Digite uma opção: ".trim());
opcao = Number(opcao)

switch (opcao){
    case 1:
        for (let contador = 0; contador < inflacao.length; contador++) {
            let salario_ano = salarioMinimo[contador].ano;
            let salario_valor = salarioMinimo[contador].valor;
            let salario_valor_formatado = salario_valor.toFixed(2).replace(".", ",")
            console.log("Ano: ".padEnd(25, ".") + salario_ano);
            console.log("Salário mínimo: ".padEnd(25, ".") +"R$ "+ salario_valor_formatado+"\n");
        }
        break;
    case 2:
        for (let contador = 0; contador < inflacao.length; contador++){
            let inflacao_ano = inflacao[contador].ano;
            let inflacao_porcentagem = inflacao[contador].ipca;
            let inflacao_porcentagem_formatado = inflacao_porcentagem.toFixed(2).replace(".", ",");
            console.log("Inflação ano: ".padEnd(25, ".") + inflacao_ano);
            console.log("Inflação porcentagem".padEnd(25, ".") + inflacao_porcentagem_formatado + "%\n");
        }
        break;
    case 3: 
        for (let contador = 0; contador < inflacao.length; contador++) {
            let inflacao_porcentagem = inflacao[contador].ipca;
            let inflacao_porcentagem_formatado = inflacao_porcentagem.toFixed(2).replace(".", ",");
            let salario_ano = salarioMinimo[contador].ano;
            let salario_valor = salarioMinimo[contador].valor;
            let salario_valor_formatado = salario_valor.toFixed(2).replace(".", ",")
            let crescimento_salarial = undefined;
            let salario_anterior = undefined;
            let diferenca = 0;
            if (contador == 0){
                crescimento_salarial = "Sem valor anterior para comparações";
                salario_anterior = salario_valor;
            } else{
                salario_anterior = salarioMinimo[contador - 1].valor;
            }
            diferenca = salario_valor - salario_anterior;
            crescimento_salarial = (diferenca / salario_anterior) * 100;
            console.log("Inflação ano: ".padEnd(25, ".") + salario_ano);
            console.log("Salário mínimo: ".padEnd(25, ".") +"R$ "+ salario_valor_formatado);
            console.log("Crescimento salarial: " + crescimento_salarial.toFixed(2).replace(".", ",") +"%")
            console.log("Inflação porcentagem".padEnd(25, ".") + inflacao_porcentagem_formatado + "%\n");
    
        }
        
        break;
    default:
        console.log("Erro, Tente novamente");
        break;
}
