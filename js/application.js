$(document).ready(function() {

  $("#display-instructions").on("click", function(event){
    gameView.displayInstructions();
  });

  $("#start-new-game").on("click", function(event){
    gameView.clearBoard();
    game.newGame();
  });


  var currentColor = {}
  $("div .color-option").draggable({
    helper:"clone",
    drag:function(ev,ui){
      currentColor.color= this;
      // $(this).css("background-color",$(this).attr("background-color"));
      currentColor.helper = ui.helper
    }
  });

$(".peg-input").droppable({
    accept:".color-option",
    drop: function(ev,ui){
      var selectedItem = ui.draggable.clone();
      $(this).html(selectedItem);
    }
  });

$("#make-guess-button").on("click",function(event){
  alert("GUESS MADE!");
});








});
