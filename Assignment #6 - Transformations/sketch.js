function setup(){
  createCanvas(500,500);
}
function draw() {
  background(125);
  noStroke();
  translate(width/2,height/4);
  noFill();
  rotate(radians(frameCount%360));
  
  colorFrom=color(155,235,180);
  colorTo=color(100,85,140);
  
  colorOne=lerpColor(colorFrom,colorTo,0.1);
  colorTwo=lerpColor(colorFrom,colorTo,0.5);
  
  for(var i =0; i < 10; i++){
    push();
    rotate(TWO_PI * i/5);
  	
    if(i%2==1){
    	fill(colorOne);
    }
    else{
      fill(colorTwo);
    }
    
    triangle(frameCount%(width/2),0,200,200,250,250);
    triangle(frameCount%(width/4),250,250,300,100,150);
    pop();
  }
}
