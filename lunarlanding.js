// creating the canva
function setup() {
  createCanvas(800, 800);
}

background(0, 0, 0);

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

function draw() {
  background(255, 255, 255);
  rocket(400, 600);
}

function ground (x, y) {
  fill(211, 211, 211);
  rect(x, y, 800, 500);
}

// // sky with stars. source:Garrit's videolecture
// let starX = [];
// let starY = [];
// let starAlpha = [];

// for (let i = 0; i < 152; i++) {
//   const x = Math.floor(Math.random() * width);
//   const y = Math.floor(Math.random() * height);
//   const alpha = Math.random();

//   starX.push(x);
//   starY.push(y);
//   starAlpha.push(alpha);
// }

// function draw() {
//   noStroke();
//   background(0, 0, 0);

//   for (let index in starX) {
//     fill(255, 255, 255, Math.abs(Math.sin(starAlpha[index])) * 255);
//     ellipse(starX[index], starY[index], 4);
//     starAlpha[index] = starAlpha[index] + 0.02;
//   }
// }
