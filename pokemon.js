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
      tagAltura.innerHTML = 'A altura é: ' +  json.height;

      const tagPeso = document.getElementById("peso")
      tagPeso.innerHTML = ' O Peso é: ' + json.weight;

      const tagImagem = document.getElementById ("imagem")
      imagem.src = json.sprites.other.dream_world.front_default;

    });
}
function configurarEventos() {
    console.log("Configurar eventos")
  const botaoBuscar = document.getElementById("botao_buscar");
  botaoBuscar.addEventListener("click", buscarpokemons);

}

window.addEventListener("load", configurarEventos);