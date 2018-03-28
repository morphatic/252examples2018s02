// import Deck
const Deck = require("./deck");
const Card = require("./card");

decribe("A Deck of cards", () => {

  const deck;

  beforeAll(() => {
    for ( suit of ['♠','♣','♥','♦'] ) {
      for ( num of ['A','2','3','4','5','6','7','8','9','J','Q', 'K'] ) {
        deck.push(new Card(num, suit));
      }
    }
  })
});