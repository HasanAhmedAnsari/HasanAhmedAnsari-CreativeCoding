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
  var x1=50;
  var y1=150;
  var x2=100;
  var y2=100;
  var x3=300;
  var y3=100;
  var x4=350;
  var y4=150;
  var x5=350;
  var y5=250;
  var x6=300;
  var y6=300;
  var x7=100;
  var y7=300;
  var x8=50;
  var y8=250;
  

  for(var i=0; i<=50; i+=5){
  beginShape();
    vertex(x1+i,y1);
    vertex(x2,y2+i);
    vertex(x3,y3+i);
    vertex(x4-i,y4);
    vertex(x5-i,y5);
    vertex(x6,y6-i);
    vertex(x7,y7-i);
    vertex(x8+i,y8);
  endShape(CLOSE);
  }

  //y2 = Math.max(210, y2-10);
  //x1 = Math.max(210, x1-10);
  //x2 = Math.min(190, x2+10);
  //y1 = Math.min(190, y1+10);
  
//rotating rectangle
   translate(width/2,height/2);
  
   rotate(theta);
   for(var i=0; i<=20; i+=0.5){
     rect(0,0, i*rectWidthMultplier,i*rectHeightMultiplier);
   }
  
  theta = theta + rotationSpeed;

}