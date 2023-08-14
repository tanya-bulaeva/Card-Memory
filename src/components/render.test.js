const { it, expect, describe } = require("@jest/globals");
//const { renderGame } = require("./renderGame");
const { cardDeck }= require("./cardDeck")
/*
describe("function render game field", () => {
it ("should the field size from the selected level", () => {
const level = 6;
const render = renderGame(level)
    expect(render).toHaveLength(6);
});
it ("returns NaN if level is not a number", () => {
    const level = "";
    const render = renderGame(level)
    expect(render).toBeNaN;
    });

})
*/
describe("card deck", () => {
    it ("checking the size of a deck of cards", () => {
    const cards = cardDeck; 
     expect(cards).toHaveLength(36);  
    })
})

