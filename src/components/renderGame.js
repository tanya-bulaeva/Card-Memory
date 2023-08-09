import { cardDeck } from "./cardDeck";
import { appEl, renderStartHtml } from "./renderStartHtml.js";
export let cards = document.querySelectorAll(".memory-card");

/*let countDownDate = new Date().getTime();
let now = new Date().getTime();
export let distance = countDownDate - now;

export let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
min = min < 10 ? "0" + min : min;
export let sec = Math.floor((distance % (1000 * 60)) / 1000);
sec = sec < 10 ? "0" + sec : sec;
*/
export function renderGame(size) {
    let cardsDeck = cardDeck.sort(() => Math.random() - 0.5).slice(0, size / 2);
    let dublicateCardArray = cardsDeck.concat(cardsDeck);

    const headerGame = `   
    <div class = "header">
<div class = "timer">
    <div class = "timer-header" id = "time"> 
        <div class = "timer-header-min" id = "min">min</div>
        <div class = "timer-header-sek" id = "sek">sek</div>
    </div>
    <div class = "timer-duration" id = "timer">00.00</div>
</div>
<div class = "restart">
    <button class = "button-restart" id = "reset">Начать заново</button>
</div>

</div>`;

    appEl.innerHTML = `<div class = "main-field">
    ${headerGame} <div class = "game-field">${dublicateCardArray.join("")}
    </div>
    </div>`;

    const reset = document.getElementById("reset");
    reset.addEventListener("click", () => {
        renderStartHtml();
    });
    const cards = document.querySelectorAll(".memory-card");
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    /*function flipCard() {
    this.classList.add("flip");
    }*/
    //показать все карты
    function showAll() {
        for (let el of cards) {
            el.classList.add("flip");
        }
    }

    setTimeout(showAll, 1000);
    //закрыть все карты через 5 секунд
    function hideAll() {
        for (let el of cards) {
            el.classList.remove("flip");
        }
    }
    setTimeout(hideAll, 5000);
    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;
        this.classList.add("flip");
        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }
        secondCard = this;
        lockBoard = true;
        checkForMatch();
    }

    function checkForMatch() {
        let isMatch = firstCard.dataset.index === secondCard.dataset.index;
        isMatch ? disableCards() : unflipCards();
    }

    function disableCards() {
        setTimeout(() => {
            firstCard.removeEventListener("click", flipCard);
            secondCard.removeEventListener("click", flipCard);
            resetBoard();
            alert("Вы победили!");
        }, 1000);
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            resetBoard();
            alert("Вы проиграли!");
        }, 1000);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    (function shuffle() {
        cards.forEach((card) => {
            let ramdomPos = Math.floor(Math.random() * 36);
            card.style.order = ramdomPos;
        });
    })();

    cards.forEach((card) => card.addEventListener("click", flipCard));
}
