//class which holds name and hand values
class Player {
  constructor(name) {
    this.name = name;
    this.hand = [];
  }
}

//class which holds card suit and numeric values
class Card {
  constructor(suit, card) {
    this.suit = suit;
    this.card = card;
  }
}

//class which holds the values which make up the total deck of cards
class Deck {
  constructor() {
    this.deck = [];
  }

  createDeck() {
    let suit = [
      "♠", 
      "♣", 
      "♥", 
      "♦"
    ];

    let card = [
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '10',
      'J',
      'Q',
      'K'
    ];

    for (let i = 0; i < suit.length; i++) {
      for let (j = 0; j < card.length; j++) {
        this.deck.push(new Card(suit[i], card[j]));
      }
    }
  }
}