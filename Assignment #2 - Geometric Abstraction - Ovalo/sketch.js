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
  rect(a*2,b*13,a*15,b/4);
  
  fill(125);
  rect(50,90,250,430);
  
  triangle(a*15,b*13,a*17,b*13,a*15,2.25*b);
  
  fill(255);
  ellipse(a*10,b*7.5,a*7.5,6.25*b);
  
  fill(190,190,0);
  ellipse(a*10,7.5*b,120,200);
  
  fill(0);
  ellipse(a*10,7.5*b,60,200);
  
  fill(190);
  ellipse(a*10,7.5*b,24,110);
  
  fill(255,0,0);
  triangle(a*10,290,190,310,210,310);
  
  stroke(255,0,255);
  line(300,90,360,90);
  line(300,90,340,520);
  }
