const listaStorage = localStorage.getItem("listapokemons")
let listapokemons = [];
if (listaStorage) {
  listapokemons = JSON.parse(listaStorage);
}

function buscarpokemons() {
  console.log("Buscar pokemon")
  const inputpokemons = document.getElementById("input_pokemons");
  console.log(inputpokemons)
  const valorpokemons = inputpokemons.value;
  console.log("buscando Pokemons " + valorpokemons);
  fetch("https://pokeapi.co/api/v2/pokemon/" + valorpokemons)
    .then((resposta) => {
      return resposta.json();
    })
    .then((json) => {
      console.log(json);
      const tagAltura = document.getElementById("altura")
      console.log(tagAltura)
      tagAltura.innerText = 'A altura é: ' +  json.height;
    });
}
function configurarEventos() {
    console.log("Configurar eventos")
  const botaoBuscar = document.getElementById("botao_buscar");
  botaoBuscar.addEventListener("click", buscarpokemons);

}

window.addEventListener("load", configurarEventos);