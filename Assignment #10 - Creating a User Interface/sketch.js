var circleRadii= [];
var slider;
var x,y;

function setup() {
  createCanvas(800,800);
  slider = createSlider(0.1,200,200);
  slider.position(width/2-65,height-80);
  frameRate(1);
}

function draw() {
  background(0);
    for(var i = 0;i<1;i++)
    {
      circleRadii[i] = {
        displaycircle: function() {
          noStroke();
          
          fill(255);
          x = (width/2, height/2);
          y = (width/2, height/2);
          
          ellipse(x,y,100+slider.value(),100+slider.value());
        }
      }
      circleRadii[i].displaycircle(); 
    }
}