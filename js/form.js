var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    // Extraindo informações do paciente do form
    var paciente = obtemPacienteDoFormulario(form);
    // recebendo os erros da função valida paciente para exibir ao usuário
    var erros = validaPaciente(paciente);
    // verifica se temos mais de um erro no array para assim chamar a função de exibir a mensagem de erro
    if(erros.length > 0){
        exibeMensagensDeErro(erros)
        var mensagemErro = document.querySelector("#mensagens-erro");
        return;
    }    

    adicionaPacienteNaTabela(paciente);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

//========================================================================================================= //

function adicionaPacienteNaTabela(paciente){
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    // para cada item do meu array executar a função, recebe o erro que estou passando, cria uma li e depois adiciona na ul
    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteDoFormulario(form){
    // objeto paciente;    
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

// cria a tr e a td do paciente
function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    // dado é a coluna da tabela ex: nome, peso, altura ....
    td.textContent = dado;
    td.classList.add(classe)

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O Nome não pode ficar em branco!");
    }

    if(!validaPeso(paciente.peso)){
        erros.push("Peso é inválido!");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é inválida!");   
    }

    if(paciente.gordura.length == 0){
        erros.push("A gordura não pode ficar em branco!")
    }

    if(paciente.peso.length == 0){
        erros.push("O peso do paciênte não pode ficar em branco!");
    }
    if(paciente.altura.length == 0){
        erros.push("A altura do paciênte não pode ficar em branco!");
    }
    return erros;
}