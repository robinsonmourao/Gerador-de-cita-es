var nomeAutor; 
var sobreNomeAutor;
var obra;
var editora;
var ano;
var citacao;

function gerarCitacao() {

    if(document.getElementById("nomeAutorInput").value){
        nomeAutor = document.getElementById('nomeAutorInput').value;
    }
    if(document.getElementById('sobreNomeAutorInput').value){
        sobreNomeAutor = document.getElementById('sobreNomeAutorInput').value;
    }
    if(document.getElementById('obraInput').value){
        obra = document.getElementById('obraInput').value;
    }
    if(document.getElementById('editoraInput').value){
        editora = document.getElementById('editoraInput').value;
    }
    if(document.getElementById('anoInput').value){
        ano = document.getElementById('anoInput').value;
    }

    citacao = sobreNomeAutor.toUpperCase() + "; " + nomeAutor + ". "  + obra.bold() + ". " + editora + ". " + ano + ".";
    if (citacao) {
        document.getElementById('citacao').innerHTML = citacao;
    }
}

function maisAutor(){
    
}