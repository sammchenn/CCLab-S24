let drawing = false;
let lastX = 0;
let lastY = 0;
let earImage;

function preload() {
  earImage = loadImage('ear_image.png'); 
}

function setup() {
    let canvas = createCanvas(600,600);
    canvas.parent("canvasContainer");
  background(earImage);
}

function draw() {
  if (drawing) {
    stroke(0);
    strokeWeight(3);
    line(lastX, lastY, mouseX, mouseY);
    lastX = mouseX;
    lastY = mouseY;
  }
}

function mousePressed() {
  drawing = true;
  lastX = mouseX;
  lastY = mouseY;
}

function mouseReleased() {
  drawing = false;
}

function keyPressed() {
  if (key === ' ') {
    clearCanvas();
  } else if (key === 's' || key === 'S') {
    saveCanvas('my_drawing', 'png');
  } else if (key === 'p' || key === 'P') {
    //   pink
    stroke(255, 192, 203);
  } else if (key === 'b' || key === 'B') {
    //  blue
    stroke(0, 0, 255);
  } else if (key === 'g' || key === 'G') {
    //  green
    stroke(0, 255, 0);
  }
}

function clearCanvas() {
  background(earImage); // 
}
