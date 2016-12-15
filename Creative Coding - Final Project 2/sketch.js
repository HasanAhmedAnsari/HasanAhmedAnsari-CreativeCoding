var img;  // Declare variable 'img'.
var destXSlider;
function setup() {
  createCanvas(windowWidth, windowHeight);
  imgOne = loadImage("https://www.openprocessing.org/sketch/393657/files/USA_Flag.gif");
  imgTwo = loadImage("https://www.openprocessing.org/sketch/393657/files/Trump.png");  // Load the image
  
  destXSlider = createSlider(05,100,100);
  destXSlider.position(width/2,height-80);
}

function draw() {
background(255);
image(imgOne,0,0,width,height)  
  // Displays the image at its actual size at point (0,0)
image(imgTwo,
  (width/4)+20, height/5, //source position
  5*destXSlider.value(),5*destXSlider.value())
}