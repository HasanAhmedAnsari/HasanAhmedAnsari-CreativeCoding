var waveLengthOne = 135.0;
var waveLengthTwo = 90.0;
var pointCount = 0;
var angle = 0.0;
var amplitude = 300;
var colorFrom;
var colorTo;
var lerpAmt = 0.5;


function setup(){
  createCanvas(800,800);
  colorMode(HSB, 210,30,40);
  colorFrom = color(random(60),125,140);
  colorTo = color(random(125),135,65);
}

function draw(){
  if(pointCount > 10000){
    noLoop();
  }
  noFill();
  
  var lerpedColor = lerpColor(colorFrom, colorTo, lerpAmt);
  stroke(lerpedColor);
  lerpAmt = map( sin(radians(frameCount)), -1, 1, 0, 1);
  
  translate(width/2, height/2);

 beginShape();
 
  for(var i=0; i < pointCount; i++){
  angle = i / waveLengthOne * TWO_PI;
  var y = sin(angle)* amplitude;
  
  angle = i / waveLengthTwo * TWO_PI;
  var x = sin(angle)* amplitude;
  
  vertex(x,y);
  triangle(x,y,x+=10,y+=10,x+=3,y+=18);
  ellipse(x,y,random(10),random(10));
  }
endShape();

  pointCount++;
}