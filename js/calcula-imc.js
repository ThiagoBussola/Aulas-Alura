var titulo = document.querySelector(".titulo");
titulo.textContent = "Thiago Nutrição";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var pesoValido = true;
	var alturaValido = true;

	if (peso <= 0 || peso >= 1000) {
		tdImc.textContent = "Peso Inválido";
		pesoValido = false;
		paciente.classList.add("paciente-invalido");
	}
	if (altura <= 0 || altura >= 3) {
		tdImc.textContent = "Altura Inválida";
		alturaValido = false;
		paciente.classList.add("paciente-invalido");

	}

	if (alturaValido && pesoValido) {
		var imc = calculaImc(peso,altura);
		tdImc.textContent = imc;
	} else {
	    tdImc.textContent = "Altura e/ou peso inválidos!";
	}
}

function calculaImc(peso,altura){
	var imc = 0;
	imc = peso / (altura*altura);

	return imc.toFixed(2);
}
