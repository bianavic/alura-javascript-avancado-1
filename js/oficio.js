var titulo = document.querySelector(".titulo");
titulo.textContent = "Header"

var oficios = document.querySelectorAll(".oficio")

for (var i = 0; i < oficios.length; i++) {

    var oficio = oficios[i]


    var tdOrigem = document.querySelector(".info-origem")
    var origem = tdOrigem.textContent

    var tdNumero = document.querySelector(".info-numero")
    var numero = tdNumero.textContent

    var tdNome = document.querySelector(".info-nome")
    var nome = tdNome.textContent

    var tdId = document.querySelector(".info-id")
    var id = tdId.textContent

    console.log(oficios) // tr
    console.log(tdOrigem) // td
    console.log(tdNumero) // numero

}

var botaoAdicionar = document.querySelector("#adicionar-oficio")
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#frelatorio-oficio")
    var oficio = form.oficio.value;
    var justica = form.justica.value;
    var nome = form.nome.value;
    var id = form.id.value;

    var oficioTr = document.createElement("tr")



    console.log(form.origem.value)
    console.log(form.nome.value)

})