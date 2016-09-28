var a = 20;
var b = 40;

function setup() {
  createCanvas(400,600);
}

function draw() {
  println(mouseX);
  println(mouseY);
  
  background(125);
  
  fill(0);
  noStroke();
  rect(a,b,width-40,height-80);
  
  fill(255);
  noStroke();
  rect(a*2,80,320,10);
  
  fill(255);
  noStroke();
  rect(2*a,2*b,a/2,b*11);
  
  fill(255);
  noStroke();
  rect(40,520,300,10);
  
  fill(125);
  rect(50,90,250,430);
  
  triangle(300,520,340,520,300,90);
  
  fill(255);
  ellipse(200,300,150,250);
  
  fill(190,190,0);
  ellipse(200,300,120,200);
  
  fill(0);
  ellipse(200,300,60,200);
  
  fill(190);
  ellipse(200,300,24,110);
  
  fill(255,0,0);
  triangle(200,290,190,310,210,310);
  
  stroke(255,0,255);
  line(300,90,360,90);
  line(300,90,340,520);
  }