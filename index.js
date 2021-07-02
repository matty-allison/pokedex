let base_URL = "https://pokeapi.co/api/v2/pokemon/";

function getPokemonList(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      let pokemon = data.results;

      let container = document.querySelector(".pokemon-list-container");
      container.innerHTML = "";
      pokemon.forEach((btn) => {
        container.innerHTML += `<img onclick="getPokemonInfo('${btn.url}')" src="unnamed.png"><p>${btn.name}</p>`;
      });
      let nextPrevious = document.querySelector(".previousnext");
      nextPrevious.innerHTML = "";
      nextPrevious.innerHTML += `<button class="previousbtn" onclick="getPokemonList('${data.previous}')">Previous</button>`;
      nextPrevious.innerHTML += `<button class="nextbtn" onclick="getPokemonList('${data.next}')">Next</button>`;
    });
}

getPokemonList(base_URL);

function getPokemonInfo(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // console.log(data);
      document.querySelector(".pokemon-info").innerHTML = `
    <button onclick="togglePopup()" class="closebtn">X</button><img src="${data.sprites.other["official-artwork"].front_default} "><div class="containerInfo"><p class="info">${data.name}</p><p class="info">Height: ${data.height}</p><p class="info">weight: ${data.weight}</p><p class="info">Type: ${data.types[0].type.name}</div>
    `;
      togglePopup();
    });
}

function togglePopup() {
  // console.log("hello");
  document.getElementsByClassName("pokemon-info")[0].classList.toggle("active");
}
