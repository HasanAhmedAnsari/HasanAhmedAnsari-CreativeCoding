var circleRadii= [];
var slider;
var x,y;

function setup() {
  createCanvas(windowWidth,windowHeight);
  slider = createSlider(5,100,100);
  slider.position(width/2,height-80);
  frameRate(30);
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
          
          ellipse(x,y,30+slider.value(),30+slider.value());
        }
      }
      circleRadii[i].displaycircle(); 
    }
   
}
