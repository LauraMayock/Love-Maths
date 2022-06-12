// Wait until the Dom content is loaded before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});



function runGame() {

}

function getAnswer() {

}

function calculateCorrecctAnswer() {
    
}

function incrementscore() {
    
}

function incrementWrongAnswer() {
    
}

function displayAdditionQusetion() {
    
}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {

    
}
function displayDivideQustion() {
    
}

