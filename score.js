// Iteration 5: Store the player score and display it on the game over screen
let score=localStorage.getItem("scoreValue");
document.getElementById("score-board").innerText=score;


function startGame(){
    location.href="./game.html";
}