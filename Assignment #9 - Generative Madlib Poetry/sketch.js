//An excerpt from a Contented Man by Ivan Turgenev
//Link: https://en.wikisource.org/wiki/Dream_Tales_and_Prose_Poems/Poems_in_Prose/A_Contented_Man


var lexicon;
function setup() {
  createCanvas(400, 400);
  lexicon = new RiLexicon();
  background(50);
  fill(255);
  noStroke();
  textSize(32);
  textAlign(CENTER, CENTER);
  text("A Contented Man", width/2, height/2);
}
function draw() {
}
function mousePressed() {
  background(50);
  textAlign(LEFT, TOP);
  
  var output = "A young man goes " +
    lexicon.randomWord("nnp") + 
    " along a street in the " +
    lexicon.randomWord("jj") + ", " +
    lexicon.randomWord("nn") + " " +
    "His movements are " +
    lexicon.randomWord("jj") + " " +
    " and " +
    lexicon.randomWord("vb");
  
  text(output, 10, 10, width-20, height-20);
}