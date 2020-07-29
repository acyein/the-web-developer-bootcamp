var numSquares = 6;
var colours = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButtons();
    setUpSquares();
    reset();
}

function setUpSquares(){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
    
            // OR
    
            // if(this.textContent === "Easy"){
            //     numSquares = 3;
            // } else {
            //     numSquares = 6;
            // }
        });
    }
}

function setUpModeButtons(){
    for(var i = 0; i < squares.length; i++){
        // Add click listeneres to squares
        squares[i].addEventListener("click", function(){
            // Grab colour of clicked square
            var clickedColour = this.style.backgroundColor;
            // Compare colour to pickedColour
            if(clickedColour === pickedColour){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                // Change all squares to correct colour
                changeColours(clickedColour);
                h1.style.background = clickedColour;
            } else {
                this.style.backgroundColor ="#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset(){
    // Generate all new colours
    colours = generateRandomColours(numSquares);
    // Pick a new random colour from array
    pickedColour = pickColour();
    // Change colourDisplay to match pickedColour
    colourDisplay.textContent = pickedColour;
    resetButton.textContent = "New Colours";
    messageDisplay.textContent = "";
    // Change colours of squares
    for(var i = 0; i < squares.length; i++){
        if(colours[i]){
            squares[i].style.display = "block";
            // Randomise colours of top 3 squares
            squares[i].style.background = colours[i];
        } else {
            // Hide bottom 3 squares
            squares[i].style.display = "none";
        }
    }
    // Revert h1 background colour to original colour
    h1.style.backgroundColor = "#01796f";
}

resetButton.addEventListener("click", function(){
    reset();
});

function changeColours(colour){
    // Loop through all squares
    for(var i = 0; i < squares.length; i++){
        // Change each colour to match given colour
        squares[i].style.backgroundColor = colour;
    }
}

function pickColour(){
    // Randomise number between 1 and length of colours array (i.e. 6) (Note: 6 is not inclusive in Math.random())
    var random = Math.floor(Math.random() * colours.length);
    return colours[random];
}

function generateRandomColours(num){
    // Make an array
    var arr = []
    // Repeat num times
    for(var i = 0; i < num; i++){
        // Get random colour and push into arr
        arr.push(randomColour());
    }
    // Return that array
    return arr;
}

function randomColour(){
    // Pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256); // Note: 255 is not inclusive so we add 1 to 255
    // Pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // Pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"; // Note: concatenation here
}