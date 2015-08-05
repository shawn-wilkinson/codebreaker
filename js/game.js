

function randomNumber(){
  return (Math.random() * (8 - 1 + 1) ) << 0
};


var Game = function(view){
  this.view = view;
};


Game.prototype.newGame = function(){
 game.setCode();
 console.log("HEYY");
 console.log(this.code);
 this.timesGuessed = 0;
};

Game.prototype.setCode=function(){
  this.code = [randomNumber().toString(),randomNumber().toString(),randomNumber().toString(),randomNumber().toString()];
  console.log(this.code);
};

Game.prototype.makeGuess=function(){
  this.timesGuessed ++;
  var guess = this.obtainGuess();
  this.view.displayGuess(guess,this.timesGuessed);
  var matches = this.determineMatches(guess);
  this.view.updateResultPegs(matches,this.timesGuessed);
  this.determineRoundResult(guess);

    //var result = this.checkGuess(guess);
    //DETERMINE NEXT STEP METHOD (WON/NEXT ROUND/GAME OVER)
  // check result against code
  // update guessed colors and results accordingly;
  // Check if they won, the game is over, or they still play
  //

};

Game.prototype.determineRoundResult = function(guess){
  var guess = guess;
  console.log(guess);
  console.log(this.code);
  this.checkGuess(guess);
  if (guess == this.code){
    this.view.gameWon();
  } else if (this.timesGuessed == 10){
    this.view.gameOver();
  };
};

Game.prototype.obtainGuess=function(){
var num1 = $("#input-1").find(".color-option").attr("name");
  var num2 = $("#input-2").find(".color-option").attr("name");
  var num3 = $("#input-3").find(".color-option").attr("name");
  var num4 = $("#input-4").find(".color-option").attr("name");
  return [num1,num2,num3,num4];
};

Game.prototype.checkGuess=function(guess){
  if (guess[0] == this.code[0] && guess[1] == this.code[1] && guess[2] == this.code[2] && guess[3] == this.code[3]){
    alert("You Won! I'm soooo proud!");
  };

};

Game.prototype.determineMatches=function(guess){
  var guess = guess;
  var directMatches = this.countDirectMatches(guess);
  var rawColorMatches = this.countRawColorMatches(guess);
  var colorMatches = rawColorMatches - directMatches;
  return[directMatches,colorMatches]
};

Game.prototype.countDirectMatches = function(guess){
  var directMatches = 0;
  for(i=0;i<4;i++){
      if(this.code[i] === guess[i]){directMatches ++ };
    };
    return directMatches
};

Game.prototype.countRawColorMatches = function(guess){
  var rawColorMatches = 0;
  for(cNum=0;cNum<4;cNum++){
    for(gNum =0;gNum<4;gNum++){
      if(this.code[cNum] === guess[gNum]){
        rawColorMatches ++;
        guess[gNum] = null;
      };
    };
  };
  return rawColorMatches
};

