import { renderStartHtml } from "../components/startPage.js";
import { cardDeck } from "../components/cardDeck.js";
renderStartHtml();

const appEl = document.getElementById("app");

export const renderGameField = () => {
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
${cardDeck}`;

    const cards = document.querySelectorAll(".memory-card");

    function flipCard() {
        this.classList.toggle("flip");
    }

    cards.forEach((card) => card.addEventListener("click", flipCard));
};
