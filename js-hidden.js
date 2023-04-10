let winnerButtonId = Math.floor(Math.random() * 3) + 1;

function checkWinner(clickedButtonId) {
    if(clickedButtonId == "btn" + winnerButtonId) {
        alert("castigator");
    } else {
        alert("necastigator");
    }
}