var t1Button = document.querySelector("#t1");
var t2Button = document.getElementById("t2");
var resetButton = document.getElementById("reset");
var t1Display = document.querySelector("#t1Display");
var t2Display = document.querySelector("#t2Display");
var numInput = document.querySelector("input[type='number']");
var winningScoreDisplay = document.querySelector("p span");
var t1Score = 0;
var t2Score = 0;
var gameOver = false;
var winningScore = 10;

t1Button.addEventListener("click", function(){
    if(!gameOver){
        t1Score++;                                  //Increments score
        if(t1Score === winningScore){
            t1Display.classList.add("winner");      //Adds green colour styling from CSS
            gameOver = true;                        //Stops score from incrementing
        }
        t1Display.textContent = t1Score;            //Changes display of score
    }
});

t2Button.addEventListener("click", function(){
    if(!gameOver){
        t2Score++;
        if(t2Score === winningScore){
            t2Display.classList.add("winner");
            gameOver = true;
        }
    }
    t2Display.textContent = t2Score;
});

resetButton.addEventListener("click", function(){
    reset();
});

function reset() {
    t1Score = 0;                            //Changes score to 0
    t2Score = 0;
    t1Display.textContent = t1Score;        //Or = 0
    t2Display.textContent = t2Score;
    t1Display.classList.remove("winner");   //Removes green colour styling
    t2Display.classList.remove("winner");   
    gameOver = false;                       //Enables user to keep playing
}

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;   //Takes value of numInput;
    winningScore = Number(this.value);              //Sets winning score to number given by user in number format
    reset();
});

