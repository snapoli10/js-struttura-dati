const cardList = document.getElementById('cardList');
const powerFilter = document.getElementById('powerFilter');

// SEZIONE DATI
const fieldCodes = ['W', 'U', 'B', 'R', 'G'];

const cardTypes = [
  'terre',
  'creature',
  'incantesimi',
  'artefatti',
  'instantanei',
  'stregonerie'
];

// Abbiamo creato un oggetto di oggetti, come riferimento
// di una edizione. Se ad esempio scrivo editions['SP']
// allora otterrò tutto un oggetto che descrive
// con più dettagli l'edizione.
// come oggetto di oggetti, può essere navigato solo con il for-in
const editions = {

  'BL': {
      edition: 'Boolean',
      rarity: 'blue'
  },

  'SP': {
      edition: 'Special',
      rarity: 'red'
  }

};


const cards = [
	{
	  cardName: 'Grizzly Bears',

	  cost: {
	    genericCostNumber: 1,
	    costFields: [ // colors array con riferimento a fieldCodes
	      fieldCodes[0],  // 'W',  - un suo riferimento
	      fieldCodes[2]   // 'B'
	    ],
	  },

	  picture: 'images/i.png',
	  cardType: cardTypes[1],
	  cardObject: 'Bear',

	  editionType: editions['BL'],

		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		story: 'blablablablablablabla',

		authorString: 'by Name Surname',

	  score: {
	    power: 1,  // filtrarlo per power
	    toughness: 2,
	  },

		cardColor: 'green',
	},

	{
	  cardName: 'Card 2',

	  cost: {
	    genericCostNumber: 1,
	    costFields: [ // colors array con riferimento a fieldCodes
	      fieldCodes[0],  // 'W',  - un suo riferimento
	      fieldCodes[2]   // 'B'
	    ],
	  },

	  picture: 'images/i.png',
	  cardType: cardTypes[1],
	  cardObject: 'Bear',

	  editionType: editions['BL'],

		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		story: 'blablablablablablabla',

		authorString: 'by Name Surname',

	  score: {
	    power: 2,  // filtrarlo per power
	    toughness: 2,
	  },

		cardColor: 'green',
	},

	{
	  cardName: 'Card 3',

	  cost: {
	    genericCostNumber: 1,
	    costFields: [ // colors array con riferimento a fieldCodes
	      fieldCodes[0],  // 'W',  - un suo riferimento
	      fieldCodes[2]   // 'B'
	    ],
	  },

	  picture: 'images/i.png',
	  cardType: cardTypes[1],
	  cardObject: 'Bear',

	  editionType: editions['BL'],

		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		story: 'blablablablablablabla',

		authorString: 'by Name Surname',

	  score: {
	    power: 3,  // filtrarlo per power
	    toughness: 2,
	  },

		cardColor: 'green',
	},

	{
	  cardName: 'Card 4',

	  cost: {
	    genericCostNumber: 1,
	    costFields: [ // colors array con riferimento a fieldCodes
	      fieldCodes[0],  // 'W',  - un suo riferimento
	      fieldCodes[2]   // 'B'
	    ],
	  },

	  picture: 'images/i.png',
	  cardType: cardTypes[1],
	  cardObject: 'Bear',

	  editionType: editions['BL'],

		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		story: 'blablablablablablabla',

		authorString: 'by Name Surname',

	  score: {
	    power: 4,  // filtrarlo per power
	    toughness: 2,
	  },

		cardColor: 'green',
	},

	{
	  cardName: 'Card 5',

	  cost: {
	    genericCostNumber: 1,
	    costFields: [ // colors array con riferimento a fieldCodes
	      fieldCodes[0],  // 'W',  - un suo riferimento
	      fieldCodes[2]   // 'B'
	    ],
	  },

	  picture: 'images/i.png',
	  cardType: cardTypes[1],
	  cardObject: 'Bear',

	  editionType: editions['BL'],

		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
		story: 'blablablablablablabla',

		authorString: 'by Name Surname',

	  score: {
	    power: 5,  // filtrarlo per power
	    toughness: 2,
	  },

		cardColor: 'green',
	},
];

console.log(cards);

// Mostrare le carte per nome
function displayCard(array, displayElement) {
  array.forEach((element) => {
    displayElement.innerHTML += `
    <div>${element.cardName}</div>
    `;
  });
};
displayCard(cards, cardList);