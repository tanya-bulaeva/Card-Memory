import { renderGame } from "./renderGame";
export const appEl = document.getElementById("app") as HTMLElement;
export const renderStartHtml = () => {
    if (appEl) {
    appEl.innerHTML = `<div class = "content">
                <div class = "content-title-box">
                <h1 class = "content-title"> Выбери сложность</h1>
            </div>
                <div class = "game-difficulty" id = "game-form" >
                <form class = "radio-toolbar"  id = "form">           
                 <div class = "input-form">
                   <input type="radio" id="radio1" name="level" value="6" class = "easy-level">
                    <label class = "radio-label" for="radio1">1</label>
                    <input type="radio" id="radio2" name="level" value="12" class = "medium-level">
                    <label  class = "radio-label" for="radio2">2</label>
                    <input type="radio" id="radio3" name="level" value="18" class ="hard-level">
                    <label class = "radio-label" for="radio3">3</label>
             </div>
                <div class = "button-box"> 
                 <button class = "start-button">Старт</button></div>
               </form> 
            </div>
    `}
    const formEl : any =  document.getElementById("form");
    if (formEl) {
    formEl.addEventListener("submit", (event : MouseEvent) => {
        event.preventDefault();

        if (formEl[0].checked) {
            appEl.innerHTML = `1 уровень сложности`;
            console.log(1);
            renderGame(6);
        }
        if (formEl[1].checked) {
            appEl.innerHTML = `2 уровень сложности`;
            console.log(2);
            renderGame(12);
        }
        if (formEl[2].checked) {
            appEl.innerHTML = `3 уровень сложности`;
            console.log(3);
            renderGame(18);
        }
    })}
};
