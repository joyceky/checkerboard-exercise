"use strict";
// Your JS goes here
$( document ).ready(function() {
  createContainer();
});

var squareHeight = "11.1%";

var blackSquare = {
    "background-color": "black",
    "width": "11.1%",
    "float": "left",
    "padding-bottom": "11.1%",
    "height": squareHeight
  };

var redSquare = {
    "background-color": "red",
    "width": "11.1%",
    "float": "left",
    "padding-bottom": "11.1%",
    "height": squareHeight
  };

function createContainer(){

  $("body").html("<div id=\"container\"></div>");
  $("#container").css({
          "height": "100%",
          "width": "100%"
  });
  buildCheckerboard();
}
//

function buildCheckerboard() {
  var container = $("#container");
  for (var i = 0; i <=48; i++) {
    $("<div></div>").css(blackSquare).appendTo(container);
    $("<div></div>").css(redSquare).appendTo(container);
 }
 $("<div></div>").css(blackSquare).appendTo(container);
}
