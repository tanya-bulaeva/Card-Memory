/* eslint-disable no-unused-vars */
import { cardDeck } from "./cardDeck";
//import { finalPageCeleb, finalPageDead } from "./finalpage.js";
import { appEl, renderStartHtml } from "./renderStartHtml.js";
export let cards = document.querySelectorAll(".memory-card");

export function renderGame(size) {
    //генерация массива в зависимости от уровня
    let cardsDeck = cardDeck.sort(() => Math.random() - 0.5).slice(0, size / 2);
    //создание дубликата массива
    let dublicateCardArray = cardsDeck
        .concat(cardsDeck)
        .sort(() => Math.random() - 0.5);

    console.log(dublicateCardArray);
    //верстка экрана
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
    </div>`;
    //обработчик событий на кнопку
    document.getElementById("reset").addEventListener("click", () => {
        renderStartHtml();
    });
    //переменные
    const cards = document.querySelectorAll(".memory-card");
    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard, secondCard;
    //переменные
    let second = 0;
    let minute = 0;
    let hour = 0;
    let timer = document.getElementById("timer");
    let interval;
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

    //let countDownDate = new Date().getTime(); //начало отсчета
    let countdownDate = new Date().setSeconds(new Date().getSeconds() + 30);
    //включение таймера
    function startTimer() {
        let now = new Date().getTime(); //на момент окончания
        minute = minute < 10 ? "0" + minute : minute;
        second = second < 10 ? "0" + second : second;
        interval = setInterval(function () {
            let distance = countdownDate - now; //разница между началом и концом
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
    setTimeout(startTimer, 3000);
    //переворачивание карт
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
    //сравнение карт
    function checkForMatch() {
        let isMatch = firstCard.dataset.index === secondCard.dataset.index;
        isMatch ? disableCards() : unflipCards();
    }
    //страница победы
    const finalPageCeleb = () => {
        let duration = `${minute}` + ":" + `${second}`;
        const page = `
        <div class = "conteiner-module">
    <div class = "content modal" > 
    <img  class = "img" src = "./static/celebration.png">
    <h1 class = "content-title">Вы выиграли!</h1>
    <h3 class = "content-title-small">Затраченное время:</h3>
    <h3 class ="timer-duration">${duration}</h3>
    <button class = "button-restart" id = "reset-play">Играть снова </button>
     </div></div>`;
        appEl.innerHTML = page;
        const resetPlay = document.getElementById("reset-play");
        resetPlay.addEventListener("click", () => {
            renderStartHtml();
        });
    };
    //страница проигрыша
    const finalPageDead = () => {
        let duration = `${minute}` + ":" + `${second}`;
        const page = `<div class = "conteiner-module">
        <div class = "content modal" > 
        <img  class = "img" src = "./static/dead.png">
        <h1 class = "content-title">Вы проиграли!</h1>
        <h3 class = "content-title-small">Затраченное время:</h3>
        <h3 class ="timer-duration">${duration}</h3>
        <button class = "button-restart" id = "reset-play">Играть снова </button>
         </div></div>`;
        appEl.innerHTML = page;
        const resetPlay = document.getElementById("reset-play");
        resetPlay.addEventListener("click", () => {
            renderStartHtml();
        });
    };
    //если сошлась пара
    function disableCards() {
        setTimeout(() => {
            firstCard.removeEventListener("click", flipCard);
            secondCard.removeEventListener("click", flipCard);
            resetBoard();
            //alert("Вы победили!");
        }, 1000);
    }
    //если не сошлась пара
    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            resetBoard();
            //alert("Вы проиграли!");
            clearInterval(interval);
            finalPageDead();
        }, 1000);
    }
    //обновление данных
    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }
    //обработчик на каждую карточку при клике
    cards.forEach((card) => card.addEventListener("click", flipCard));
}
