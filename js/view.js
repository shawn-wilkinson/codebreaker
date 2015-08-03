
var GameView = function(game){
  this.colors = ["#6AF25D","#35203B","#EA2E49","#DB4105","#FFF71D","#1695A3","#8A0917","#00261C"]
}

GameView.prototype.displayInstructions = function(){
  alert("HELLO!");
}

GameView.prototype.clearBoard = function(){
  //FILL THIS OUT - CLEAN OUT THE PREVIOUS GAME
  this.clearInputArea();
  this.clearPegBoard();
};

GameView.prototype.displayGuess = function(guess,guessNum){
  var guessField = $("#guess-"+guessNum)
  for(i=0;i<4;i++){
    console.log(guess[i])
    guessField.find("#peg-" + (i+1)).css("background-color",this.returnColor(guess[i]));
  };
};

GameView.prototype.returnColor = function(number){
  return this.colors[number]
}

GameView.prototype.clearInputArea = function(){
  $("#guess-input-board .color-option").remove();
};

GameView.prototype.clearPegBoard = function(){
  $("#guess-board .peg-input").css("background-color","#E1FFFD");
};
