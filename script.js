var nomeAutor = document.getElementById('nomeAutorInput').innerHTML;
var sobreNomeAutor = document.getElementById('sobreNomeAutorInput').innerHTML;
var editora = document.getElementById('editoraInput').innerHTML;
var ano = document.getElementById('anoInput').innerHTML;
var citacao;

function gerarCitacao() {
    citacao = nomeAutor + sobreNomeAutor + editora + ano;
    console.log(citacao);
    if (citacao) {
        document.getElementById('citacao').innerHTML = citacao;
    }
}