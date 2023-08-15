const { it, expect, describe } = require("@jest/globals");
//const { renderGame } = require("./renderGame");
const { cardDeck }= require("./cardDeck")

/*describe("function render game field", () => {
it ("should the field size from the selected level", () => {
const level = 6;
const render = renderGame(level)
    expect(render).toBe(6);
});
*/
describe("card deck", () => {
    it ("should checking the size of a deck of cards", () => {
    const cards = cardDeck; 
     expect(cards).toHaveLength(36);  
    })
    it ("should checking the size of a deck of cards", () => {
    const cards = [1,1,1,1,1,1,1,1,1,1]
    expect(cards).toHaveLength(10);  
    })   
})

