let idStat = [
  ["weight", "weight"],
  ["height", "height"],
  ["swords", "attack"],
  ["local_fire_department", "special-attack"],
  ["shield", "defense"],
  ["local_police", "special-defense"],
  ["destruction", "hp"],
  ["bolt", "speed"],
  ["lightbulb", "types"]
]

let statsHTML = ``;
for (const [stat, id] of idStat) {
  statsHTML += `
  <p>
  <span class="material-symbols-outlined">
  ${stat}
  </span>
  <span id="${id}"></span>
  </p>`
}

document.getElementById("pokemon-stats").innerHTML = statsHTML;
document.querySelector(".pokemon-display").style.display = "none";
document.getElementById("search-button").addEventListener("click", fetchPokemon);

async function fetchPokemon() {
  for (const [_, id] of idStat) {
    document.getElementById(`${id}`).textContent = "";
  }

  document.querySelector(".pokemon-display").style.display = "none";
  try {
    let pokemonName = document.querySelector("input").value.toLowerCase();
    let statsObj = {};
    let typesObj = {};
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonName}`);

    if (!response.ok) {
      throw new Error("Cannot find pokemon");
    }
    document.querySelector(".pokemon-display").style.display = "block";

    const data = await response.json();
    const {weight, height, stats, id, name, sprites, types} = data;

    document.getElementById("sprite").setAttribute("src", sprites.front_default);

    statsObj["pokemon-id"] = `#${id}`;
    statsObj["pokemon-name"] = name.toUpperCase();
    statsObj["weight"] = weight;
    statsObj["height"] = height;

    for (const {base_stat,stat} of stats) {
      statsObj[stat.name] = base_stat;
    }

    for (const [targetID, amount] of Object.entries(statsObj)) {
      document.getElementById(targetID).textContent = amount;
    }

    for (const {type} of types) {
      let typeHTML = `<span class="type ${type.name}">${type.name.toUpperCase()}</span>`
      document.getElementById("types").insertAdjacentHTML("beforeend", typeHTML);
    }

  } catch (error) {
    document.querySelector(".pokemon-display").style.display = "none";
    alert("Pokémon not found")
    console.error(error);
  }
}