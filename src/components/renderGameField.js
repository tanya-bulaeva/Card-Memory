import { cardDeck } from "./cardDeck.js";
import { renderStartHtml } from "./renderStartHtml.js";

export function renderGameField() {
    let cardsDeck = cardDeck;
    let dublicateCardArray = cardsDeck.concat(cardsDeck);

    const appEl = document.getElementById("app");
    const headerGame = `   <div class = "header">
<div class = "timer">
    <div class = "timer-header"> 
        <div class = "timer-header-min" id = "min">min</div>
        <div class = "timer-header-sek" id = "sek">sek</div>
    </div>
    <div class = "timer-duration"><span id="minutes">00</span>.<span id="seconds">00</span></div>
</div>
<div class = "restart">
    <button class = "button-restart" id = "reset">Начать заново</button>
</div>

</div>`;

    appEl.innerHTML = `<div class = "main-field">
    ${headerGame} ${dublicateCardArray.join("")}
    </div>
    <div class = "conteiner-module">
    <div class = "content module modal" > 
    <img  class = "img" src = "./static/celebration.png">
    <h1 class = "content-title">Вы выиграли!</h1>
    <h3 class = "content-title-small">Затраченное время:</h3>
    <h3 class ="timer-duration">01.20</h3>
    <button class = "button-restart" id = "reset-play">Играть снова </button>
    </div></div>`;
    console.log(dublicateCardArray);
    const reset = document.getElementById("reset");
    console.log(reset);
    reset.addEventListener("click", () => {
        renderStartHtml();
    });
    const resetPlay = document.getElementById("reset-play");
    resetPlay.addEventListener("click", () => {
        renderStartHtml();
    });
}
//if ? <img  class = "img" src = "./static/celebration.png"> : <img  class = "img" src = "./static/dead.png">
//if ? <h1 class = "content-title">Вы выиграли!</h1>:<h1 class = "content-title">Вы проиграли!</h1>
