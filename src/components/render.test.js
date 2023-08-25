
const { it, expect, describe } = require("@jest/globals");
const { cardDeck } = require("./cardDeck");
describe("card deck", () => {
    it ("should check array is not empty", () => {
    const cards = cardDeck;
    expect(cards).not.toBeNull();
    })
    it ("should checking the size of a deck of cards", () => {
    const cards = cardDeck; 
     expect(cards).toHaveLength(36);  
    })
    it ("should check the size of the deck of cards if the array changes", () => {
    const cards = [1,1,1,1,1,1,1,1,1,1]
    expect(cards).toHaveLength(10);  
    })  
})
