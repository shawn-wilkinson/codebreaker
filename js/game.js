function randomNumber(){
  return (Math.random() * (8 - 1 + 1) ) << 0
};

var Game = function(view){
  this.view = view;
};

Game.prototype.newGame = function(){
 this.setCode();
 this.timesGuessed = 0;
};

Game.prototype.setCode=function(){
  this.code = [randomNumber().toString(),randomNumber().toString(),randomNumber().toString(),randomNumber().toString()];
  console.log(this.code);
};

Game.prototype.determineRoundResult = function(guess){
  var guess = guess;
  if (guess[0] == this.code[0] && guess[1] == this.code[1] && guess[2] == this.code[2] && guess[3] == this.code[3]){
    this.view.gameWon();
  } else if (this.timesGuessed == 10){
    this.view.gameOver();
  };
};

Game.prototype.makeGuess=function(){
  this.timesGuessed ++;
  var guess = this.obtainGuess();
  this.determineRoundResult(guess);
  this.view.displayGuess(guess,this.timesGuessed);
  var matches = this.determineMatches(guess);
  this.view.updateResultPegs(matches,this.timesGuessed);
};

Game.prototype.obtainGuess=function(){
  var num1 = $("#input-1").find(".color-option").attr("name");
  var num2 = $("#input-2").find(".color-option").attr("name");
  var num3 = $("#input-3").find(".color-option").attr("name");
  var num4 = $("#input-4").find(".color-option").attr("name");
  return [num1,num2,num3,num4];
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
  var guess = guess;
  var tempCode = this.code.slice(0);
  var RawColorMatches = 0
  for(i=0;i<4;i++){
    var colorPresent = $.inArray(guess[i], tempCode);
    if (colorPresent > -1){
      tempCode[colorPresent] = null;
      RawColorMatches ++;
    };
  };
  return RawColorMatches;
};