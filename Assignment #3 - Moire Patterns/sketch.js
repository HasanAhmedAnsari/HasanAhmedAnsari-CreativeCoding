var rectWidthMultplier = 10;
var rectHeightMultiplier = 10;
var theta = 0.0;
var rotationSpeed = 0.001;

function setup() {
  createCanvas(400,400);
  rectMode(CENTER);
}

function draw() {
  background(255);
  noFill();
  
//static rhombus
  var x1=300;
  var y1=100;
  var x2=100;
  var y2=300;

  for(var i=0; i<=100; i+=5){
  beginShape();
    vertex(200,y1+i);
    vertex(x1-i,200);
    vertex(200,y2-i);
    vertex(x2+i,200);
  endShape(CLOSE);
  }

  //y2 = Math.max(210, y2-10);
  //x1 = Math.max(210, x1-10);
  //x2 = Math.min(190, x2+10);
  //y1 = Math.min(190, y1+10);
  
//rotating rectangle
  translate(width/2,height/2);
  
  rotate(theta);
  for(var i=0; i<=20; i++){
    rect(0,0, i*rectWidthMultplier,i*rectHeightMultiplier);
  }
  
  theta = theta + rotationSpeed;
  
}