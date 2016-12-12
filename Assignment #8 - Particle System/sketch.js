var circleRadii= [];

var x,y;

function setup() {
  createCanvas(windowWidth,windowHeight);
  
}

function draw() {
  background(0);
    for(var i = 0;i<10;i++)
    {
      circleRadii[i] = {
        displaycircle: function() {
          noStroke();
          
          fill(random(0,255), random(0,255), random(0,255));
          x=(random(0, width));
          y=(random(0, height));
          
          ellipse(x,y,80,80);
        }
      }
      circleRadii[i].displaycircle(); 
    }
   
}