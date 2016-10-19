/**
* Kevin's notes:  Nice work here!  Comments inline...
**/
var rectWidthMultplier = 10;
var rectHeightMultiplier = 10;
var theta = 0.0;
var rotationSpeed = 0.001;

function setup() {
  createCanvas(400,400);
  rectMode(CENTER);
}

function draw() {
  background(255);
  noFill();
  
//Consider naming your variables more descriptively.  Your variable names should answer the question:
//what is this variable doing visually in my sketch?
//Also, I'm not sure if this was unintentional, but the nested static shape isn't a rhombus, it's an octogon
//static rhombus
  var x1=50;
  var y1=150;
  var x2=100;
  var y2=100;
  var x3=300;
  var y3=100;
  var x4=350;
  var y4=150;
  var x5=350;
  var y5=250;
  var x6=300;
  var y6=300;
  var x7=100;
  var y7=300;
  var x8=50;
  var y8=250;
  
  //this is good, but think about how you might make this more dynamic
  //and less hard coded.  Say, for example, you wanted to increase the size of your shapes.
  //With hard coded numbers in your variables, it becomes very tiresome to update the numerical values.
  //Consider using coordinates that are relational to your canvas size.  A shape's dimensions should be somewhat proportional
  //to its canvas.
  //there are many other ways you can think about drawing these shapes.  For example,
  //the static shapes are made of nested rectangles, and each corner is made of nested triangles.
  /*
  Here's a function you can use to create the triangle corners of your shape:
  // centerx is a number
  // centery is a number
  // cornerRotation is a number representing the rotation in degrees
  function makeCorner(centerx,centery, cornerRotation){
	  var x, y;
	  push();
	  translate(centerx,centery);
	  rotate(radians(cornerRotation));
    //loop 10 times
	  for(var i=1; i <= 10; i++){
	    beginShape();
      //each shape has exactly 2 corners
	 	  for(var corner = 0; corner <= 1; corner++){
        // we use sine and cosine to go from polar coordinates to cartesian
        //https://en.wikipedia.org/wiki/Polar_coordinate_system
		    x = cos(radians(360/8 * corner)) * 10 *i;
		    y = sin(radians(360/8 * corner)) * 10 *i;
		    vertex(x,y);	
	    }
	    endShape();
	  }
	  pop();
  }
  */
  for(var i=0; i<=50; i+=5){
  beginShape();
    vertex(x1+i,y1);
    vertex(x2,y2+i);
    vertex(x3,y3+i);
    vertex(x4-i,y4);
    vertex(x5-i,y5);
    vertex(x6,y6-i);
    vertex(x7,y7-i);
    vertex(x8+i,y8);
  endShape(CLOSE);
  }

  //y2 = Math.max(210, y2-10);
  //x1 = Math.max(210, x1-10);
  //x2 = Math.min(190, x2+10);
  //y1 = Math.min(190, y1+10);
  
//rotating rectangle
   translate(width/2,height/2);
  
   rotate(theta);
   for(var i=0; i<=20; i+=0.5){
     rect(0,0, i*rectWidthMultplier,i*rectHeightMultiplier);
   }
  
  theta = theta + rotationSpeed;

}
