function randomNumber(){
  return (Math.random() * (8 - 1 + 1) ) << 0
};


var GameView = function(game){
  this.game = game;
}

GameView.prototype.displayInstructions = function(){
  alert("HELLO!");
}








var Game = function(){};


Game.prototype.newGame = function(){
 console.log("new game!!");
 game.setCode();
 this.guessNum = 0;
};

Game.prototype.setCode=function(){
  this.code = [randomNumber(),randomNumber(),randomNumber(),randomNumber()];
  console.log(this.code);

};








game = new Game;
gameView = new GameView(game);

