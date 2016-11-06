function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  
  background(255);
  
  for(var i=0; i< width; i+=2.5){
    push();
    
    colorMode(HSB, 255,100,100);
    var colorFrom = color(255,150,140);
    var colorTo = color(random(80),130,160);
    var lerpAmount = map(i, 0, width, 0, 1.0);
    var lerpedColor = lerpColor(colorFrom, colorTo, lerpAmount);
    fill(lerpedColor);
  
  translate(width/2,height/2); //Translate the object to the Center
  rotate(i * radians(TWO_PI));
  smiley(i,0);
  pop();
  }
}

function smiley(posX,posY) {
  //face
  //fill('yellow');
  ellipse(posX,posY,40,40);
  
  //left eye
  //fill('black');
  ellipse(posX-10,posY-10,5,5);
  
  //right eye
  //fill('black');
  ellipse(posX+10,posY-10,5,5);
  
  //mouth
  //fill('black');
  ellipse(posX,posY+8,14,8);
}