let rocketY = 100;
let rocketX = 400;
let velocity = 0.1;
let acceleration = 0.1;
let isGameActive = true;

// creating the canva
function setup() {
  createCanvas(800, 800);
  // creating the button
  button = createButton("START");
  button.position(370, 400);
  button.style("color:white");
  button.style("background-color:black");
  button.style("border", "none");
  button.size(100, 50);
  button.hide();
  button.mousePressed(startPlaying);
}

background(0, 0, 0);
// stars
let starX = [];
let starY = [];
let starAlpha = [];

for (let i = 0; i < 152; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const alpha = Math.random();

  starX.push(x);
  starY.push(y);
  starAlpha.push(alpha);
}

// screen 1
function screen1() {
  // sky with stars. source:Garrit's videolecture
  noStroke();
  background(0, 0, 0);

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 4);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
  // title of the game
  fill(255, 255, 255);
  textSize(70);
  text("ASTRO GAME", 150, 206, 900, 500);
  fill(250, 50, 150);
  textSize(70);
  text("ASTRO GAME", 150, 200, 900, 500);
  // instructions of the game
  fill(255, 255, 255);
  textSize(27);
  text("⚠️ use the keybord arrows to make the ufo-rocket land on the oval platform ⚠️", 150, 300, 500, 500);
  button.show();
}
// screen 2
function screen2() {
  // sky with stars. source:Garrit's videolecture
  noStroke();
  background(0, 0, 0);

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 4);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
  button.hide();
}
// screen for when you win the game
function screenWin() {
  noStroke();
  background(0, 0, 0);

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 4);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
  fill(255, 255, 255);
  textSize(70);
  text("YOU WON!", 200, 300, 900, 500);
}
// screen for when you loose the game
function screenLost() {
  noStroke();
  background(0, 0, 0);

  for (let index in starX) {
    fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
    ellipse(starX[index], starY[index], 4);
    starAlpha[index] = starAlpha[index] + 0.02;
  }
  fill(255, 255, 255);
  textSize(70);
  text("YOU LOST!", 200, 300, 900, 500);
}
// ground
function ground(x, y) {
  noStroke();
  fill(211, 211, 211);
  rect(x, y, 800, 500);
  // where to land the rocket
  fill(0, 0, 0);
  ellipse(200, 700, 200, 40);
}
// making the rocket using part of the code from the ufo of the Garrit's exemple
function rocket(x, y) {
  push();
  translate(x, y);

  // end of body
  noStroke();
  fill(244, 194, 194);
  triangle(-80, 90, 0, 0, 80, 90);
  // body of the rocket
  noStroke();
  fill(250, 50, 150);
  ellipse(0, 0, 100, 200);

  // alien
  fill(159, 43, 104);
  beginShape();
  vertex(-10, -50);
  bezierVertex(-10, -45, 10, -45, 10, -50);
  bezierVertex(10, -80, -10, -80, -10, -50);
  endShape();

  // eyes of the alien
  fill(255, 255, 255);
  ellipse(4, -66, 6);
  ellipse(2, -61, 6);
  ellipse(6, -61, 6);

  fill(0, 0, 0);
  ellipse(5, -65, 2);
  ellipse(3, -61, 2);
  ellipse(7, -61, 2);

  // mouth of the alien
  ellipse(5, -53, 4);

  // glass dome
  fill(255, 255, 255, 160);
  beginShape();
  vertex(-20, -50);
  bezierVertex(-20, -45, 20, -45, 20, -50);
  bezierVertex(20, -90, -20, -90, -20, -50);
  endShape();
  // lights
  fill(0, 255, 0);
  ellipse(0, -32, 6, 4);
  ellipse(-16, -34, 6, 4);
  ellipse(16, -34, 6, 4);
  ellipse(-28, -40, 6, 4);
  ellipse(28, -40, 6, 4);

  pop();
}
// source: modified from Garrit's videolecture and helped by Klara Swiecicka
state = "start";

function draw() {
  // screen 1
  if (state === "start") {
    screen1();
    ground(0, 630);
  }
  if (state === "play") {
    // screen 2
    background(255, 255, 255);

    screen2();
    ground(0, 630);
    rocket(rocketX, rocketY);

    if (isGameActive) {
      rocketY = rocketY + velocity;
      velocity = velocity + acceleration;
    }

    if (rocketY > 610) {
      isGameActive = false;
    }
    // make the velocity change if you click the up arrow
    if (keyIsDown(38)) {
      velocity = velocity - 0.3;
    }
    if (keyIsDown(37)) {
      rocketX = rocketX - 4;
    }
    if (keyIsDown(39)) {
      rocketX = rocketX + 4;
    }
  }
  if (rocketX > 150 && rocketX < 250 && rocketY > 604) {
    state = "win";
  }
  if (state === "win") {
    screenWin();
    ground(0, 630);
    rocket(400, 610);
  }
  if (rocketX > 0 && rocketX < 150 && rocketY > 604) {
    state = "lost";
  }
  if (rocketX > 250 && rocketX < 800 && rocketY > 604) {
    state = "lost";
  }
  if (state === "lost") {
    screenLost();
    ground(0, 630);
  }
}
function startPlaying() {
  state = "play";
}
// start again the game when you have finished
function doubleClicked() {
  state = "play";
  rocketX = 400;
  rocketY = 100;
  velocity = 0.1;
  acceleration = 0.1;
  isGameActive = true;
}
