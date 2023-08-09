/* eslint-disable no-unused-vars */
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
    console.log(dublicateCardArray);
    const headerGame = `   
    <div class = "header">
<div class = "timer">
    <div class = "timer-header"> 
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
    document.getElementById("reset").addEventListener("click", () => {
        renderStartHtml();
    });

    // The timer function

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

    function startTimer() {
        let second = 0;
        let minute = 0;
        let hour = 0;
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;
        let timer = document.getElementById("timer");
        let interval;
        interval = setInterval(function () {
            timer.innerHTML = minute + "." + second;
            second++;
            second = second < 10 ? "0" + second : second;
            if (second === 60) {
                minute++;
                second = 0;
                minute = minute < 10 ? "0" + minute : minute;
                second = second < 10 ? "0" + second : second;
            }
            if (minute === 60) {
                hour++;
                minute = 0;
            }
        }, 1000);
    }
    setTimeout(startTimer, 4000);

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
            //alert("Вы победили!");
        }, 1000);
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            resetBoard();
            //alert("Вы проиграли!");
        }, 1000);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    cards.forEach((card) => card.addEventListener("click", flipCard));
}
