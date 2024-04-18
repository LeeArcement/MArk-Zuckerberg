// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});


/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////


// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}


// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here

  //applyFilter(decreaseBlue);
  applyFilterNoBackground(increasGreenByBlue);
  //applyFilterNoBackground(reddify);


  // do not change the below line of code
  render($("#display"), image);
}


/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////


// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
  //Iterates over image and applies a filter to each rgb value of image
for (var i = 0; i < image.length; i++){
  for(var j = 0; j < image[i].length; j++){
    var rgbString = image[i][j];
    var rgbNumbers = rgbStringToArray(rgbString);
    filterFunction(rgbNumbers);
    rgbString = rgbArrayToString(rgbNumbers)
    image[i][j] = rgbString
  }
}
}


// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
  //This applies filter to pixels not equal to the top left
  var backColor = image[0][0];
  for (var i = 0; i < image.length; i++){
    for(var j = 0; j < image[i].length; j++){
      var rgb = image[i][j];
      if (rgb !== backColor){
        var rgbNumbers = rgbStringToArray(rgb);
        filterFunction(rgbNumbers);
        rgb = rgbArrayToString(rgbNumbers);
        image[i][j] = rgb;
      }
    }
   
  }
  }

// TODO 5: Create the keepInBounds function
function keepInBounds(num1){
  //Keeps a value passed in under 255 and over 0
  return (num1 < 0) ? 0 : (num1 > 255) ? 255 : num1;
}


// TODO 3: Create reddify function
function reddify(redder){
  //Adds red to image when filtered
  redder[RED] = 200;
}


// TODO 6: Create more filter functions
function decreaseBlue (Blue){
  //removes blue from image when filtered

  Blue[BLUE] = keepInBounds(BLUE - 50);
}
function increaseGreenByBlue (Green){
  //Adds the blue value to green value
  Green[GREEN] = keepInBounds(BLUE + GREEN);
}
// CHALLENGE code goes below here

