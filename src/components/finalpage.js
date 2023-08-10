import { appEl, renderStartHtml } from "./renderStartHtml.js";

export const finalPageCeleb = () => {
    const page = `
    div class = "conteiner-module">
<div class = "content module modal" > 
<img  class = "img" src = "./static/celebration.png">
<h1 class = "content-title">Вы выиграли!</h1>
<h3 class = "content-title-small">Затраченное время:</h3>
<h3 class ="timer-duration">00.00</h3>
<button class = "button-restart" id = "reset-play">Играть снова </button>
 </div>
 </div>`;

    appEl.innerHTML = page;
    renderStartHtml();
};

export const finalPageDead = () => {
    const page = `
    div class = "conteiner-module">
    <div class = "content modal" > 
    <img  class = "img" src = "./static/dead.png">
    <h1 class = "content-title">Вы проиграли!</h1>
    <h3 class = "content-title-small">Затраченное время:</h3>
    <h3 class ="timer-duration">01.20</h3>
    <button class = "button-restart" id = "reset-play">Играть снова </button>
     </div>
     </div>`;

    appEl.innerHTML = page;
    const resetPlay = document.getElementById("reset-play");
    resetPlay.addEventListener("click", () => {
        renderStartHtml();
    });
};
export let min = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
min = min < 10 ? "0" + min : min;
export let sec = Math.floor((distance % (1000 * 60)) / 1000);
sec = sec < 10 ? "0" + sec : sec;
let countDownDate = new Date().getTime();
let now = new Date().getTime();
let distance = countDownDate - now;
