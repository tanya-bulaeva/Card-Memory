import { renderStartHtml } from "./renderStartHtml.js";

export const finalPageCeleb = `div class = "conteiner-module">
<div class = "content module modal" > 
<img  class = "img" src = "./static/celebration.png">
<h1 class = "content-title">Вы выиграли!</h1>
<h3 class = "content-title-small">Затраченное время:</h3>
<h3 class ="timer-duration">01.20</h3>
<button class = "button-restart" id = "reset-play">Играть снова </button>
 </div></div>`;
//if ? <img  class = "img" src = "./static/celebration.png"> : <img  class = "img" src = "./static/dead.png">
//if ? <h1 class = "content-title">Вы выиграли!</h1>:<h1 class = "content-title">Вы проиграли!</h1>

const resetPlay = document.getElementById("reset-play");
resetPlay.addEventListener("click", () => {
    renderStartHtml;
});
/*export const finalPageDead{
    `div class = "conteiner-module">
<div class = "content module modal" > 
<img  class = "img" src = "./static/dead.png">
<h1 class = "content-title">Вы проиграли!</h1>
<h3 class = "content-title-small">Затраченное время:</h3>
<h3 class ="timer-duration">01.20</h3>
<button class = "button-restart" id = "reset-play">Играть снова </button>
 </div></div>`;
//if ? <img  class = "img" src = "./static/celebration.png"> : <img  class = "img" src = "./static/dead.png">
//if ? <h1 class = "content-title">Вы выиграли!</h1>:<h1 class = "content-title">Вы проиграли!</h1>

const resetPlay = document.getElementById("reset-play");
resetPlay.addEventListener("click", () => {
    renderStartHtml;
});
}*/
