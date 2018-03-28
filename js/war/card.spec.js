// import the Card class
const Card = require("./card");

describe("A playing Card", () => {

  it("has a suit", () => {
    const king_of_spades   = new Card('K', '♠');
    const king_of_clubs    = new Card('K', '♣');
    const king_of_hearts   = new Card('K', '♥');
    const king_of_diamonds = new Card('K', '♦');
    expect(king_of_spades.suit).toBe('♠');
    expect(king_of_clubs.suit).toBe('♣');
    expect(king_of_hearts.suit).toBe('♥');
    expect(king_of_diamonds.suit).toBe('♦');
  });

  it("has a number", () => {

  });
});