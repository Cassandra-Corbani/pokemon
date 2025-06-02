const listaStorage = localStorage.getItem("listaPokemons")
let listaPokemons = [];
if (listaStorage) {
  listaPokemons = JSON.parse(listaStorage);
}

function buscarPokemons() {
  const inputPokemons = document.getElementById("input_pokemons");
  const valorPokemons = valorPokemons.value;
  console.log("buscando Pokemons " + valorPokemons);
  fetch("https://pokeapi.co/" + valorPokemons)
    .then((resposta) => {
      return resposta.json();
    })
    .then((json) => {
      console.log(json);
      const inputPokemons = document.getElementById("input_pokemons");
      inputPokemons.value = json.pokemons;

    });
}
function clicarBuscar() {
  console.log("Clicou para buscar");
  const inputpokemons = document.getElementById("input_pokemons");
  const valorpokemons = inputPokemons.value;

    const novoPokemons = {
    pokemons: valorpokemons
    }

  listapokemons.push(novopokemons);
  console.log(listaPokemons);
  localStorage.setItem("listaPokemons", JSON.stringify(listaPokemons))
}

function configurarEventos() {
  const inputpokemons = document.getElementById("input_pokemons");
  inputpokemons.addEventListener("click", buscarpokemons);

}

window.addEventListener("load", configurarEventos);