/* eslint-disable @typescript-eslint/no-this-alias */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */

import { cardDeck } from "./cardDeck";
import { appEl, renderStartHtml } from "./renderStartHtml";
export function renderGame(size: number) {
    //генерация массива в зависимости от уровня
    const cardsDeck = cardDeck
        .sort(() => Math.random() - 0.5)
        .slice(0, size / 2);
    //создание дубликата массива
    const dublicateCardArray = cardsDeck
        .concat(cardsDeck)
        .sort(() => Math.random() - 0.5);

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
    if (appEl) {
        appEl.innerHTML = `<div class = "main-field ">
        ${headerGame} <div class = "game-field">${dublicateCardArray.join("")}
        </div>
        `;
    }

    //обработчик событий на кнопку сброса
    const reset = document.getElementById("reset") as HTMLElement;
    if (reset) {
        reset.addEventListener("click", () => {
            renderStartHtml();
        });
    }
    //переменные
    const cards = document.querySelectorAll(".memory-card");
    let hasFlippedCard = false;
    let state: number;
    let firstCard: HTMLElement | null, secondCard: HTMLElement | null;
    //let second = 0;
    //let minute = 0 ;
    // let hour = 0;
    const timer = document.getElementById("timer") as HTMLElement;
    let interval;

    //показать все карты
    function showAll() {
        if (cards) {
            const itemArray = Array.from(cards);
            for (const card of itemArray) {
                card.classList.add("flip");
            }
        }
    }
    setTimeout(showAll, 1000);

    //закрыть все карты через 5 секунд
    function hideAll() {
        if (cards) {
            const itemArray = Array.from(cards);
            for (const card of itemArray) {
                card.classList.remove("flip");
            }
        }
    }

    setTimeout(hideAll, 5000);

    const startTime = Date.now();
    function startTimer() {
        interval = setInterval(() => {
            const currentTime = Date.now();
            const elapsedTime = currentTime - startTime;
            const minutes = Math.floor(elapsedTime / 60000)
                .toString()
                .padStart(2, "0");
            const seconds = (Math.floor((elapsedTime % 60000) / 1000) - 5)
                .toString()
                .padStart(2, "0");
            timer.innerHTML = `${minutes}.${seconds}`;
        }, 1000);
        state = 0;
    }

    //
    setTimeout(startTimer, 5000);
    let lockBoard = false;
    //переворачивание карт
    function flipCard(this: HTMLElement) {
        if (this === firstCard) return;
        this.classList.add("flip");

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this;
            return;
        }
        secondCard = this;
        lockBoard = true;
        state += 2;
        checkForMatch();
    }
    //сравнение карт
    function checkForMatch() {
        const isMatch = firstCard!.dataset.index === secondCard!.dataset.index;
        if (!isMatch) {
            setTimeout(() => {
                if (firstCard && secondCard) {
                    firstCard!.classList.remove("flip");
                    secondCard!.classList.remove("flip");
                }
                clearTimeout(setTimeout(startTimer));
                resetBoard();
                finalPageDead();
            }, 1000);
        }
        if (isMatch) {
            firstCard!.removeEventListener("click", flipCard);
            secondCard!.removeEventListener("click", flipCard);
            resetBoard();
            if (state === dublicateCardArray.length) {
                clearTimeout(setTimeout(startTimer));
                setTimeout(() => {
                    finalPageCeleb();
                }, 1000);
            }
        }
        //обновление данных
        function resetBoard() {
            [hasFlippedCard, lockBoard] = [false, false];
            [firstCard, secondCard] = [null, null];
        }
    }

    //страница победы
    const finalPageCeleb = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const minutes = Math.floor(elapsedTime / 60000)
            .toString()
            .padStart(2, "0");
        const seconds = (Math.floor((elapsedTime % 60000) / 1000) - 5)
            .toString()
            .padStart(2, "0");
        const duration = `${minutes}` + ":" + `${seconds}`;
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
        const resetPlay = document.getElementById("reset-play") as HTMLElement;
        resetPlay.addEventListener("click", () => {
            renderStartHtml();
        });
    };
    //страница проигрыша
    const finalPageDead = () => {
        const currentTime = Date.now();
        const elapsedTime = currentTime - startTime;
        const minutes = Math.floor(elapsedTime / 60000)
            .toString()
            .padStart(2, "0");
        const seconds = (Math.floor((elapsedTime % 60000) / 1000) - 5)
            .toString()
            .padStart(2, "0");
        const duration = `${minutes}` + ":" + `${seconds}`;
        const page = ` <div class = "conteiner-module">"
            <div class = "content modal" > 
            <img  class = "img" src = "./static/dead.png">
            <h1 class = "content-title">Вы проиграли!</h1>
            <h3 class = "content-title-small">Затраченное время:</h3>
            <h3 class ="timer-duration">${duration}</h3>
            <button class = "button-restart" id = "reset-play">Играть снова </button>
             </div></div>`;
        appEl.innerHTML = page;
        const resetPlay = document.getElementById("reset-play") as HTMLElement;
        resetPlay.addEventListener("click", () => {
            renderStartHtml();
        });
    };

    //обработчик на каждую карточку при клике
    cards.forEach((card) => card.addEventListener("click", flipCard));
}
