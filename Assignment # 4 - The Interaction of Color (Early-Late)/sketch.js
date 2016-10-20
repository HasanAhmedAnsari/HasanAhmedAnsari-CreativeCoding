var h = 300;
var s = 10;
var b = 100;

var rectStep = 15;
function setup() {
  createCanvas(400,400);
}

function draw() {
  background(255);
  
  for(var i=0; i< width; i+=rectStep){
    for(var y =0; y < height; y+=rectStep){
    noStroke();
    fill(h+i,s+i,b-i);
    rect(i,y,rectStep,rectStep);
    }
  }
}