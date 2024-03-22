/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  //walker varible declared so we can mke the walker move.
var walker = {

  'positionX': 0,
  'positionY': 0,
  'speedX': 0,
  'speedY': 0
};

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
// Changed event to handleKeyDown which is the function with our desired actions.
// now respinds on a keydown event.
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    

  }
  
  /* 
  Called in response to events.
  */
 //changed the name of the handler function to make it more specific and to match our new helper function.
  function handleKeyDown(event) {
    if (event.which === 13){
      console.log("enter pressed");
    } else if(event.which === 39){
      console.log("right pressed");
    } else if(event.which === 37){
      console.log("left pressed");
    } else if(event.which === 40){
      console.log("down pressed");
    } else if(event.which === 38){
      console.log("up pressed");
  }
}
//I made hard coded the values of the key numbers so that they would console.log the key pressed.

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  // two new helper functions called.
  function repositionGameItem(){
    walker.positionX += walker.speedX; // update the position of the box along the x-axis
    walker.positionY += walker.speedY; // update the position of the box along the y-axis
  }
  function redrawGameItem(){
    $("#walker").css("left", walker.positionX); 
    $("#walker").css("top", walker.positionY); 
    // draw the box in the new location, positionX pixels away from the "left"
  }
  
}
