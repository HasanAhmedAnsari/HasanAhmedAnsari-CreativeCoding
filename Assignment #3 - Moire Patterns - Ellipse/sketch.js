/**
**  Kevin's notes:  Very nice!  Something to think about: How might you refactor this code using functions?  
*/
var ellipseWidthMultplier = 10;
var ellipseHeightMultiplier = 5;
var theta = 45.0;
var rotationSpeed = 0.001;

function setup() {
  createCanvas(400,400);
  rectMode(CENTER);
}

function draw() {
  background(255);
  noFill();
  
//static rhombus
  var x1=195;
  var y1=195;
  var x2=205;
  var y2=205;

  for(var i=0; i<=200; i+=5){
  beginShape();
    vertex(x1-i,y1-i);
    vertex(x2+i,y1-i);
    vertex(x2+i,y2+i);
    vertex(x1-i,y2+i);
  endShape(CLOSE);
  }
  
//rotating rectangle
  translate(width/2,height/2);
  rotate(theta);
  for(var i=0; i<=40; i++){
    ellipse(0,0, i*ellipseWidthMultplier,i*ellipseHeightMultiplier);
  }
  
  theta = theta - rotationSpeed;

}
