var winnerButtonId = Math.floor(Math.random() * 3) + 1;
document.getElementById("btn1").addEventListener("click", function(){
    if(this.id == "btn" + winnerButtonId) {
        alert("castigator");
    } else {
        alert("necastigator");
    }
});
document.getElementById("btn2").addEventListener("click", function(){
    if(this.id == "btn" + winnerButtonId) {
        alert("castigator");
    } else {
        alert("necastigator");
    }
});
document.getElementById("btn3").addEventListener("click", function() {
    if(this.id == "btn" + winnerButtonId) {
        alert("castigator");
    } else {
        alert("necastigator");
    }
});