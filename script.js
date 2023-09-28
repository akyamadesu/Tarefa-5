//função pra fazer o cálculo
function calcular() {
    var valor1 = parseFloat(document.getElementById('valor1').value);
    var valor2 = parseFloat(document.getElementById('valor2').value);
    var operacao = document.getElementById('operacao').value;
    var resultadoElement = document.getElementById('resultado');

    // validação dos valores numéricoss
    if (isNaN(valor1) || isNaN(valor2)) {
        resultadoElement.innerText = "Insira os números.";
        return;
    }

    //cálculo de operações
    var resultado;
    switch (operacao) {
        case '+':
            resultado = valor1 + valor2;
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        case '/':
            if (valor2 !== 0) {
                resultado = valor1 / valor2;
            } else {
                resultadoElement.innerText = "Impossível dividir por zero.";
                return;
            }
            break;
        default:
            resultadoElement.innerText = "Operação inválida.";
            return;
    }

    resultadoElement.innerText = "Resultado: " + resultado;
}


//valores pares de um array
var numeros = [1,2,3,4,5,6,7,8,9,10];
var valoresPares = [];

for (var i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        valoresPares.push(numeros[i]);
    }
}

console.log("Valores pares:", valoresPares);

//calculadora do custo de carro
function calcularCusto() {
    var custoFabrica = parseFloat(document.getElementById('custoFabrica').value);
    var porcDistribuidor = parseFloat(document.getElementById('porcDistribuidor').value);
    var porcImpostos = parseFloat(document.getElementById('porcImpostos').value);
    var valorFinalElement = document.getElementById('valorFinal');

    if (isNaN(custoFabrica) || isNaN(porcDistribuidor) || isNaN(porcImpostos)) {
        valorFinalElement.innerText = "Por favor, insira valores numéricos.";
        return;
    }

    var custoFinal = custoFabrica + (custoFabrica * (porcDistribuidor / 100)) + (custoFabrica * (porcImpostos / 100));
    valorFinalElement.innerText = "Valor Final: " + custoFinal.toFixed(2);
}

