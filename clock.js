let xSize = 700
let ySize = 700 //default sizes
let timeSize = 50  //time size variable
let amPM = 'am'  //sets default to am
let theme = 1  //sets default theme to light
let r = 255;  //sets default r to 255
let g = 255;  //sets default g to 255
let b = 242;  //sets default b tp 242

function preload(){
  font = loadFont('assets/Axis Extrabold.otf'); //load font
  sun = loadImage('assets/sunny.png'); //load sun
  moon = loadImage('assets/moon.png');  //load moon
}

function setup() {
  createCanvas(windowWidth, windowHeight); //create the canvas
  info = createImg('assets/info.png');  //sets the button to info image
  info.position(10, 10);  //sets the button position
  info.mousePressed(infoPush);  //sets the action for button
  backInfo = createImg('assets/back.png');
  settingsInfo = createImg('assets/settings.png')
}

function draw() {
  let hr = hour();  //gets computer hour
  let hrFix = ((hr + 11) % 12 + 1); //makes hour 12 hour time
  let sc = second(); //gets computer seconds
  let mn = minute(); //gets computer minute
  let hrPt = hr * (xSize/24);  //sets the percentage for how fillled the bar is
  let mnPt = mn * (xSize/60);  //sets the percentage for how fillled the bar is
  let scPt = sc * (xSize/60);  //sets the percentage for how fillled the bar is
  let topTextX = xSize/2 //sets the horizontal coordinates for top text
  let centered = (ySize-350)/2;  //sets the vertical coordiantes for top text
  let scFix = second(); //set fixed seconds to normal setting
  let mnFix = minute(); //set fixed mintues to normal setting



  background(r,g,b);  //sets the background color


 //sets the am and pm
if (hr >= 12) {
  amPM = ("pm");
} else {
  amPM = ("am");
}


 //adds 0 to seconds
if (sc < 10 ) {
 scFix = ('0' + sc);
}


//adds o to mintues
if (mn < 10) {
  mnFix = ('0' + mn)
}


//theme setter
if (theme == 1) {  //is the theme light?
  image(sun, 40, 10)
  r = 255;  //sets the theme to light
  g = 255;
  b = 242;
} else if (theme == -1) {  //is the theme dark?
  image(moon,40,10)
  r = 61;  //sets the theme to dark
  g = 72;
  b = 73;
}




  textAlign(CENTER, CENTER);
  textFont(font);  //sets the font
  fill(0);  //sets fill to black
  textSize(timeSize);  //sets text size

  stroke(255);

  text(hrFix + ":" + mnFix + ":" + scFix + " " + amPM, topTextX, centered);  //prints top time

  strokeWeight(4);  //set stroke to 4
  stroke(255);  //sets stroke to white
  textSize(30);  //sets text size to 30
  textAlign(LEFT);
  rectMode(CORNER)

  //hours
  fill(204,241,255);  //sets bar color
  rect(0,ySize - 100,hrPt,100);  //generates bar
  fill(128, 220, 255);  //sets bar text color
  text(hrFix,20,ySize - 35);  //prints time
  text('hours', xSize - 130, ySize - 35);  //prints 'hours'

  //minutes
  fill(255,209,220);  //sets bar color
  rect(0,ySize - 200,mnPt,100); //generate bar
  fill(255, 133, 162);  //sets bar text color
  text(mnFix,20,ySize - 135);  //prints time
  text('minutes', xSize - 165, ySize - 135);  //prints 'minutes'

  //seconds
  fill(177,156,217);  //sets bar color
  rect(0,ySize - 300,scPt,100);  //generates bar
  fill(133, 101, 196);  //sets bar text color
  text(scFix,20,ySize - 235);  //prints time
  text('seconds', xSize - 165, ySize - 235);  //prints 'seconds'

  if (infoPush == 'true') {
    fill(255);
    rectMode(CENTER);
    textAlign(CENTER)
    strokeWeight(4);
    stroke(0);
    rect(xSize/2,ySize/2,xSize/2,ySize/2);
    textSize(23);
    stroke(255);
    fill(133, 101, 196)
    text('aesthetic digital clock', xSize/2, ySize/3);
    textSize(15);
    text('developed by mason thomas', xSize/2, (ySize/3)+20);
    text('how to use:', xSize/2, (ySize/3)+40);
    text('"o" to lower clock size', xSize/2, (ySize/3)+60);
    text('"p" to raise clock size', xSize/2, (ySize/3)+80);
    text('"q" to switch themes', xSize/2, (ySize/3)+100);
    text('"z" to exit the info pane', xSize/2, (ySize/3)+120);
    backInfo.show();
    backInfo.position(xSize/2-175,ySize/2-175);
    backInfo.mousePressed(infoBackPush);
  }




}


function windowResized() {  //if the windows changes size
  xSize = windowWidth  //set the x dimension to the window width
  ySize = windowHeight  //set the y dimension to the window height
  resizeCanvas(windowWidth,windowHeight);  //resize the canvas
}


function keyTyped() {
  if (key === 'p') {
    timeSize = timeSize + 10;
  } else if (key === 'o') {
    timeSize = timeSize - 10;
  } else if (key == 'q') {
    theme = theme * -1
  } else if (key == 'z') {
    infoPush = 'false'
    backInfo.hide();
  }
}

function infoPush() {
  infoPush = 'true'
}

function infoBackPush() {
  infoPush = 'false'
  backInfo.hide();
}



//created by Mason Thomas
