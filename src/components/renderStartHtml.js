import { renderGame } from "./renderGame.js";
import { renderGameField } from "./renderGameField.js";
export const renderStartHtml = () => {
    const appEl = document.getElementById("app");
    appEl.innerHTML = `<div class = "content">
                <div class = "content-title-box">
                <h1 class = "content-title"> Выбери сложность</h1>
            </div>
                <div class = "game-difficulty" id = "game-form" >
                <form class = "radio-toolbar"  id = "form">           
                 <div class = "input-form">
                   <input type="radio" id="radio1" name="level" value="6" class = "level">
                    <label class = "radio-label" for="radio1">1</label>
                    <input type="radio" id="radio2" name="level" value="12" class = "level">
                    <label  class = "radio-label" for="radio2">2</label>
                    <input type="radio" id="radio3" name="level" value="18" class ="level">
                    <label class = "radio-label" for="radio3">3</label>
             </div>
                <div class = "button-box"> 
                 <button class = "start-button">Старт</button></div>
               </form> 
            </div>
    `;
    const formEl = document.getElementById("form");
    formEl.addEventListener("submit", (event) => {
        event.preventDefault();

        if (formEl[0].checked) {
            appEl.innerHTML = `1 уровень сложности`;
            console.log(1);
            renderGame();
        }
        if (formEl[1].checked) {
            appEl.innerHTML = `2 уровень сложности`;
            console.log(2);
            renderGameField();
        }
        if (formEl[2].checked) {
            appEl.innerHTML = `3 уровень сложности`;
            console.log(3);
            renderGameField();
        }
    });
};
