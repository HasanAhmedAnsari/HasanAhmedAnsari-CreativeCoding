var posX;
var posY;

function setup() {
  createCanvas(1000,400);
  //you can assign these values up on lines 1 and 2 instead of in the setup function
  posX=100;
  posY=200;
}

function draw() {
 background(0);
  //you pass in params to the flash function but aren't using them in the function definition
  //please change your function definition below to reflect the arguments:  function flash(positionX,positionY)
 flash(posX,posY); 
}

//think about how you might parameterize this character a little more.  How about
//color as a parameter?
function flash(){
  
  noStroke();
  
  //head
  fill('red');
  ellipse(posX,posY,30,30);
  
  //antenna
  fill('yellow');
  triangle(posX-5,posY,posX-5,posY-10,posX-20,posY-10);
  
  //body
  fill('red');
  rect(posX-20,posY+10,40,80);
  
  //logo
  fill('yellow')
  ellipse(posX+10,posY+30,15,15);
  
  //think about how you might animate the legs, so that the character appears to be running across the screen
  //for your final project.  In order to do that you'll need to use push() & pop() and isolate your transformations so you can
  //rotate the legs around a pivot point.
  //legs
  fill('red');
  rect(posX+20,posY+70,40,20);
  rect(posX-20,posY+75,20,30);
  
  //boots
  fill('yellow');
  rect(posX+40,posY+90,20,50);
  rect(posX-60,posY+105,60,20);
  
  //shoes
  fill('yellow');
  triangle(posX+60,posY+140,posX+70,posY+140,posX+40,posY+120);
  triangle(posX-60,posY+120,posX-50,posY+120,posX-60,posY+140);

  //arms
  fill('red');
  rect(posX-60,posY+20,40,15);
  rect(posX-60,posY+20,15,35);
  
  rect(posX+20,posY+20,40,15);
  rect(posX+45,posY,15,35);
  
  //gloves
  fill('yellow');
  rect(posX-60,posY+48,15,8);
  rect(posX+45,posY,15,8);
}

function keyPressed(){
  if(key === 'D'){
    posX +=12;
  } else if(key === 'A'){
    posX -=12;
  } else if(key === 'W'){
    posY -=12;
  } else if(key === 'S'){
    posY +=12;
  } 
}
