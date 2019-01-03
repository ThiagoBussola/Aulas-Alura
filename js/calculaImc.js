// exemplo de como manipular o html com o js utilizando querySelector
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

// na variavél pacientes foi agregado o valor de todas as classes .paciente do html e css
var pacientes = document.querySelectorAll(".paciente");

// laço de repetição passando por cada paciente
for(var i = 0; i < pacientes.length; i++){

    // atribuido para o a var paciente, o paciente de cada iteração do laço for
    var paciente = pacientes[i];

    // na variavel tdPeso foi atribuido o peso que está no html pela classe .info-peso
    var tdPeso = paciente.querySelector(".info-peso");
    // variavel peso recebe o valor buscado na tdPeso
    var peso = tdPeso.textContent;

    // na variavel tdAltura foi atribuido o altura que está no html pela classe .info-altura
    var tdAltura = paciente.querySelector(".info-altura");
    // variavel altura recebe o valor buscado na tdAltura
    var altura = tdAltura.textContent;

    // atribui a variavel tdImc o que está na classe .info-imc
    var tdImc = paciente.querySelector(".info-imc");

    // variaveis de controle para definir se os dados são válidos retornando true ou false
    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    
    // validação de peso
    if (!pesoEhValido) {
        console.log("peso invalido");
        pesoEhValido = false;
        tdImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido");
    }
    // validação de altura
    if (!alturaEhValida) {
        console.log("altura inválida");
        alturaEhValido = false;
        tdImc.textContent = "Altura Inválida";
        paciente.classList.add("paciente-invalido");
    }
    // se o peso e a altura forem corretos inserido o IMC
    if (pesoEhValido && alturaEhValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if (peso >= 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura){
    if (altura >= 0 && altura < 3.00) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso,altura) {
    var imc = 0; 
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}