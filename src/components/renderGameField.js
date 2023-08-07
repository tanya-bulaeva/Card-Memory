import { cardDeck } from "./cardDeck.js";
export function renderGameField() {
    let cardDeckDouble1 = cardDeck;
    let cardDeckDouble2 = cardDeck;
    let cardArray = cardDeckDouble1.concat(cardDeckDouble2);

    const appEl = document.getElementById("app");
    const headerGame = `    <div class = "header">
<div class = "timer">
    <div class = "timer-header"> 
        <div class = "timer-header-min">min</div>
        <div class = "timer-header-sek">sek</div>
    </div>
    <div class = "timer-duration">00.00</div>
</div>
<div class = "restart">
    <button class = "button-restart">Начать заново</button>
</div>
</div>`;

    appEl.innerHTML = `
    ${headerGame} 
    ${cardArray}`;
}
