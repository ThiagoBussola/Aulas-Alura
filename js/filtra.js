var campoFiltro = document.querySelector("#filtrar-tabela");


// função para pegar o que é digitado, e somente o que pertence a classe .paciente
campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    // esse if pergunta se o usuário digitou alguma coisa, se ele digitou será executado o bloco abaixo
    if(this.value.length > 0){
        // laço de repetição, a cada interação ele filtra uma letra que foi digitada
        // para mostrar somente os pacientes que tem o nome igual ao que eu digitei
        for(var i = 0; i < pacientes.length; i++){
            // var paciente recebe o array da classe .paciente
            var paciente = pacientes[i];
            //var tdNome recebe o que está na classe .info-nome
            var tdNome = paciente.querySelector(".info-nome");
            // por fim o nome recebe o conteudo de tdNome
            var nome = tdNome.textContent;
            //criação da expressão regular para melhorar o filtro
            var expressao = new RegExp(this.value, "i");

            // validação para adicionar a classe invisivel em nomes que não contem o caracter digitado
            // ou seja, todos que são diferentes do this.value
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    // caso não tenha nada digitado será executado o bloco abaixo
    } else {
        // laço de repetição para passar removendo a classe invisivel quando zeramos o campo de filtro
        for (let i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});