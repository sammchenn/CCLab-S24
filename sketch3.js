let pepperEmoji = '🌶️';
let steamEmoji = '💨';
let sweatEmoji = '💧';
let faceRedness = 0; //  redness of the face
let mouthOpen = false; 
let steamCount = 0; 
let sweatDrops = []; // array to store sweat drop 
let lastDropTime = 0; // 

function setup() {
  let canvas = createCanvas(600,600);
   canvas.parent("canvasContainer");
  noCursor(); // 
}

function draw() {
  background(200, 162, 200);
  
  // 
  fill(0);
  rect(300, 445, 330, 500, 800); // hair
  
  fill(245 + faceRedness, 240 - faceRedness, 240 - faceRedness); 
  ellipse(300, 345, 280, 280); // face
  noStroke(0);
  
  fill(245 + faceRedness, 240 - faceRedness, 240 - faceRedness); 
  rectMode(CENTER);
  rect(300, 415, 80, 400); // neck
  
  fill(119, 140, 200);
  ellipse(300, 675, 350, 300); // body
  
  fill(245 + faceRedness, 240 - faceRedness, 240 - faceRedness); 
  ellipse(240, 138, 70, 200); // ears
  ellipse(360, 138, 70, 200); // ears
  
  fill(255, 182, 193);
  ellipse(240, 130, 45, 150); // inner ears
  ellipse(360, 130, 45, 150); // inner ears

  fill(255, 255, 255);
  ellipse(240, 320, 100, 100); // eyes
  ellipse(360, 320, 100, 100); // eyes
  
  fill(0);
  ellipse(240, 320, 70, 70); // inner eyes
  ellipse(360, 320, 70, 70); // inner eyes
  
  fill(255, 255, 255);
  ellipse(225, 310, 30, 30); // whites of eyes
  ellipse(375, 310, 30, 30); // whites of eyes
  ellipse(250, 340, 10, 10); // whites of eyes
  ellipse(350, 340, 10, 10); // whites of eyes
  
  fill(255, 182, 193);
  if (mouthOpen) {
    arc(300, 400, 50, 50, 0, PI); // open mouth
  } else {
    arc(300, 400, 50, 50, 0, PI); // close mouth
  }
  

  textSize(32);
  text(pepperEmoji, mouseX, mouseY);
  
  
  fill(255);
  textSize(24);
  for (let i = 0; i < steamCount; i++) {
    text(steamEmoji, 240 + random(-10, 10), 140 + random(-10, 10));
    text(steamEmoji, 360 + random(-10, 10), 140 + random(-10, 10));
  }
  

  for (let drop of sweatDrops) {
    fill(0, 0, 255);
    textSize(24);
    text(sweatEmoji, drop.x, drop.y);
    drop.y += 1; 
  }
  
  
}

function mousePressed() {
  mouthOpen = true; 
}

function mouseReleased() {
  mouthOpen = false; 
}

function mouseClicked() {
  faceRedness += 7; 
  if (faceRedness > 255) {
    faceRedness = 255; 
  }

  if (steamCount < 6) { 
    steamCount++; 
  }
  if (millis() - lastDropTime > 1600) {
    sweatDrops.push({x: random(300 - 140, 240 + 140), y: 345 - 140}); 
    lastDropTime = millis(); 
  }
}
