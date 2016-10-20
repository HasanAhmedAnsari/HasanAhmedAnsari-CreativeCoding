  var colorFrom, colorTo;
  var rectStep = 25;
  function setup() {
  createCanvas(400,400);
  noLoop();
}

function draw() {
  background(255);
  
  colorFrom = color(80,170,80);
  colorTo = color(10,70,50);

  for(var x=0; x < width; x += rectStep){
    noStroke();

    var lerpAmt = map(x,0,width,0,1);
    
    var lerpedCol = lerpColor(colorFrom,
      colorTo,
      lerpAmt);    
    fill(lerpedCol);
    rect(x,0,rectStep,height);
  }
}