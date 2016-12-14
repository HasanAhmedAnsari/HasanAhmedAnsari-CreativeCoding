//Creating animations

var usainBolt, asterisk;

function preload() {

usainBolt = loadAnimation("UsainBolt_Frame_6.png", "UsainBolt_Frame_40.png");
  
}

function setup() {
  createCanvas(800,600);
}

function draw() {
  background(0);  
  
  //specify the animation instance and its x,y position
  //animation() will update the animation frame as well
  animation(usainBolt, width/2, height/2);
}