//We don't get to chose what is true. We only get to choose what we do about it.
//Inspired by Kami Garcia's Beautiful Darkness

var lexicon;
function setup() {
  createCanvas(400, 400);
  lexicon = new RiLexicon();
  background(50);
  fill(random(255), random(200), random(145));
  noStroke();
  textSize(32);
  textAlign(CENTER, CENTER);
  text("Choices by Hasan A Ansari", width/2, height/2);
}
function draw() {
}
function mousePressed() {
  background(255);
  textAlign(CENTER, CENTER);
  
  var output = "We don't get to choose what is " +
    lexicon.randomWord("wrb") + 
    ". We only get to choose what we " +
    lexicon.randomWord("vb") + " " +
    " about " + " " +
    lexicon.randomWord("nn") +
    ".";
  
  text(output, 10, 10, width-20, height-20);
}