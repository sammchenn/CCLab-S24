let x = 0;
let boatY = 32; //  y-coordinate of the boat

function preload() {
  pic = loadImage('boracay.jpg');
}

function setup() {
  let canvas = createCanvas(400,400);
   canvas.parent("canvasContainer");
}

function draw() {
  background(220);
  image(pic, 0, 0, 400, 400);


  //  boat
  fill('teal');
  beginShape();
  vertex(145 + x, 190 + boatY); //  y-coordinate
  vertex(155 + x, 210 + boatY); //  y-coordinate
  vertex(260 + x, 210 + boatY); //  y-coordinate
  vertex(270 + x, 190 + boatY); //  y-coordinate
  vertex(145 + x, 190 + boatY); //  y-coordinate
  endShape();

  //sail1
  fill('navy');
  stroke('purple');
  beginShape();
  vertex(206 + x, 190 + boatY); //  y-coordinate
  vertex(206 + x, 115 + boatY); //  y-coordinate
  vertex(167 + x, 185 + boatY); //  y-coordinate
  vertex(206 + x, 185 + boatY); //  y-coordinate
  endShape();

  fill('lightblue');
  stroke('teal');
  //sail2
  beginShape();
  vertex(210 + x, 123 + boatY); //  y-coordinate
  vertex(210 + x, 185 + boatY); //  y-coordinate
  vertex(240 + x, 185 + boatY); //  y-coordinate
  vertex(210 + x, 123 + boatY); //  y-coordinate
  endShape();

  //  boat back and forth 
  x += 1;
  if (x >= width) {
    x = -400; // 
  }
}
