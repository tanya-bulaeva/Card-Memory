//import { renderStartHtml } from "../components/startPage.js";
//import { cardDeck } from "../components/cardDeck.js";

const appEl = document.getElementById("app");
const renderStartHtml = () => {
    const appEl = document.getElementById("app");
    appEl.innerHTML = `<div class = "content">
                <div class = "content-title-box">
                <h1 class = "content-title"> Выбери сложность</h1>
            </div>
                <div class = "game-difficulty" id = "game-form" >
                <form class = "radio-toolbar"  id = "form">           
                 <div class = "input-form">
                   <input type="radio" id="radio1" name="radios" value="1">
                    <label class = "radio-label" for="radio1">1</label>
                    <input type="radio" id="radio2" name="radios" value="2">
                    <label  class = "radio-label" for="radio2">2</label>
                    <input type="radio" id="radio3" name="radios" value="3">
                    <label class = "radio-label" for="radio3">3</label>
             </div>
                <div class = "button-box"> 
                 <button class = "start-button">Старт</button></div>
               </form> 
            </div>
    `;
    const formEl = document.getElementById("form");
    console.log(formEl[0]);
    console.log(formEl[1]);
    console.log(formEl[2]);
    formEl.addEventListener("submit", (event) => {
        event.preventDefault();

        if (formEl[0].checked) {
            appEl.innerHTML = `1 уровень сложности`;
            console.log(1);
            renderGameField();
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
renderStartHtml();

const cardDeck = `     <div class = "game-field">
<div class ="memory-card">
   <img class = "front-face" src="./src/cards-img/front-card img/туз пики.jpg" alt="туз пики">          
<img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
   </div>
     <div class ="memory-card">
       <img class = "front-face" src="./src/cards-img/front-card img/король пики.jpg" alt="король пики"> 
<img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
   </div>
   <div class ="memory-card">
       <img class = "front-face" src="./src/cards-img/front-card img/дама пики.jpg" alt="дама пики"> 
<img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
   </div>
   <div class ="memory-card">
       <img class = "front-face" src="./src/cards-img/front-card img/валет пики.jpg" alt="валет пики"> 
<img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">

   </div>
   <div class ="memory-card">
       <img class = "front-face" src="./src/cards-img/front-card img/10 пики.jpg" alt="10 пики"> 
<img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
   </div>
   <div class ="memory-card">
       <img class = "front-face" src="./src/cards-img/front-card img/9 пики.jpg" alt="9 пики"> 
  <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
   </div>
   <div class ="memory-card">
       <img class = "front-face" src="./src/cards-img/front-card img/8 пики.jpg" alt="8 пики"> 
 <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
   </div>
   <div class ="memory-card">
       <img class = "front-face" src="./src/cards-img/front-card img/7 пики.jpg" alt="7 пики"> 
<img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
   </div>
   <div class ="memory-card">
       <img class = "front-face" src="./src/cards-img/front-card img/6 пики.jpg" alt="6 пики"> 
 <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
   </div>
   <div class ="memory-card">
   <img class = "front-face" src="./src/cards-img/front-card img/туз черви.jpg" alt="туз черви">          
<img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
   </div>
     <div class ="memory-card">
       <img class = "front-face" src="./src/cards-img/front-card img/король черви.jpg" alt="король черви"> 
<img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
   </div>
   <div class ="memory-card">
       <img class = "front-face" src="./src/cards-img/front-card img/дама черви.jpg" alt="дама черви"> 
<img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
   </div>
   <div class ="memory-card">
       <img class = "front-face" src="./src/cards-img/front-card img/валет черви.jpg" alt="валет черви"> 
<img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
   </div>
   <div class ="memory-card">
       <img class = "front-face" src="./src/cards-img/front-card img/10 черви.jpg" alt="10 черви"> 
<img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
   </div>
   <div class ="memory-card">
       <img class = "front-face" src="./src/cards-img/front-card img/9 черви.jpg" alt="9 черви"> 
 <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
   </div>
   <div class ="memory-card">
       <img class = "front-face" src="./src/cards-img/front-card img/8 черви.jpg" alt="8 черви"> 
<img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
   </div>
   <div class ="memory-card">
       <img class = "front-face" src="./src/cards-img/front-card img/7 черви.jpg" alt="7 черви"> 
<img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
   </div>
   <div class ="memory-card">
       <img class = "front-face" src="./src/cards-img/front-card img/6 черви.jpg" alt="6 черви"> 
<img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
   </div>
   <div class ="memory-card">
       <img class = "front-face" src="./src/cards-img/front-card img/туз бубны.jpg" alt="туз бубны">          
    <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
       </div>
         <div class ="memory-card">
           <img class = "front-face" src="./src/cards-img/front-card img/король бубны.jpg" alt="король бубны"> 
    <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
       </div>
       <div class ="memory-card">
           <img class = "front-face" src="./src/cards-img/front-card img/дама бубны.jpg" alt="дама бубны"> 
      <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
       </div>
       <div class ="memory-card">
           <img class = "front-face" src="./src/cards-img/front-card img/валет бубны.jpg" alt="валет бубны"> 
    <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">

       </div>
       <div class ="memory-card">
           <img class = "front-face" src="./src/cards-img/front-card img/10 бубны.jpg" alt="10 бубны"> 
    <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
       </div>
       <div class ="memory-card">
           <img class = "front-face" src="./src/cards-img/front-card img/9 бубны.jpg" alt="9 бубны"> 
      <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
       </div>
       <div class ="memory-card">
           <img class = "front-face" src="./src/cards-img/front-card img/8 бубны.jpg" alt="8 бубны"> 
      <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
       </div>
       <div class ="memory-card">
           <img class = "front-face" src="./src/cards-img/front-card img/7 бубны.jpg" alt="7 бубны"> 
       <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
       </div>
       <div class ="memory-card">
           <img class = "front-face" src="./src/cards-img/front-card img/6 бубны.jpg" alt="6 бубны"> 
     <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
       </div>
       <div class ="memory-card">
           <img class = "front-face" src="./src/cards-img/front-card img/туз крести.jpg" alt="туз крести">          
       <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
           </div>
             <div class ="memory-card">
               <img class = "front-face" src="./src/cards-img/front-card img/король крести.jpg" alt="король крести"> 
          <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
           </div>
           <div class ="memory-card">
               <img class = "front-face" src="./src/cards-img/front-card img/дама крести.jpg" alt="дама крести"> 
      <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
           </div>
           <div class ="memory-card">
               <img class = "front-face" src="./src/cards-img/front-card img/валет крести.jpg" alt="валет крести"> 
      <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">

           </div>
           <div class ="memory-card">
               <img class = "front-face" src="./src/cards-img/front-card img/10 крести.jpg" alt="10 крести"> 
       <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
           </div>
           <div class ="memory-card">
               <img class = "front-face" src="./src/cards-img/front-card img/9 крести.jpg" alt="9 крести"> 
         <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
           </div>
           <div class ="memory-card">
               <img class = "front-face" src="./src/cards-img/front-card img/8 крести.jpg" alt="8 крести"> 
        <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
           </div>
           <div class ="memory-card">
               <img class = "front-face" src="./src/cards-img/front-card img/7 крести.jpg" alt="7 крести"> 
          <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
           </div>
           <div class ="memory-card">
               <img class = "front-face" src="./src/cards-img/front-card img/6 крести.jpg" alt="6 крести"> 
        <img class = "back-face" src="./src/cards-img/back.jpg" alt="рубашка">
           </div>
</div>  `;

const renderGameField = () => {
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
