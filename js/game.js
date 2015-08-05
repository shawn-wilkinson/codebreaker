

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
};

Game.prototype.determineRoundResult = function(guess){
  var guess = guess;
  // this.checkGuess(guess);
  if (guess[0] == this.code[0] && guess[1] == this.code[1] && guess[2] == this.code[2] && guess[3] == this.code[3]){
    this.view.gameWon();
  } else if (this.timesGuessed == 10){
    this.view.gameOver();
  };
};


Game.prototype.makeGuess=function(){
  this.timesGuessed ++;
  var guess = this.obtainGuess();

  this.view.displayGuess(guess,this.timesGuessed);
  var matches = this.determineMatches(guess);
  this.view.updateResultPegs(matches,this.timesGuessed);
  this.determineRoundResult(guess);
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

//BUGGY - MATH ISSUE need to account for too many raw color matches
Game.prototype.countRawColorMatches = function(guess){
  var guess = guess;
  var tempCode = this.code.slice(0);
  var rawColorMatches = 0;
  console.log(guess)
  console.log(this.code);
  for(cNum=0;cNum<4;cNum++){
    for(gNum =0;gNum<4;gNum++){
      console.log("GUESS: " + guess);
      console.log("CODE: " + tempCode);
      console.log( tempCode[cNum] + " " + guess[gNum]);
      if(tempCode[cNum] == guess[gNum]){
        rawColorMatches ++;
        tempCode[cNum] = null;
        console.log("MATCH!!!");
        console.log("guess" + guess[gNum]);
      };
    };
  };
  return rawColorMatches
};

