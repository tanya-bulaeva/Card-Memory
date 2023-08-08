import { renderGameField } from "./renderGameField.js";
export let cards = document.querySelectorAll(".memory-card");
//let min = 0;
//min = min < 10 ? "0" + min : min;
//let sek = 0;
//sek = sek < 10 ? "0" + sek : sek;
let countDownDate = new Date().getTime();
let now = new Date().getTime();
let distance = countDownDate - now;
export let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
min = min < 10 ? "0" + min : min;
export let sec = Math.floor((distance % (1000 * 60)) / 1000);
sec = sec < 10 ? "0" + sec : sec;

export const renderGame = () => {
    renderGameField();

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
            // alert("Вы победили!");
        }, 1000);
    }

    function unflipCards() {
        setTimeout(() => {
            firstCard.classList.remove("flip");
            secondCard.classList.remove("flip");
            resetBoard();
            //  alert("Вы проиграли!");
        }, 1000);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    (function shuffle() {
        cards.forEach((card) => {
            let ramdomPos = Math.floor(Math.random() * 12);
            card.style.order = ramdomPos;
        });
    })();

    cards.forEach((card) => card.addEventListener("click", flipCard));
};
