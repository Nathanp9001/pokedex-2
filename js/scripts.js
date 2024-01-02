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

// displays a pokemon's name, types, and height
// also adds extra descriptors for pokemon above 2 height or below .35 height

for (let i = 0; i < pokemonList.length; i++) {
  document.write(pokemonList[i].name + ' ' + pokemonList[i].type);
  if (pokemonList[i].height > 2) {
    document.write('Height: ' + pokemonList[i].height + ' Wow! That\'s large!')
  } else if (pokemonList[i].height < .35) {
    document.write('Height: ' + pokemonList[i].height + ' Aw, it\'s tiny!')
  } else {
    document.write('Height: ' + pokemonList[i].height)
  }
};