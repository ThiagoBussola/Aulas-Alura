var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

// adicionar um Listener no pai das tabelas no caso, ajuda na performance do browser
tabela.addEventListener("dblclick", function(event){
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove(); // solução em uma linh
    }, 500);
});

// solução exemplificada
// var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover
// var alvoEvento = event.target;