// height is in m

let pokemonList = [
  {
    name: 'Charizard',
    height: 2.1,
    type: ['fire', 'flying']
  },
  {
    name: 'Squirtle',
    height: .5,
    type: ['water']
  },
  {
    name: 'Pikachu',
    height: .3,
    type: ['electric']
  }
];

let pokemonRepository = (function() {
  let pokemonList = [];
  
  function getAll() {
    return pokemonList;
  }

  return {getAll: getAll};
})();

// displays a pokemon's name, types, and height
// also adds extra descriptors for pokemon above 2 height or below .35 height
function printArrayDetails(pokemon){
    document.write('<p>' + pokemon.name + '</p>' + '<p>' + pokemon.type + '</p>');
    if (pokemon.height > 2) {
      document.write('<p>' + 'Height: ' + pokemon.height + ' Wow! That\'s large!' + '</p>')
    } else if (pokemon.height < .35) {
      document.write('<p>' + 'Height: ' + pokemon.height + ' Aw, it\'s tiny!' + '</p>')
    } else {
      document.write('<p>' + 'Height: ' + pokemon.height + '</p>')
    }
  };

pokemonList.forEach(printArrayDetails);