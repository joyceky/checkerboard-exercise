"use strict";
// Your JS goes here
$( document ).ready(function() {
  createContainer();
  // buildCheckerboard();
  // buildMulticolorBoard();
  buildFlashyBoard();
});

function createContainer(){
  $("body").html("<div id=\"container\"></div>");
  $("#container").css({
          "height": "100%",
          "width": "100%"
  });
}

function buildCheckerboard() {
  var blackSquare = {
      "background-color": "black",
      "width": "11.1%",
      "float": "left",
      "padding-bottom": "11.1%",
      "height": "11.1%"
    };

  var redSquare = {
      "background-color": "red",
      "width": "11.1%",
      "float": "left",
      "padding-bottom": "11.1%",
      "height": "11.1%"
    };

  var container = $("#container");
  for (var i = 0; i <=48; i++) {
    $("<div></div>").css(blackSquare).appendTo(container);
    $("<div></div>").css(redSquare).appendTo(container);
 }
 $("<div></div>").css(blackSquare).appendTo(container);
}

/**************************************************************************/

function buildMulticolorBoard() {
  var container = $("#container");

  container.empty();

  var multiSquare = {
      "width": "11.1%",
      "float": "left",
      "padding-bottom": "11.1%",
      "height": "11.1%"
    };

  for (var i = 0; i <=97; i++) {
    var color = '#'+Math.floor(Math.random()*16777215).toString(16);
    var square = $("<div></div>").css(multiSquare);
    square.css("background-color", color).appendTo(container);
 }
 $("<div></div>").css(multiSquare).appendTo(container);
 square.css("background-color", color).appendTo(container);
}

/**************************************************************************/


function buildGradientBoard() {

}


/**************************************************************************/

function buildFlashyBoard() {
  buildMulticolorBoard();

  var container = $("#container");

  setInterval(function(){
    container.html(buildMulticolorBoard());
  } ,2000);
}
